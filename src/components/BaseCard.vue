<template>
    <div class="base_card_wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseCard'
};
</script>

<style scoped lang="scss">
.base_card_wrapper {
    padding: 10px;
    background-color: #26293b;
    border: 1px solid #313452;

    .a {
        color: red;
    }
}
</style>
