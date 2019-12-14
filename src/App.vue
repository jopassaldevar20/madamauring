<template>
    <div id="app">
        <TheToast />

        <div class="app__main_container">
            <router-view />
        </div>

        <BlockUi />
    </div>
</template>

<script>
import TheToast from './components/TheToast';
import BlockUi from './components/BlockUi';

export default {
    name: 'app',

    components: {
        TheToast,
        BlockUi
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input, select {
    font-size: inherit;
}

input {
    width: 100%;
    height: 32px;
    padding: 0 10px;
    color: #f8f9fa;
    background-color: #2b2e4c;
    border: 0;
    border-radius: 4px;
    outline: none;

    &::placeholder {
        color: rgba(#f8f9fa, .4);
    }
}

select {
    width: 100%;
    height: 32px;
    padding: 0 10px;
    color: #f8f9fa;
    background-color: #2b2e4c;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    > option {
        height: 1000px;
        color: #f8f9fa;
        cursor: pointer;
    }
}

#app {
    min-height: 100vh;
    color: #f8f9fa;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #2c3e50;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    .app__main_container {
        padding: 30px;
    }
}
</style>
