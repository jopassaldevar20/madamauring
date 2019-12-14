<template>
    <div class="pattern_converter_wrapper">
        <input maxlength="10" v-model="pattern" />

        <p>{{ converted }}</p>

        <div class="pc__button" @click="convertPattern">
            <p>Convert</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PatternConverter',

    data () {
        return {
            pattern: '',
            converted: ''
        };
    },

    methods: {
        convertPattern () {
            this.converted = this.pattern.split("").reverse().join("");
        }
    }
};
</script>

<style scoped lang="scss">
.pattern_converter_wrapper {
    margin-bottom: 20px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #131633;
    border-radius: 6px;

    > input {
        flex-basis: 40%;
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
