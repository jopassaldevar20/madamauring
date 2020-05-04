<template>
    <BaseCard class="pattern_helper_wrapper">
        <div class="ph__helper_converter">
            <div class="hc__input_output">
                <input maxlength="10" v-model="pattern" />

                <div class="io__copy_text">
                    <i class="material-icons" @click="copyPattern">file_copy</i>

                    <p>{{ converted }}</p>
                </div>
            </div>

            <div class="base_button blue" @click="convertPattern">
                <p>CONVERT</p>
            </div>
        </div>

        <div class="ph__helper_calculator">
            <div class="hc__multiplier">
                <input v-model="divider" />

                <p class="m__by">x2</p>

                <div class="m__equal">
                    <p>{{ multiplier }}</p>
                </div>
            </div>

            <div class="hc__pips">
                <input maxlength="10" v-model="pip" />

                <div class="p__minus">
                    <p>{{ pipMinus }}</p>
                </div>

                <div class="p__plus">
                    <p>{{ pipPlus }}</p>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { mapMutations } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'PatternHelper',

    components: {
        BaseCard
    },

    data () {
        return {
            pattern: '',
            converted: 'XXXXXXXXXX',
            divider: '',
            pip: '',
        };
    },

    computed: {
        multiplier () {
            return Number(this.divider) * 2;
        },

        pipMinus () {
            return Number(this.pip) - this.multiplier;
        },

        pipPlus () {
            return Number(this.pip) + this.multiplier;
        }
    },

    methods: {
        ...mapMutations(['updateToast', 'updateConvertedPattern']),

        copyPattern () {
            this.updateConvertedPattern({ convertedPattern: this.converted });
        },

        convertPattern () {
            if (this.pattern.length === 10) {
                this.converted = this.pattern.split('').reverse().join('');
            } else {
                this.updateToast({ type: 'failed', message: 'Please provide 10 digits.' });
            }
        }
    }
};
</script>

<style scoped lang="scss">
.pattern_helper_wrapper {
    .ph__helper_converter {
        padding: 10px;
        border-bottom: 1px solid #313452;

        .hc__input_output {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > input {
                flex-basis: 60%;
                text-align: center;
            }

            .io__copy_text {
                margin-left: 10px;
                display: flex;
                align-items: center;

                > i {
                    color: #4d83ff;
                    cursor: pointer;
                    -webkit-touch-callout: none;
                    user-select: none;
                }

                > p {
                    margin-left: 10px;
                    font-weight: 700;
                }
            }
        }

        .ph__button {
            padding: 10px;
            flex-basis: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: darken(#f8f9fa, 20%);
            }

            > p {
                color: #212529;
            }
        }
    }

    .ph__helper_calculator {
        padding: 10px;

        .hc__multiplier {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            > input {
                flex-basis: 40%;
            }

            .m__by {
                padding: 0 30px;
            }

            .m__equal {
                height: 36px;
                padding: 0 8px;
                flex-basis: 40%;
                display: flex;
                align-items: center;
                border: 2px solid #1e1e2f;
                border-radius: 4px;
            }
        }

        .hc__pips {
            display: flex;
            justify-content: space-between;

            > * {
                flex-basis: 30%;
            }

            .p__minus > p {
                color: #ff4747;
            }

            .p__plus > p {
                color: #71c016;
            }

            .p__minus, .p__plus {
                height: 36px;
                padding: 0 8px;
                display: flex;
                align-items: center;
                border: 2px solid #1e1e2f;
                border-radius: 4px;
            }
        }
    }
}
</style>
