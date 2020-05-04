<template>
    <div
        v-if="toast.type !== ''"
        :class="`the_toast_wrapper ${toast.type}`"
        @click="removeToast"
    >
        <p>{{ toast.message }}</p>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'TheToast',

    computed: {
        ...mapState(['toast'])
    },

    methods: {
        ...mapMutations(['updateToast']),

        removeToast () {
            this.updateToast({ type: '', message: '' });
        }
    }
};
</script>

<style scoped lang="scss">
.the_toast_wrapper {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

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
        padding-left: 10px;
        color: #212529;
        text-transform: uppercase;
    }
}
</style>
