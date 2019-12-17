<template>
    <BaseCard class="order_history_wrapper">
        <div class="oh__header">
            <p>ORDER HISTORY</p>
        </div>

        <div>
            <OrderCard
                v-for="(item, index) in orderHistory"
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

    computed: {
        ...mapState([
            'isSignedIn',
            'orderHistory'
        ]),
    },

    methods: {
        ...mapMutations(['updateBlockUi']),

        ...mapActions([
            'getAllOrderHistory'
        ])
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
        border-bottom: 1px solid #313452;

        > p {
            font-weight: 700;
        }
    }
}
</style>
