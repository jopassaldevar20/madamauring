<template>
    <BaseCard class="pattern_converter_wrapper">
        <div class="pc__input_output">
            <input maxlength="10" v-model="pattern" />

            <div class="io__copy_text">
                <i class="material-icons" @click="copyPattern">file_copy</i>

                <p>{{ converted }}</p>
            </div>
        </div>

        <div class="base_button blue" @click="convertPattern">
            <p>Convert</p>
        </div>
    </BaseCard>
</template>

<script>
import { mapMutations } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'PatternConverter',

    components: {
        BaseCard
    },

    data () {
        return {
            pattern: '',
            converted: 'XXXXXXXXXX'
        };
    },

    methods: {
        ...mapMutations(['updateToast', 'updateConvertedPattern']),

        copyPattern () {
            this.updateConvertedPattern ({ convertedPattern: this.converted });
        },

        convertPattern () {
            if (this.pattern.length === 10) {
                this.converted = this.pattern.split("").reverse().join("");
            } else {
                this.updateToast({ type: 'failed', message: 'Please provide 10 digits.' });
            }
        }
    }
};
</script>

<style scoped lang="scss">
.pattern_converter_wrapper {
    padding: 10px;

    .pc__input_output {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > input {
            flex-basis: 60%;
            text-align: center;
        }

        .io__copy_text {
            margin-left: 10px;
            display: flex;
            align-items: center;

            > i {
                color: #4d83ff;
                cursor: pointer;
                -webkit-touch-callout: none;
                user-select: none;
            }

            > p {
                margin-left: 10px;
                font-weight: 700;
            }
        }
    }

    .pc__button {
        padding: 10px;
        flex-basis: 20%;
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
</style>
