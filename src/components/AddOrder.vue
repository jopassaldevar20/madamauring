<template>
    <div class="add_order_wrapper">
        <div class="ao__pattern_type_symbol">
            <div class="pts__pattern">
                <p>Pattern</p>

                <input maxlength="10" v-model="pattern" />
            </div>

            <div class="pts__type">
                <p>Type</p>

                <select v-model="type">
                    <option v-for="value in typeList" :key="value">{{ value }}</option>
                </select>
            </div>

            <div class="pts__symbol">
                <p>Symbol</p>

                <select v-model="symbol">
                    <option v-for="value in symbolList" :key="value">{{ value }}</option>
                </select>
            </div>
        </div>

        <div class="ao__date_inputs">
            <div>
                <p>Year</p>

                <input maxlength="4" placeholder="Year" v-model="year" />
            </div>

            <div>
                <p>Month</p>

                <input maxlength="2" placeholder="Month" v-model="month" />
            </div>

            <div>
                <p>Day</p>

                <input maxlength="2" placeholder="Day" v-model="day" />
            </div>

            <div>
                <p>Hour</p>

                <input maxlength="2" placeholder="Hour" v-model="hour" />
            </div>

            <div>
                <p>Minute</p>

                <input maxlength="2" placeholder="Minute" v-model="minute" />
            </div>
        </div>

        <div class="ao__buttons_container">
            <div @click="handleSearch">
                <p>Search</p>
            </div>

            <div :class="{ 'bc__submit_disabled': searchPattern === '' }" @click="handleSubmit">
                <p>Submit</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'AddOrder',

    data () {
        return {
            pattern: '',
            type: 'Buy',
            typeList: [
                'Buy',
                'Sell   '
            ],
            symbol: 'EURUSD',
            symbolList: [
                'EURUSD',
                'USDCAD',
                'USDJPY',
                'NZDUSD',
                'AUDUSD',
                'GBPUSD'
            ],
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            daysName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            monthsName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };
    },

    computed: {
        ...mapState(['searchPattern'])
    },

    methods: {
        ...mapMutations(['updateToast', 'updateSearchPattern', 'updateSearchBull', 'updateSearchBear', 'updateBlockUi']),

        ...mapActions(['appendNewOrder', 'isPatternExist']),

        validateInputs () {
            let hasError = '';

            if (this.pattern === '' || this.pattern.length !== 10) {
                hasError += ' pattern';
            }

            if (this.type === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'type';
            }

            if (this.symbol === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'symbol';
            }

            if (this.year === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'year';
            }

            if (this.month === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'month';
            }

            if (this.day === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'day';
            }

            if (this.hour === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'hour';
            }

            if (this.minute === '') {
                hasError += (hasError.length > 0 ?  ', ' : ' ') + 'minute';
            }

            if (hasError.length > 0) {
                this.updateToast({ type: 'failed', message: `Please provide ${hasError}.` });

                return false;
            } else {
                this.updateToast({ type: '', message: '' });

                return true;
            }
        },

        async handleSearch () {
            this.updateBlockUi({ blockUi: true });
            const passed = this.validateInputs();

            if (passed) {
                const patternExist = await this.isPatternExist({ pattern: this.pattern });

                if (patternExist) {
                    this.updateSearchPattern({ searchPattern: patternExist.pattern });
                    this.updateSearchBull({ searchBull: patternExist.up });
                    this.updateSearchBear({ searchBear: patternExist.down });
                } else {
                    this.updateSearchPattern({ searchPattern: '' });
                    this.updateSearchBull({ searchBull: 0 });
                    this.updateSearchBear({ searchBear: 0 });
                }
            }

            this.updateBlockUi({ blockUi: false });
        },

        async handleSubmit () {
            if (this.searchPattern !== '') {
                this.updateBlockUi({ blockUi: true });
                const passed = this.validateInputs();

                if (passed) {
                    const newDate = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
                    const day = this.daysName[newDate.getDay()];
                    const date = newDate.getDate().toString().length === 1 ? `0${newDate.getDate()}` : newDate.getDate();
                    const month = this.monthsName[newDate.getMonth()];
                    const year = newDate.getFullYear();
                    const time = `${newDate.getHours()}:${newDate.getMinutes()}:00`;

                    const dateString = `${day}, ${date} ${month} ${year} ${time}`;

                    await this.appendNewOrder({
                        pattern: this.pattern,
                        type: this.type,
                        symbol: this.symbol,
                        date: dateString
                    });
                }

                this.pattern = '';
                this.updateSearchPattern({ searchPattern: '' });
                this.updateSearchBull({ searchBull: 0 });
                this.updateSearchBear({ searchBear: 0 });
                this.updateBlockUi({ blockUi: false });
            }
        }
    },

    created () {
        const now = new Date();

        this.year = now.getFullYear();
        this.month = now.getMonth() + 1;
        this.day = now.getDate();
        this.hour = now.getHours();
        this.minute = now.getMinutes();
    }
};
</script>

<style scoped lang="scss">
.add_order_wrapper {
    padding: 30px;
    margin-bottom: 20px;
    background-color: #131633;
    border-radius: 6px;

    > div {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .ao__label_pattern {
        > p {
            margin-bottom: 10px;
            font-size: 14px;
        }
    }

    .ao__pattern_type_symbol {
        display: flex;
        justify-content: space-between;

        .pts__pattern {
            flex-basis: 40%;
        }

        .pts__type, .pts__symbol {
            flex-basis: 24%;
        }

        > div {
            > p {
                margin-bottom: 10px;
                font-size: 14px;
            }
        }
    }

    .ao__date_inputs {
        display: flex;
        justify-content: space-between;

        > div {
            flex-basis: 18%;

            > p {
                margin-bottom: 10px;
                font-size: 14px;
            }
        }
    }

    .ao__buttons_container {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        > div {
            padding: 10px;
            flex-basis: 48%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
            border-radius: 4px;
            cursor: pointer;

            &:hover:not(.bc__submit_disabled) {
                background-color: darken(#f8f9fa, 20%);
            }

            &.bc__submit_disabled {
                opacity: .5;
                cursor: not-allowed;
            }

            > p {
                color: #212529;
            }
        }
    }
}
</style>
