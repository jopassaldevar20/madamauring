import Vue from 'vue';
import Vuex from 'vuex';
import { API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPES, SPREADSHEET_ID } from './config';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isSignedIn: false,
        toast: {
            type: '',
            message: ''
        },
        searchPattern: '',
        searchBull: 0,
        searchBear: 0,
        blockUi: false,
        orderList: []
    },

    getters: {

    },

    mutations: {
        updateIsSignedIn (state, payload) {
            state.isSignedIn = payload.isSignedIn;
        },

        updateToast (state, payload) {
            state.toast.type = payload.type || '';
            state.toast.message = payload.message || '';
        },

        updateSearchPattern (state, payload) {
            state.searchPattern = payload.searchPattern;
        },

        updateSearchBull (state, payload) {
            state.searchBull = payload.searchBull;
        },

        updateSearchBear (state, payload) {
            state.searchBear = payload.searchBear;
        },

        updateBlockUi (state, payload) {
            state.blockUi = payload.blockUi;
        },

        updateOrderList (state, payload) {
            state.orderList = [...payload.orderList];
        }
    },

    actions: {
        loadGoogleApi ({ commit }) {
            window.gapi.load('client:auth2', async () => {
                try {
                    await window.gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        discoveryDocs: DISCOVERY_DOCS,
                        scope: SCOPES
                    });

                    /**
                     * Listen for sign-in state changes.
                     */
                    window.gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => {
                        commit('updateIsSignedIn', { isSignedIn });
                    });

                    /**
                     * Handle the initial sign-in state.
                     */
                    commit('updateIsSignedIn', { isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() });
                } catch (error) {
                    commit('updateToast', { type: 'failed', message: error });
                }
            });
        },

        async signInAuth () {
            await window.gapi.auth2.getAuthInstance().signIn();
        },

        signOutAuth () {
            window.gapi.auth2.getAuthInstance().signOut();
        },

        async getAllOrdered ({ commit }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: SPREADSHEET_ID,
                    range: 'Order!A2:D1000'
                });

                const range = response.result;
                let orderList = [];

                if (range.values && range.values.length > 0) {
                    for (let i = 0; i < range.values.length; i++) {
                        const row = range.values[i];

                        orderList.push({
                            pattern: row[0],
                            type: row[1],
                            symbol: row[2],
                            date: row[3],
                            rowNumber: i+2
                        });
                    }
                }

                commit('updateOrderList', { orderList });
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
            }
        },

        async appendNewOrder ({ commit, state }, { pattern, type, symbol, date }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: 'Order!A2',
                    valueInputOption: 'RAW'
                }, {
                    "majorDimension": "ROWS",
                    "values": [[pattern, type, symbol, date]]
                });

                const splitString = response.result.updates.updatedRange.split(':');
                const rowNumber = Number(splitString[1].substr(1));
                const newOrder = { pattern, type, symbol, date, rowNumber };

                commit('updateOrderList', { orderList: [...state.orderList, newOrder] });
                return response;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        async appendNewPattern ({ commit }, { pattern, up, down }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: 'Pattern!A2',
                    valueInputOption: 'RAW'
                }, {
                    "majorDimension": "ROWS",
                    "values": [[pattern, up, down]]
                });

                return response;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        async updatePattern ({ commit }, { rowNumber, pattern, up, down }) {
            try {
                const range = `Pattern!A${rowNumber}:C${rowNumber}`;

                await window.gapi.client.sheets.spreadsheets.values.update({
                    spreadsheetId: SPREADSHEET_ID,
                    range,
                    valueInputOption: 'RAW'
                }, {
                    "majorDimension": "ROWS",
                    "values": [[pattern, up, down]]
                });

                return true;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        deleteOrder ({ commit }, { rowNumber }) {
            return new Promise (async (resolve, reject) => {
                try {
                    const range = `Order!A${rowNumber}:D${rowNumber}`;

                    await window.gapi.client.sheets.spreadsheets.values.clear({
                        spreadsheetId: SPREADSHEET_ID,
                        range
                    });

                    resolve();
                } catch (error) {
                    commit('updateToast', { type: 'failed', message: error });
                    reject();
                }
            });
        },

        async isPatternExist ({ commit }, { pattern }) {
            try {
                let rangeStart = 2;
                let rangeEnd = 11;

                const requestData = async (range) => {
                    const response = await window.gapi.client.sheets.spreadsheets.values.get({
                        spreadsheetId: SPREADSHEET_ID,
                        range
                    });

                    return response;
                };


                let patternData = null;
                let startOver = true;

                do {
                    const success = await requestData(`Pattern!A${rangeStart}:C${rangeEnd}`);
                    const resultValues = success.result.values;

                    if (resultValues) {
                        const values = resultValues;

                        for (let i = 0; i < values.length; i++) {
                            const value = values[i];
                            const rowNumber = rangeStart++;

                            if (value[0] === pattern) {
                                patternData = {
                                    pattern: value[0],
                                    up: Number(value[1]),
                                    down: Number(value[2]),
                                    rowNumber
                                };
                            }
                        }

                        rangeStart = rangeEnd + 1;
                        rangeEnd = rangeStart + 10;

                        if (patternData || values.length !== 10) {
                            startOver = false;
                        } else {
                            startOver = true;
                        }
                    } else {
                        startOver = false;
                    }
                } while (startOver);

                return patternData ? { ...patternData } : null;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        }
    }
});
