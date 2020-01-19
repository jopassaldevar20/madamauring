<template>
    <BaseCard class="order_result_wrapper">
        <div class="or__result_bar">
            <span :style="{ width: `${getRightPercent}%` }"></span>
        </div>

        <div class="or__value_icon">
            <div class="vi__value_diff">
                <div class="vd__right_wrong">
                    <div>
                        <span class="rw__right"></span>

                        <p>{{ rightOrder }}</p>
                    </div>

                    <div>
                        <span class="rw__wrong"></span>

                        <p>{{ wrongOrder }}</p>
                    </div>
                </div>

                <div class="vd__diff">
                    <p class="d__label">DIFFERENCE</p>

                    <i class="material-icons">double_arrow</i>

                    <p>{{ rightWrongDiff }}</p>
                </div>
            </div>
            
            <div class="vi__percent_icon">
                <p>{{ getRightPercent }}<span>%</span></p>

                <i :class="{
                    'material-icons': true,
                    'pi__red': selectIcon === 'mood_bad' || selectIcon === 'sentiment_dissatisfied',
                    'pi__green': selectIcon === 'sentiment_satisfied' || selectIcon === 'mood',
                }">{{ selectIcon }}</i>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'OrderResult',

    components: {
        BaseCard
    },

    computed: {
        ...mapState(['isSignedIn', 'rightOrder', 'wrongOrder']),

        getRightPercent () {
            return Math.round(this.rightOrder / (this.rightOrder + this.wrongOrder) * 100) || 0;
        },

        rightWrongDiff () {
            return this.rightOrder - this.wrongOrder;
        },

        selectIcon () {
            return this.generateIcon(this.getRightPercent);
        }
    },

    methods: {
        ...mapActions(['getMisc']),

        generateIcon (percent) {            
            if (percent > 75) {
                return 'mood';
            }

            if (percent > 50) {
                return 'sentiment_satisfied';
            }

            if (percent > 25) {
                return 'sentiment_dissatisfied';
            }

            return 'mood_bad';
        }
    },

    watch: {
        isSignedIn (newValue) {
            if (newValue) {
                this.getMisc();
            }
        }
    }
};
</script>

<style scoped lang="scss">
.order_result_wrapper {
    padding: 10px;

    .or__result_bar {
        height: 3px;
        position: relative;
        background-color: #ff4747;
        border-radius: 10px;

        > span {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            background-color: #71c016;
            border-radius: 10px;
        }
    }

    .or__value_icon {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        > div {
            flex-basis: 50%;
        }

        .vi__value_diff {
            .vd__right_wrong {
                display: flex;

                > div {
                    flex-basis: 40%;
                    display: flex;
                    align-items: center;

                    > span {
                        width: 2px;
                        height: 26px;
                        display: block;

                        &.rw__right {
                            background-color: #71c016;
                        }
                        
                        &.rw__wrong {
                            background-color: #ff4747;
                        }
                    }

                    > p {
                        margin-left: 6px;
                        font-weight: 700;
                    }
                }
            }

            .vd__diff {
                margin-top: 20px;
                display: flex;
                align-items: center;

                .d__label {
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 12px;
                }
                
                > i {
                    margin: 0 6px;
                    font-size: 16px;
                }
            }
        }

        .vi__percent_icon {
            display: flex;
            align-items: flex-end;
            justify-content: center;

            > p {
                margin-bottom: 2px;
                font-size: 16px;

                > span {
                    font-size: 10px;
                }
            }

            > i {
                font-size: 60px;

                &.pi__red {
                    color: #ff4747;
                }
                
                &.pi__green {
                    color: #71c016;
                }
            }
        }
    }
}
</style>
