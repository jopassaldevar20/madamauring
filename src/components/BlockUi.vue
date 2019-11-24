<template>
    <div v-if="blockUi" class="block_ui_wrapper">
        <svg
            class="cc__dashed_circle"
            height="35px"
            width="35px"
            viewBox="0 0 32 32"
        >
            <circle
                cx="16"
                cy="16"
                r="15"
                fill="none"
                stroke="white"
                stroke-width="4"
                stroke-dasharray="12"
                opacity="1"
            ></circle>
        </svg>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BlockUi',

    computed: {
        ...mapState(['blockUi'])
    }
};
</script>

<style scoped lang="scss">
.block_ui_wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(black, .3);

    > svg {
        animation-name: rotate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
    }
}
</style>
