<template>
    <div class="search_result_wrapper">
        <p>{{ parsedPattern }}</p>

        <div class="sr__up_down">
            <div class="ud__up">
                <i class="material-icons">trending_up</i>

                <p>{{ isNaN(upPercent) ? 0 : upPercent }}%</p>
            </div>

            <div class="ud__down">
                <i class="material-icons">trending_down</i>

                <p>{{ isNaN(downPercent) ? 0 : downPercent }}%</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SearchResult',

    data () {
        return {
            patternResult: 'Make a search',
            goUp: 0,
            goDown: 0,
        };
    },

    computed: {
        ...mapState(['searchPattern', 'searchBull', 'searchBear']),

        parsedPattern () {
            return this.searchPattern === '' ? 'No Result' : this.searchPattern;
        },

        upPercent () {
            return this.searchBull / this.sumOfResult * 100;
        },

        downPercent () {
            return this.searchBear / this.sumOfResult * 100;
        },

        sumOfResult () {
            return this.searchBull + this.searchBear;
        }
    }
};
</script>

<style scoped lang="scss">
.search_result_wrapper {
    margin-bottom: 20px;
    padding: 30px;
    background-color: #131633;
    border-radius: 6px;

    > p {
        font-size: 40px;
        text-align: center;
    }

    .sr__up_down {
        margin-top: 30px;
        color: #212529;
        font-size: 18px;
        display: flex;
        justify-content: space-around;

        > div {
            width: 60px;
            height: 60px;
            flex-grow: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border-radius: 4px;

            > i {
                font-size: 30px;
            }

            > p {
                font-size: 14px;
                font-weight: 700;
            }
        }

        .ud__up {
            background-color: #70d96e;
        }

        .ud__down {
            background-color: #ef595c;
        }
    }
}
</style>
