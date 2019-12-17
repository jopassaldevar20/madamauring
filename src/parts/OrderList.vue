<template>
    <BaseCard class="order_list_wrapper">
        <div class="ol__header_count">
            <p>TRADE</p>

            <p>{{ orderList.length }}</p>
        </div>

        <OrderCard
            v-for="(item, index) in orderList"
            :key="`history-${index}`"
            :order="item"
            :hasButtons="true"
            @result="isWinLose($event, index)"
        />
    </BaseCard>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import BaseCard from '@/components/BaseCard';
import OrderCard from '@/components/OrderCard';

export default {
    name: 'OrderList',

    components: {
        BaseCard,
        OrderCard
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
            'updateOrderResult',
            'appendNewHistory'
        ]),

        async isWinLose (response, index) {
            this.updateBlockUi({ blockUi: true });

            const selectedOrder = this.orderList[index];
            const exist = await this.isPatternExist({ pattern: selectedOrder.pattern });

            if (exist) {
                if (exist.up !== exist.down) {
                    await this.updateOrderResult({ isRight: response === 'WIN' });
                }

                const handleUpdate = async (direction) => {
                    const up = direction === 'UP' ? ++exist.up : exist.up;
                    const down = direction === 'DOWN' ? ++exist.down : exist.down;

                    await this.updatePattern({ rowNumber: exist.rowNumber, pattern: exist.pattern, up, down });
                };

                if (selectedOrder.type === 'BUY') {
                    await handleUpdate(response === 'WIN' ? 'UP' : 'DOWN');
                } else if (selectedOrder.type === 'SELL') {
                    await handleUpdate(response === 'WIN' ? 'DOWN' : 'UP');
                }
            }

            await this.appendNewHistory({
                pattern: selectedOrder.pattern,
                type: selectedOrder.type,
                symbol: selectedOrder.symbol,
                result: response,
                createdAt: selectedOrder.date
            });

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
