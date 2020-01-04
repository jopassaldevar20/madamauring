<template>
    <BaseCard class="log_in_wrapper">
        <div class="li__welcome_status">
            <p>Welcome!</p>

            <div class="ws__status">
                <p>STATUS:</p>

                <p :class="{ 's__value': true, 's__connect': isSignedIn, 's__disconnect': !isSignedIn }">
                    {{ isSignedIn ? 'CONNECTED' : 'DISCONNECTED' }}
                </p>
            </div>
        </div>

        <div class="li__buttons">
            <div class="base_button orange" @click="signOut">
                <p>Disconnect</p>
            </div>
        
            <div class="base_button blue" @click="signIn">
                <p>Connect</p>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
    name: 'LogIn',

    components: {
        BaseCard
    },

    computed: {
        ...mapState(['isSignedIn'])
    },

    methods: {
        ...mapActions(['signInAuth', 'signOutAuth']),

        signIn () {
            this.signInAuth();
        },

        signOut () {
            this.signOutAuth();
        }
    }
};
</script>

<style scoped lang="scss">
.log_in_wrapper {
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .li__welcome_status {
        > p {
            margin-bottom: 10px;
            font-size: 20px;
            font-weight: 700;
        }

        .ws__status {
            display: flex;
            align-items: center;
            font-size: 10px;

            .s__value {
                margin-left: 10px;

                &.s__connect {
                    color: #71c016
                }

                &.s__disconnect {
                    color: #ff4747;
                }
            }
        }
    }

    .li__buttons {
        display: flex;

        > div {
            width: 100px;
            margin-left: 10px;
        }
    }
}
</style>
