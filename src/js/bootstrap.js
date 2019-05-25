import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';


window.Vue = Vue;
window.axios = axios;

// use vue plugins
Vue.use(VueRouter);
Vue.use(Vuex);

// if token is set, then send with all axios requests for basic auth
// const token = localStorage.getItem('token');
// if (token) {
//     axios.defaults.headers.common['X-API-KEY'] = token
// }
axios.defaults.headers.post['Content-Type'] = 'application/json';
