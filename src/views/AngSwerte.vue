<template>
    <div class="ang_swerte_wrapper">
        <LogIn />

        <div class="as__pattern_order">
            <div>
                <RealTime />

                <OrderResult />

                <OrderHistory />
            </div>

            <div>
                <PatternConverter />

                <AddOrder />

                <AddPattern />

                <PatternStats />
            </div>

            <div>
                <SearchResult />

                <OrderList />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import tools from '@/common/tools';

import AddOrder from '@/parts/AddOrder';
import AddPattern from '@/parts/AddPattern';
import LogIn from '@/parts/LogIn';
import OrderHistory from '@/parts/OrderHistory';
import OrderList from '@/parts/OrderList';
import OrderResult from '@/parts/OrderResult';
import PatternConverter from '@/parts/PatternConverter';
import PatternStats from '@/parts/PatternStats';
import RealTime from '@/parts/RealTime';
import SearchResult from '@/parts/SearchResult';

export default {
    name: 'AngSwerte',

    components: {
        AddOrder,
        AddPattern,
        LogIn,
        OrderHistory,
        OrderList,
        OrderResult,
        PatternConverter,
        PatternStats,
        RealTime,
        SearchResult
    },

    computed: {
        ...mapState({ mahiwaga: state => state.mahiwaga })
    },

    methods: {
        ...mapMutations(['updateMahiwaga']),

        ...mapActions(['loadGoogleApi'])
    },

    created () {
        if (!this.mahiwaga) {
            this.updateMahiwaga({
                baraha: tools.getCookie('_baraha'),
                palad: tools.getCookie('_palad'),
                bola: tools.getCookie('_bola')
            });
        }

        this.loadGoogleApi();
    }
};
</script>

<style scoped lang="scss">
.ang_swerte_wrapper {
    .as__pattern_order {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        > div {
            flex-basis: 32.5%;

            > div {
                margin-bottom: 20px;
            }
        }
    }
}
</style>
