<template>
    <BaseCard class="search_result_wrapper">
        <div class="sr__pattern">
            <p>PATTERN</p>

            <p>{{ parsedPattern }}</p>
        </div>

        <div class="sr__up_down">
            <div class="ud__line_direction ld__up">
                <p>{{ isNaN(upPercent) ? 0 : upPercent }}<span>%</span></p>

                <div>
                    <p>{{ addZeros(searchBull) }}</p>

                    <i class="material-icons">trending_up</i>
                </div>
            </div>

            <div class="ud__line_direction ld__down">
                <p>{{ isNaN(upPercent) ? 0 : downPercent }}<span>%</span></p>

                <div>
                    <p>{{ addZeros(searchBear) }}</p>

                    <i class="material-icons">trending_down</i>
                </div>
            </div>
        </div>

        <div class="sr__secondary">
            <p class="s__label">OPPOSITE</p>

            <p>{{ parsedSecondaryPattern }}</p>

            <p class="s__bull">{{ addZeros(searchSecondaryBull) }}</p>

            <p class="s__bear">{{ addZeros(searchSecondaryBear) }}</p>
        </div>
    </BaseCard>
</template>

<script>
import { mapState } from 'vuex';
import BaseCard from '@/components/BaseCard';

export default {
    name: 'SearchResult',

    components: {
        BaseCard
    },

    computed: {
        ...mapState([
            'searchPattern',
            'searchBull',
            'searchBear',
            'searchSecondaryPattern',
            'searchSecondaryBull',
            'searchSecondaryBear'
        ]),

        parsedPattern () {
            return this.searchPattern === '' ? 'XXXXXXXXXX' : this.searchPattern;
        },

        upPercent () {
            return Math.round(this.searchBull / this.sumOfResult * 100);
        },

        downPercent () {
            return Math.round(this.searchBear / this.sumOfResult * 100);
        },

        sumOfResult () {
            return this.searchBull + this.searchBear;
        },

        parsedSecondaryPattern () {
            return this.searchSecondaryPattern === '' ? 'XXXXXXXXXX' : this.searchSecondaryPattern;
        },
    },

    methods: {
        addZeros (num) {
            let numStr = num.toString();

            while (numStr.length < 3) {
                numStr = `0${numStr}`;
            }

            return numStr;
        }
    }
};
</script>

<style scoped lang="scss">
.search_result_wrapper {
    .sr__pattern {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #313452;

        > p {
            font-weight: 700;
        }
    }

    .sr__up_down {
        padding: 10px;
        display: flex;
        justify-content: space-around;

        .ud__line_direction {
            padding-left: 10px;

            &.ld__up {
                border-left: 4px solid #71c016;

                > div > i {
                    color: #71c016;
                }
            }

            &.ld__down {
                border-left: 4px solid #ff4747;

                > div > i {
                    color: #ff4747;
                }
            }

            > p {
                font-size: 30px;
                font-weight: 700;

                > span {
                    margin-left: 2px;
                    font-size: 20px;
                }
            }

            > div {
                display: flex;

                > i {
                    margin-left: 4px;
                    color: #71c016;
                }

                > p {
                    font-size: 18px;
                }
            }
        }
    }

    .sr__secondary {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #313452;

        .s__label {
            font-weight: 700;
        }

        .s__bull {
            padding-left: 6px;
            border-left: 2px solid #71c016;
        }

        .s__bear {
            padding-left: 6px;
            border-left: 2px solid #ff4747;
        }
    }
}
</style>
