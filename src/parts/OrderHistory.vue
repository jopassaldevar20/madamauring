<template>
    <BaseCard class="order_history_wrapper">
        <div class="oh__header">
            <p>ORDER HISTORY</p>
        </div>
    </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard';

export default {
    name: 'OrderHistory',

    components: {
        BaseCard
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
