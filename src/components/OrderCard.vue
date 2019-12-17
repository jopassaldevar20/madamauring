<template>
    <div class="order_card_wrapper" @click="selectOrder">
        <span v-if="isHighlight"></span>

        <div v-if="!hasButtons" class="oc__remove">
            <i class="material-icons">close</i>
        </div>

        <div class="oc__date_symbol_pattern">
            <div class="dsp__text">
                <p class="t__big">{{ constructTime(order.date) }}</p>

                <p class="t__small">{{ constructDate(order.date) }}</p>
            </div>

            <div class="dsp__text">
                <p class="t__big">{{ order.symbol }}</p>

                <p class="t__small">{{ order.pattern }}</p>
            </div>
        </div>

        <div class="oc__type_buttons">
            <div :class="{ 'tb__type': true, 'tb__buy': order.type === 'BUY', 'tb__sell': order.type === 'SELL'}">
                <span></span>

                <p>{{ order.type }}</p>
            </div>

            <div v-if="hasButtons" class="tb__buttons">
                <div class="base_button orange" @click="handleButtons($event, 'LOSE')">
                    <p>LOSE</p>
                </div>

                <div class="base_button blue" @click="handleButtons($event, 'WIN')">
                    <p>WIN</p>
                </div>
            </div>

            <div v-else class="tb__result">
                <p :class="{ 'r__is_win': order.result === 'WIN' }">{{ order.result }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { monthNames } from '@/common/collections';

export default {
    name: 'OrderCard',

    props: {
        order: {
            type: Object,
            required: true
        },

        hasButtons: {
            type: Boolean,
            required: true
        }
    },

    data () {
        return {
            isHighlight: false
        };
    },

    methods: {
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

        selectOrder () {
            this.isHighlight = !this.isHighlight;
        },

        async handleButtons (e, result) {
            e.stopPropagation();

            this.$emit('result', result);
        }
    }
};
</script>

<style scoped lang="scss">
.order_card_wrapper {
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

    .oc__remove {
        margin-bottom: 10px;
        display: flex;

        > i:hover {
            color: #4d83ff;
        }
    }

    .oc__date_symbol_pattern {
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

    .oc__type_buttons {
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

        .tb__result > p {
            color: #ff4747;
            font-size: 18px;
            font-weight: 700;

            &.r__is_win {
                color: #71c016;
            }
        }
    }
}
</style>
