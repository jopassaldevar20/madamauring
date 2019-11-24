<template>
    <div v-if="toast.type !== ''" :class="`the_toast_wrapper ${toast.type}`">
        <p>{{ toast.message }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TheToast',

    computed: {
        ...mapState(['toast'])
    }
};
</script>

<style scoped lang="scss">
.the_toast_wrapper {
    padding: 2px 0;
    text-align: center;

    &.success {
        background-color: #81eeac;
    }

    &.warning {
        background-color: #fdf291;
    }

    &.failed {
        background-color: #f39995;
    }

    > p {
        color: #212529;
    }
}
</style>
