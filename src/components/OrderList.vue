<template>
    <div class="order_list_wrapper">
        <div
            v-for="(order, index) in orderList"
            :key="`order-${index}`"
            class="ol__order_item"
        >
            <div class="oi__left_section">
                <p>{{ order.pattern }}</p>

                <div class="ls__type_symbol">
                    <p>{{ order.type }}</p>

                    <p class="ts__bullet">&#8226;</p>

                    <p>{{ order.symbol }}</p>
                </div>
            </div>

            <div class="oi__right_section">
                <p>{{ order.date }}</p>

                <div class="rs__buttons_container">
                    <div @click="isWinLose(index, 'WIN')">
                        <p>Win</p>
                    </div>

                    <div @click="isWinLose(index, 'LOSE')">
                        <p>Lose</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'OrderList',

    computed: {
        ...mapState(['isSignedIn', 'orderList'])
    },

    methods: {
        ...mapActions(['getAllOrdered', 'isPatternExist', 'updatePattern', 'deleteOrder']),

        async isWinLose (index, result) {
            const selectedOrder = this.orderList[index];
            const exist = await this.isPatternExist({ pattern: selectedOrder.pattern });

            this.deleteOrder({ rowNumber: selectedOrder.rowNumber });

            if (exist) {
                const handleUpdate = (direction) => {
                    const up = direction === 'UP' ? ++exist.up : exist.up;
                    const down = direction === 'DOWN' ? ++exist.down : exist.down;

                    this.updatePattern({ rowNumber: exist.rowNumber, pattern: exist.pattern, up, down });
                };

                if (selectedOrder.type.toUpperCase() === 'BUY') {
                    const direction = result === 'WIN' ? 'UP' : 'DOWN';
                    handleUpdate(direction);
                } else if (selectedOrder.type.toUpperCase() === 'SELL') {
                    const direction = result === 'WIN' ? 'DOWN' : 'UP';
                    handleUpdate(direction);
                }
            }
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
    padding: 30px;
    background-color: #131633;
    border-radius: 6px;

    .ol__order_item {
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #f8f9fa;

        &:last-child {
            border-bottom: 0;
        }

        .oi__left_section .ls__type_symbol {
            margin-top: 6px;
            font-size: 12px;
            display: flex;

            .ts__bullet {
                margin: 0 6px;
            }
        }

        .oi__right_section {
            display: flex;
            align-items: center;

            > p {
                font-size: 12px;
            }

            .rs__buttons_container {
                display: flex;

                > div {
                    margin-left: 10px;
                    padding: 10px;
                    flex-basis: 48%;
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
        }
    }
}
</style>
