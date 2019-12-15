<template>
    <BaseCard class="order_list_wrapper">
        <div class="ol__header_count">
            <p>TRADE</p>

            <p>{{ orderList.length }}</p>
        </div>

        <div
            v-for="(order, index) in orderList"
            :key="`trade-${index}`"
            class="ol__trade_info"
            @click="selectOrder(index)"
        >
            <span v-if="order.selected"></span>

            <div class="ti__date_symbol_pattern">
                <div class="dsp__text">
                    <p class="t__big">{{ constructTime(order.date) }}</p>

                    <p class="t__small">{{ constructDate(order.date) }}</p>
                </div>

                <div class="dsp__text">
                    <p class="t__big">{{ order.symbol }}</p>

                    <p class="t__small">{{ order.pattern }}</p>
                </div>
            </div>

            <div class="ti__type_buttons">
                <div :class="{ 'tb__type': true, 'tb__buy': order.type === 'BUY', 'tb__sell': order.type === 'SELL'}">
                    <span></span>

                    <p>{{ order.type.toUpperCase() }}</p>
                </div>

                <div class="tb__buttons">
                    <div class="base_button orange" @click="isWinLose($event, index, 'LOSE')">
                        <p>LOSE</p>
                    </div>

                    <div class="base_button blue" @click="isWinLose($event, index, 'WIN')">
                        <p>WIN</p>
                    </div>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import { monthNames } from '@/common/collections';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'OrderList',

    components: {
        BaseCard
    },

    computed: {
        ...mapState([
            'isSignedIn',
            'orderList',
            'rightOrder',
            'wrongOrder'
        ]),
    },

    methods: {
        ...mapMutations(['updateBlockUi', 'updateOrderList']),

        ...mapActions([
            'getAllOrdered',
            'isPatternExist',
            'updatePattern',
            'deleteOrder',
            'updateOrderResult'
        ]),

        constructTime (orderDate) {
            let h = orderDate.getHours().toString();
            let m = orderDate.getMinutes().toString();

            if (h.length < 2) { h = `0${h}`; }
            if (m.length < 2) { m = `0${m}`; }

            return `${h}:${m}`;
        },

        constructDate (orderDate) {
            let finalDate = '';

            finalDate += orderDate.getDate();
            finalDate += ` ${monthNames[orderDate.getMonth()].substring(0, 3).toUpperCase()}. `;
            finalDate += orderDate.getFullYear();

            return finalDate;
        },

        selectOrder (index) {
            const removeReference = [...this.orderList];
            const item = { ...removeReference[index] };

            item.selected = !item.selected;
            removeReference.splice(index, 1, item);

            this.updateOrderList({ orderList: removeReference });
        },

        async isWinLose (e, index, result) {
            e.stopPropagation();

            this.updateBlockUi({ blockUi: true });
            const selectedOrder = this.orderList[index];
            const exist = await this.isPatternExist({ pattern: selectedOrder.pattern });

            if (exist) {
                if (exist.up !== 0 || exist.down !== 0) {
                    await this.updateOrderResult({ isRight: result === 'WIN' });
                }

                const handleUpdate = async (direction) => {
                    const up = direction === 'UP' ? ++exist.up : exist.up;
                    const down = direction === 'DOWN' ? ++exist.down : exist.down;

                    await this.updatePattern({ rowNumber: exist.rowNumber, pattern: exist.pattern, up, down });
                };

                if (selectedOrder.type === 'BUY') {
                    await handleUpdate(result === 'WIN' ? 'UP' : 'DOWN');
                } else if (selectedOrder.type === 'SELL') {
                    await handleUpdate(result === 'WIN' ? 'DOWN' : 'UP');
                }
            }

            await this.deleteOrder({ rowNumber: selectedOrder.rowNumber });

            this.updateBlockUi({ blockUi: false });
        }
    },

    watch: {
        isSignedIn (newValue) {
            if (newValue) {
                this.getAllOrdered();
            }
        }
    }
};
</script>

<style scoped lang="scss">
.order_list_wrapper {
    .ol__header_count {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #313452;

        > p {
            font-weight: 700;
        }
    }

    .ol__trade_info {
        padding: 10px;
        position: relative;
        border-bottom: 1px solid #313452;
        cursor: pointer;

        &:last-child {
            border-bottom: none;
        }

        > span {
            width: 2px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            background-color: #4d83ff;
        }

        .ti__date_symbol_pattern {
            display: flex;
            justify-content: space-between;

            .dsp__text {
                &:last-child {
                    text-align: right;
                }

                .t__big {
                    margin-bottom: 4px;
                    font-size: 30px;
                    font-weight: 700;
                }

                .t__small {
                    font-size: 14px;
                }
            }
        }

        .ti__type_buttons {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .tb__type {
                display: flex;
                align-items: center;

                &.tb__buy > span {
                    background-color: #71c016;
                }

                &.tb__sell > span {
                    background-color: #ff4747;
                }

                > span {
                    width: 12px;
                    height: 12px;
                    margin-right: 6px;
                    display: inline-block;
                    border-radius: 50%;
                }

                > p {
                    padding-right: 10px;
                    margin-right: 20px;
                    font-size: 12px;
                }
            }

            .tb__buttons {
                display: flex;

                > div {
                    width: 100px;
                }
            }
        }
    }
}
</style>
