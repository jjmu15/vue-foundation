import VueRouter from 'vue-router';
import store from './store';

// views
import Home from './views/Home.vue';
import FourOhFour from './views/FourOhFour.vue';


// create router instance
let router = new VueRouter({

    linkActiveClass: 'is-active',
    routes: [

      // eg requiring auth below
      // {
      //     path: '/sites/open',
      //     component: OpenSite,
      //     meta: {
      //         requiresAuth: true
      //     }
      // },

        {
            path: '/',
            component: Home
        },


        {
            path: '*',
            component: FourOhFour
        }
    ]
});

// user auth verification for each request
router.beforeEach((to, from, next) => {
    // if route has been specified to require auth
    if(to.matched.some(record => record.meta.requiresAuth)) {
        const now = new Date().toLocaleString();

        // if token is set & not yet expired
        if(store.state.token.value !== null && now < store.state.token.expiryDate) {
            // go to next url
            next();
            return
        }

        // if token not set or is expired, go to login
        next('/login');
    } else {
        // else if route does not require auth, just load view
        next()
    }
})

export default router;
