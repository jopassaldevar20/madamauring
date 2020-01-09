<template>
    <BaseCard class="pattern_stats_wrapper">
        <div class="ps__up_down">
            <p>HIGHEST</p>

            <div class="ud__up">
                <p>{{ addZeros(highestUpDown.up) }}</p>

                <i class="material-icons">trending_up</i>
            </div>
            
            <div class="ud__down">
                <p>{{ addZeros(highestUpDown.down) }}</p>
                
                <i class="material-icons">trending_down</i>
            </div>
        </div>

        <div class="ps__equal_graph">
            <div class="eg__total_pattern">
                <p class="tp__label">PATTERN</p>
                
                <i class="material-icons">double_arrow</i>
                
                <p>{{ totalPattern }}</p>
            </div>

            <div class="eg__color_value">
                <div
                    v-for="(value, index) in equalUpDown" 
                    :key="`label-${index}`"
                    class="cv__item"
                >
                    <div class="i__circle">
                        <span v-for="circle in (index + 2)" :key="`circle-${index}-${circle}`"></span>
                    </div>

                    <p>{{ value[0] }}</p>

                    <p>({{ value[1] }})</p>
                </div>
            </div>
            
            <div class="eg__total">
                <p class="t__label">TOTAL</p>

                <i class="material-icons">double_arrow</i>

                <p>{{ totalEqual }}</p>
            </div>

            <div class="eg__graph">
                <div
                    v-for="(value, index) in equalUpDown" 
                    :key="`graph-${index}`"
                    class="g__item"
                    :style="{ height: `${value[1]}px` }"
                >
                    <span v-for="bar in (index + 1)" :key="`bar-${index}-${bar}`"></span>
                </div>
            </div>
        </div>
            
        <div class="base_button blue" @click="getAllPattern">
            <p>UPDATES</p>
        </div>
    </BaseCard>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'PatternStats',

    components: {
        BaseCard
    },

    computed: {
        ...mapState([
            'highestUpDown',
            'equalUpDown',
            'isSignedIn',
            'totalPattern'
        ]),

        totalEqual () {
            return this.equalUpDown.reduce((p, c) => p + c[1], 0);
        }
    },

    methods: {
        ...mapActions([
            'getAllPattern'
        ]),

        addZeros (num) {
            let numStr = num.toString();

            while (numStr.length < 3) {
                numStr = `0${numStr}`;
            }

            return numStr;
        }
    },

    watch: {
        isSignedIn (newValue) {
            if (newValue) {
                this.getAllPattern();
            }
        }
    }
};
</script>

<style scoped lang="scss">
.pattern_stats_wrapper {
    margin-bottom: 20px;

    .ps__up_down {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #313452;

        div {
            display: flex;
            align-items: center;

            > p {
                margin: 0 8px 0 5px;
                font-size: 20px;
                font-weight: 700;
            }
        }

        .ud__up {
            border-left: 4px solid #71c016;

            > i {
                color: #71c016;
            }
        }

        .ud__down {
            border-left: 4px solid #ff4747;

            > i {
                color: #ff4747;
            }
        }
    }

    .ps__equal_graph {
        .eg__total_pattern {
            padding: 10px;
            display: flex;
            align-items: center;

            .tp__label {
                font-size: 12px;
                font-weight: 700;
                line-height: 12px;
            }
            
            > i {
                margin: 0 4px;
                font-size: 16px;
            }
        }

        .eg__color_value {
            padding: 10px;
            display: flex;

            .cv__item {
                margin-right: 16px;
                display: flex;
                align-items: center;

                .i__circle {
                    width: 10px;
                    height: 10px;
                    margin-right: 4px;
                    position: relative;
                    
                    > span {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        background-color: rgba(#4d83ff, .2);
                        border-radius: 50%;
                    }
                }

                > p {
                    font-size: 14px;

                    &:last-child {  
                        margin-left: 4px;
                        font-size: 12px;
                    }
                }
            }
        }

        .eg__total {
            padding: 10px;
            display: flex;
            align-items: center;

            .t__label {
                font-size: 12px;
                font-weight: 700;
                line-height: 12px;
            }

            > i {
                margin: 0 4px;
                font-size: 16px;
            }
        }

        .eg__graph {
            margin-top: 10px;
            display: flex;
            align-items: flex-end;
            background-color: rgba(#4d83ff, .2);

            .g__item {
                position: relative;
                flex-grow: 1;

                > span {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    background-color: rgba(#4d83ff, .2);
                }
            }
        }
    }

    .base_button {
        margin: 20px 10px 10px;
    }
}
</style>
