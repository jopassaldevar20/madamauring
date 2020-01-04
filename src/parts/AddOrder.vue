<template>
    <BaseCard class="add_order_wrapper">
        <div class="ao__pattern_type_symbol">
            <div class="ao__label_inputs pts__pattern">
                <p>PATTERN</p>

                <input maxlength="10" v-model="pattern" />
            </div>

            <div class="ao__label_inputs pts__type">
                <p>TYPE</p>

                <select v-model="type">
                    <option v-for="value in tradeType" :key="value">{{ value }}</option>
                </select>
            </div>

            <div class="ao__label_inputs pts__symbol">
                <p>SYMBOL</p>

                <select v-model="symbol">
                    <option v-for="value in tradeSymbol" :key="value">{{ value }}</option>
                </select>
            </div>
        </div>

        <div class="ao__date_inputs">
            <div class="ao__label_inputs di__date">
                <p>DATE</p>

                <diV>
                    <p>{{ constructDate }}</p>
                </diV>
            </div>

            <div class="ao__label_inputs di__hours">
                <p>HOUR</p>

                <input maxlength="2" v-model="hour" />
            </div>

            <div class="ao__label_inputs di__minutes">
                <p>MINUTE</p>

                <input maxlength="2" v-model="minute" />
            </div>
        </div>

        <div class="ao__buttons_container">
            <div class="base_button orange" @click="handleSearch">
                <p>SEARCH</p>
            </div>

            <div :class="{ 'base_button': true, 'blue': true, 'disabled': searchPattern === '' }" @click="handleSubmit">
                <p>SUBMIT</p>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import { monthNames, tradeType, tradeSymbol } from '@/common/collections';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'AddOrder',

    components: {
        BaseCard
    },

    data () {
        return {
            pattern: '',
            type: 'BUY',
            tradeType,
            symbol: 'EURUSD',
            tradeSymbol,
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: ''
        };
    },

    computed: {
        ...mapState(['convertedPattern', 'searchPattern', 'searchBull', 'searchBear']),

        constructDate () {
            return `${monthNames[this.month]} ${this.day}, ${this.year}`;
        }
    },

    methods: {
        ...mapMutations([
            'updateToast',
            'updateSearchPattern',
            'updateSearchBull',
            'updateSearchBear',
            'updateBlockUi',
            'updateConvertedPattern'
        ]),

        ...mapActions(['appendNewOrder', 'isPatternExist']),

        validateInputs () {
            const isValid = Boolean(
                this.pattern !== '' &&
                this.pattern.length === 10 &&
                this.type !== '' &&
                this.symbol !== '' &&
                this.hour !== '' &&
                this.minute !== ''
            );

            if (!isValid) {
                this.updateToast({ type: 'failed', message: `Please complete the field.` });
            }

            return isValid;
        },

        async handleSearch () {
            this.updateBlockUi({ blockUi: true });
            const passed = this.validateInputs();

            if (passed) {
                const patternExist = await this.isPatternExist({ pattern: this.pattern });

                this.updateSearchPattern({ searchPattern: patternExist ? patternExist.pattern : '' });
                this.updateSearchBull({ searchBull: patternExist ? patternExist.up : 0 });
                this.updateSearchBear({ searchBear: patternExist ? patternExist.down : 0 });
            }

            this.updateBlockUi({ blockUi: false });
        },

        async handleSubmit () {
            if (this.searchPattern !== '') {
                this.updateBlockUi({ blockUi: true });

                const passed = this.validateInputs();

                if (passed) {
                    await this.appendNewOrder({
                        pattern: this.pattern,
                        type: this.type,
                        symbol: this.symbol,
                        createdAt: new Date(this.year, this.month, this.day, this.hour, this.minute),
                        up: this.searchBull,
                        down: this.searchBear
                    });
                        
                    this.pattern = '';
                    this.updateSearchPattern({ searchPattern: '' });
                    this.updateSearchBull({ searchBull: 0 });
                    this.updateSearchBear({ searchBear: 0 });
                }
                
                this.updateBlockUi({ blockUi: false });
            }
        }
    },

    watch: {
        convertedPattern (newValue) {
            if (newValue !== '') {
                this.pattern = newValue;
                this.updateConvertedPattern({ convertedPattern: '' });
            }
        }
    },

    created () {
        const now = new Date();

        this.year = now.getFullYear();
        this.month = now.getMonth();
        this.day = now.getDate();
        this.hour = now.getHours();
        this.minute = now.getMinutes();
    }
};
</script>

<style scoped lang="scss">
.add_order_wrapper {
    padding: 10px;

    .ao__label_inputs > p {
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: 700;
    }

    .ao__pattern_type_symbol {
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;

        .pts__pattern {
            flex-basis: 38%;
        }

        .pts__type {
            flex-basis: 24%;
        }

        .pts__symbol {
            flex-basis: 32%;
        }
    }

    .ao__date_inputs {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;

        .di__date {
            flex-basis: 60%;

            > div {
                height: 36px;
                padding: 0 8px;
                display: flex;
                align-items: center;
                border: 2px solid #1e1e2f;
                border-radius: 4px;
            }
        }

        .di__hours, .di__minutes {
            flex-basis: 17%;
        }
    }

    .ao__buttons_container {
        display: flex;
        justify-content: space-between;

        > div {
            flex-basis: 48%;
        }
    }
}
</style>
