<template>
    <div class="ang_kapalaran_wrapper">
        <div class="ak__input_container">
            <input v-model="firstInput" />

            <input v-model="secondInput" />

            <input v-model="thirdInput" />

            <div @click="handleHula">
                <p>Hula</p>
            </div>
        </div>
    </div>
</template>

<script>
import tools from '@/common/tools';

export default {
    name: 'AngKapalaran',

    data () {
        return {
            firstInput: '',
            secondInput: '',
            thirdInput: ''
        };
    },

    methods: {
        handleHula () {
            tools.setCookie('_baraha', this.firstInput);
            tools.setCookie('_palad', this.secondInput);
            tools.setCookie('_bola', this.thirdInput);

            this.$router.push({ name: 'mahiwagang-bola' });
        }
    }
};
</script>

<style scoped lang="scss">
.ang_kapalaran_wrapper {
    display: flex;
    justify-content: center;

    .ak__input_container {
        width: 600px;
        padding: 30px;
        background-color: #131633;
        border-radius: 6px;

        > input {
            margin-bottom: 20px;
        }

        > div {
            width: 200px;
            padding: 10px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
            border-radius: 4px;
            cursor: pointer;

            &:hover:not(.bc__submit_disabled) {
                background-color: darken(#f8f9fa, 20%);
            }

            &.bc__submit_disabled {
                opacity: .5;
                cursor: not-allowed;
            }

            > p {
                color: #212529;
            }
        }
    }
}
</style>
