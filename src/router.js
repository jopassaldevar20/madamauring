import Vue from 'vue';
import VueRouter from 'vue-router';

import tools from './common/tools';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',

    base: process.env.BASE_URL,

    routes: [
        {
            path: '/',
            name: 'kapalaran',
            component: () => import('@/views/AngKapalaran.vue'),
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/mahiwagang-bola',
            name: 'mahiwagang-bola',
            component: () => import('@/views/AngSwerte.vue'),
            meta: {
                removeSides: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const hasAuth = Boolean(
        tools.getCookie('_baraha') &&
        tools.getCookie('_palad') &&
        tools.getCookie('_bola')
    );

    if (hasAuth && to.name !== 'mahiwagang-bola') {
        next({ name: 'mahiwagang-bola' });
    } else if (!hasAuth && to.name !== 'kapalaran') {
        next({ name: 'kapalaran' });
    } else {
        next();
    }
});

export default router;
