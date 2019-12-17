import Vue from 'vue';
import Vuex from 'vuex';

import { NUMBER_OF_REQUEST } from './config';

import tools from './common/tools';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mahiwaga: null,
        isSignedIn: false,
        toast: {
            type: '',
            message: ''
        },
        convertedPattern: '',
        searchPattern: '',
        searchBull: 0,
        searchBear: 0,
        blockUi: false,
        orderList: [],
        rightOrder: 0,
        wrongOrder: 0,
        orderResultRowNumber: null,
        orderHistory: []
    },

    mutations: {
        updateMahiwaga (state, payload) {
            state.mahiwaga = payload;
        },

        updateIsSignedIn (state, payload) {
            state.isSignedIn = payload.isSignedIn;
        },

        updateToast (state, payload) {
            state.toast.type = payload.type || '';
            state.toast.message = payload.message || '';
        },

        updateConvertedPattern (state, payload) {
            state.convertedPattern = payload.convertedPattern;
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
        },

        updateRightOrder (state, payload) {
            state.rightOrder = payload.rightOrder;
        },

        updateWrongOrder (state, payload) {
            state.wrongOrder = payload.wrongOrder;
        },

        updateOrderResultRowNumber (state, payload) {
            state.orderResultRowNumber = payload.orderResultRowNumber;
        },

        updateOrderHistory (state, payload) {
            state.orderHistory = [...payload.orderHistory];
        }
    },

    actions: {
        loadGoogleApi ({ commit, state }) {
            window.gapi.load('client:auth2', async () => {
                try {
                    await window.gapi.client.init({
                        apiKey: state.mahiwaga.palad,
                        clientId: state.mahiwaga.baraha,
                        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                        scope: 'https://www.googleapis.com/auth/spreadsheets'
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

        async getAllOrdered ({ commit, state }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: state.mahiwaga.bola,
                    range: 'Order!A2:D1000'
                });

                const range = response.result;
                let orderList = [];

                if (range.values && range.values.length > 0) {
                    for (let i = 0; i < range.values.length; i++) {
                        const row = range.values[i];

                        if (row.length > 0) {
                            orderList.push({
                                pattern: row[0],
                                type: row[1],
                                symbol: row[2],
                                date: new Date(row[3]),
                                rowNumber: i + 2
                            });
                        }
                    }
                }

                commit('updateOrderList', { orderList: [...tools.sortArrayByKey(orderList, 'date')] });
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
            }
        },

        async appendNewOrder ({ commit, state }, { pattern, type, symbol, createdAt }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.append({
                    spreadsheetId: state.mahiwaga.bola,
                    range: 'Order!A2',
                    valueInputOption: 'RAW'
                }, {
                    'majorDimension': 'ROWS',
                    'values': [[pattern, type, symbol, createdAt]]
                });

                const splitString = response.result.updates.updatedRange.split(':');
                const rowNumber = Number(splitString[1].substr(1));
                const date = new Date(createdAt);
                const newOrder = { pattern, type, symbol, date, rowNumber };

                commit('updateOrderList', { orderList: [...state.orderList, newOrder] });
                return response;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        async appendNewPattern ({ commit, state }, { pattern, up, down }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.append({
                    spreadsheetId: state.mahiwaga.bola,
                    range: 'Pattern!A2',
                    valueInputOption: 'RAW'
                }, {
                    'majorDimension': 'ROWS',
                    'values': [[pattern, up, down]]
                });

                return response;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        async updatePattern ({ commit, state }, { rowNumber, pattern, up, down }) {
            try {
                const range = `Pattern!A${rowNumber}:C${rowNumber}`;

                await window.gapi.client.sheets.spreadsheets.values.update({
                    spreadsheetId: state.mahiwaga.bola,
                    range,
                    valueInputOption: 'RAW'
                }, {
                    'majorDimension': 'ROWS',
                    'values': [[pattern, up, down]]
                });

                return true;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        async deleteOrder ({ commit, state }, { rowNumber }) {
            try {
                const range = `Order!A${rowNumber}:D${rowNumber}`;

                await window.gapi.client.sheets.spreadsheets.values.clear({
                    spreadsheetId: state.mahiwaga.bola,
                    range
                });

                const newOrderList = state.orderList.filter(v => v.rowNumber !== rowNumber);

                commit('updateOrderList', { orderList: newOrderList });
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
            }
        },

        async getMisc ({ commit, state }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: state.mahiwaga.bola,
                    range: 'Misc!A1:D1'
                });

                const values = response.result.values;

                for (let i = 0; i < values.length; i++) {
                    const item = values[i];

                    if (item[0] === 'order-results') {
                        commit('updateOrderResultRowNumber', { orderResultRowNumber: i + 1 });
                        commit('updateRightOrder', { rightOrder: Number(item[1]) });
                        commit('updateWrongOrder', { wrongOrder: Number(item[2]) });
                    }
                }
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
            }
        },

        async updateOrderResult ({ commit, state }, { isRight }) {
            try {
                if (isRight) {
                    commit('updateRightOrder', { rightOrder: state.rightOrder + 1 });
                } else {
                    commit('updateWrongOrder', { wrongOrder: state.wrongOrder + 1 });
                }

                await window.gapi.client.sheets.spreadsheets.values.update({
                    spreadsheetId: state.mahiwaga.bola,
                    range: `Misc!A${state.orderResultRowNumber}:C${state.orderResultRowNumber}`,
                    valueInputOption: 'RAW'
                }, {
                    'majorDimension': 'ROWS',
                    'values': [['order-results', state.rightOrder, state.wrongOrder]]
                });

                return true;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        },

        async isPatternExist ({ commit, state }, { pattern }) {
            try {
                let rangeStart = 2;
                let rangeEnd = NUMBER_OF_REQUEST + 1;

                const requestData = async (range) => {
                    const response = await window.gapi.client.sheets.spreadsheets.values.get({
                        spreadsheetId: state.mahiwaga.bola,
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
                        rangeEnd = rangeStart + NUMBER_OF_REQUEST - 1;

                        if (patternData || values.length !== NUMBER_OF_REQUEST) {
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
        },

        async getAllOrderHistory ({ commit, state }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: state.mahiwaga.bola,
                    range: 'History!A2:E1000'
                });

                const range = response.result;
                let orderHistory = [];

                if (range.values && range.values.length > 0) {
                    for (let i = 0; i < range.values.length; i++) {
                        const row = range.values[i];

                        if (row.length > 0) {
                            orderHistory.push({
                                pattern: row[0],
                                type: row[1],
                                symbol: row[2],
                                result: row[3],
                                date: new Date(row[4]),
                                rowNumber: i + 2
                            });
                        }
                    }
                }

                commit('updateOrderHistory', { orderHistory: [...tools.sortArrayByKey(orderHistory, 'date')] });
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
            }
        },

        async appendNewHistory ({ commit, state }, { pattern, type, symbol, result, createdAt }) {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.append({
                    spreadsheetId: state.mahiwaga.bola,
                    range: 'History!A2',
                    valueInputOption: 'RAW'
                }, {
                    'majorDimension': 'ROWS',
                    'values': [[pattern, type, symbol, result, createdAt]]
                });

                const splitString = response.result.updates.updatedRange.split(':');
                const rowNumber = Number(splitString[1].substr(1));
                const date = new Date(createdAt);
                const newOrder = { pattern, type, symbol, result, date, rowNumber };
                const concatHistory = [...state.orderHistory, newOrder];

                commit('updateOrderHistory', { orderHistory: [...tools.sortArrayByKey(concatHistory, 'date')] });
                return response;
            } catch (error) {
                commit('updateToast', { type: 'failed', message: error });
                return false;
            }
        }
    }
});
