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
    background-color: #26293b;
    border: 1px solid #313452;

    .base_button {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        cursor: pointer;

        &.blue {
            border: 2px solid #4d83ff;

            > p {
                color: #4d83ff;
            }
        }

        &.orange > p {
            color: #ffc100;
        }

        &.disabled {
            opacity: .3;
            cursor: not-allowed;
        }

        &:hover:not(.disabled) {
            &.blue {
                border: 2px solid darken(#4d83ff, 20%);

                > p {
                    color: darken(#4d83ff, 20%);
                }
            }

            &.orange > p {
                color: darken(#ffc100, 20%);
            }
        }

        > p {
            font-size: 14px;
            font-weight: 700;
            -webkit-touch-callout: none;
            user-select: none;
        }
    }
}
</style>
