<template>
    <BaseCard class="order_result_wrapper">
        <p>TIME</p>
        
        <p>{{ time }}</p>
    </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard';

export default {
    name: 'RealTime',

    components: {
        BaseCard
    },

    data () {
        return {
            time: '00:00:00'
        };
    },

    methods: {
        tickTime () {
            const currentDate = new Date();
            
            let h = currentDate.getHours().toString();
            let m = currentDate.getMinutes().toString();
            let s = currentDate.getSeconds().toString();

            if (h.length < 2) { h = `0${h}`; }
            if (m.length < 2) { m = `0${m}`; }
            if (s.length < 2) { s = `0${s}`; }

            this.time = `${h}:${m}:${s}`;
        }
    },

    mounted () {
        setInterval(this.tickTime, 1000);
    }
};
</script>

<style scoped lang="scss">
.order_result_wrapper {
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: space-between;

    > p {
        font-size: 30px;
    }
}
</style>
