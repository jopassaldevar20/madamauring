<template>
    <div class="log_in_wrapper">
        <div class="li__status">
            <p>Status:</p>
            <p :class="{ 's__value': true, 's__connect': isSignedIn, 's__disconnect': !isSignedIn }">
                {{ isSignedIn ? 'connected' : 'disconnected' }}
            </p>
        </div>

        <div class="li__buttons">
            <div @click="signIn">
                <p>Connect</p>
            </div>

            <div @click="signOut">
                <p>Disconnect</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'LogIn',

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
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #131633;
    border-radius: 6px;

    .li__status {
        display: flex;
        align-items: center;

        .s__value {
            margin-left: 10px;
            font-size: 14px;

            &.s__connect {
                color: #70d96e
            }

            &.s__disconnect {
                color: #ef595c;
            }
        }
    }

    .li__buttons {
        display: flex;

        > div {
            margin-left: 10px;
            padding: 4px 10px;
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
}
</style>
