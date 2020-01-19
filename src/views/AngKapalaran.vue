<template>
    <div class="ang_kapalaran_wrapper">
        <div class="ak__input_container">
            <textarea v-model="text" rows="5"></textarea>

            <div class="base_button blue" @click="handleHula">
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
            text: ''
        };
    },

    methods: {
        handleHula () {
            const splitText = this.text.split(' || ');

            tools.setCookie('_baraha', splitText[0]);
            tools.setCookie('_palad', splitText[1]);
            tools.setCookie('_bola', splitText[2]);

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
        padding: 10px;
        margin-top: 50px;
        background-color: #26293b;
        border: 1px solid #313452;        

        > textarea {
            margin-bottom: 10px;
        }
    }
}
</style>
