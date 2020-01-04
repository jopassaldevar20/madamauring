<template>
    <BaseCard class="order_history_wrapper">
        <div class="oh__header">
            <p class="h__title">ORDER HISTORY</p>

            <p><span class="h__win">{{ winCount }}</span>/<span class="h__lose">{{ loseCount }}</span></p>
        </div>

        <div class="oh__pagination_items">
            <div class="pi__pagination_control">
                <p>{{ selectedPage + 1 }}</p>

                <div class="pc__left_right">
                    <i class="material-icons" @click="handlePrev">keyboard_arrow_left</i>

                    <i class="material-icons" @click="handleNext">keyboard_arrow_right</i>
                </div>
            </div>

            <OrderCard
                v-for="(item, index) in selectedPagination"
                :key="`history-${index}`"
                :order="item"
                :hasButtons="false"
            />
        </div>
    </BaseCard>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import BaseCard from '@/components/BaseCard';
import OrderCard from '@/components/OrderCard';

export default {
    name: 'OrderHistory',

    components: {
        BaseCard,
        OrderCard
    },

    data () {
        return {
            selectedPage: 0,
            winCount: 0,
            loseCount: 0
        };
    },

    computed: {
        ...mapState([
            'isSignedIn',
            'orderHistory'
        ]),

        buildPagination () {
            return this.helperBuild(this.orderHistory);
        },

        selectedPagination () {
            return this.buildPagination[this.selectedPage];
        }
    },

    methods: {
        ...mapMutations(['updateBlockUi']),

        ...mapActions([
            'getAllOrderHistory'
        ]),

        helperBuild (list) {
            this.winCount = 0;
            this.loseCount = 0;

            let holder = [];
            let tens = [];

            for (let i = 0; i < list.length; i++) {
                const item  = list[i];

                if (item.result === 'WIN') {
                    this.winCount++;
                } else {
                    this.loseCount++;
                }
                
                if (tens.length < 10) {
                    tens.push(item);
                } else {
                    holder.push([ ...tens ]);
                    tens = [item];
                }
            }

            return holder;
        },

        handlePrev () {
            if (this.selectedPage !== 0) {
                this.selectedPage--;
            }
        },

        handleNext () {
            if (this.buildPagination.length !== (this.selectedPage + 1)) {
                this.selectedPage++;
            }
        }
    },

    watch: {
        isSignedIn (newValue) {
            if (newValue) {
                this.getAllOrderHistory();
            }
        }
    }
};
</script>

<style scoped lang="scss">
.order_history_wrapper {
    .oh__header {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #313452;

        .h__title {
            font-weight: 700;
        }

        .h__win {
            color: #71c016;
        }

        .h__lose {
            color: #ff4747;
        }
    }

    .oh__pagination_items {
        .pi__pagination_control {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #313452;

            > p {
                font-weight: 700;
            }

            .pc__left_right {
                display: flex;
                align-items: center;

                > i {
                    cursor: pointer;
                    -webkit-touch-callout: none;
                    user-select: none;
                }
            }
        }
    }
}
</style>
