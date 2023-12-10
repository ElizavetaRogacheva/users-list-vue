import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import IndexPage from './pages/IndexPage';
import UserPage from './pages/UserPage';
import NotFound from './pages/NotFound';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/users-list-vue', component: IndexPage },
  { path: '/users-list-vue/user/:id', name: 'user', component: UserPage },
  {
    path: '/users-list-vue/user/:id/:section',
    name: 'section',
    component: UserPage,
  },
  { path: '/users-list-vue/*', component: NotFound },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

const store = new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser(state, arg) {
      state.currentUser = arg;
    },
  },
});

new Vue({ el: '#app', store, router, render: (h) => h(App) });
