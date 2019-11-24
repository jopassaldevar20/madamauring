<template>
    <div id="app">
        <TheToast />

        <div class="app__main_container">
            <LogIn />

            <div class="mc__left_right">
                <div>
                    <AddOrder />

                    <PatternConverter />

                    <AddPattern />
                </div>

                <div>
                    <SearchResult />

                    <OrderList />
                </div>
            </div>
        </div>

        <BlockUi />
    </div>
</template>

<script>
import LogIn from './components/LogIn';
import AddOrder from './components/AddOrder';
import SearchResult from './components/SearchResult';
import OrderList from './components/OrderList';
import TheToast from './components/TheToast';
import BlockUi from './components/BlockUi';
import AddPattern from './components/AddPattern';
import PatternConverter from './components/PatternConverter';

export default {
    name: 'app',

    components: {
        LogIn,
        AddOrder,
        SearchResult,
        OrderList,
        TheToast,
        BlockUi,
        AddPattern,
        PatternConverter
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

        .mc__left_right {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            > div {
                flex-basis: 49%;
            }
        }
    }
}
</style>
