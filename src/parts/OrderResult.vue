<template>
    <BaseCard class="order_result_wrapper">
        <div class="or__result_bar">
            <span :style="{ width: getRightPercent }"></span>
        </div>

        <div class="or__icon_value">
            <div>
                <i class="material-icons mood">mood</i>

                <p>{{ rightOrder }}</p>
            </div>

            <div>
                <i class="material-icons mood_bad">mood_bad</i>

                <p>{{ wrongOrder }}</p>
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
            return `${this.rightOrder / (this.rightOrder + this.wrongOrder) * 100}%`;
        }
    },

    methods: {
        ...mapActions(['getMisc'])
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

    .or__icon_value {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;

        > div {
            flex-basis: 40%;
            display: flex;
            align-items: center;
            justify-content: center;

            > i {
                &.mood {
                    color: #71c016;
                }

                &.mood_bad {
                    color: #ff4747;
                }
            }

            > p {
                margin-left: 10px;
                font-weight: 700;
            }
        }
    }
}
</style>
