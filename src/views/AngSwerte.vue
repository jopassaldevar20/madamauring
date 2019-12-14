<template>
    <div class="ang_swerte_wrapper">
        <LogIn />

        <div class="as__pattern_order">
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
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import tools from '@/common/tools';

import LogIn from '@/components/LogIn';
import AddOrder from '@/components/AddOrder';
import SearchResult from '@/components/SearchResult';
import OrderList from '@/components/OrderList';
import AddPattern from '@/components/AddPattern';
import PatternConverter from '@/components/PatternConverter';

export default {
    name: 'AngSwerte',

    components: {
        LogIn,
        AddOrder,
        SearchResult,
        OrderList,
        AddPattern,
        PatternConverter
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
            flex-basis: 49%;
        }
    }
}
</style>
