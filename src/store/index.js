import Vue from 'vue';
import Vuex from 'vuex';
import { getProducts } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productLoading: false,
    products: [],
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
      state.productLoading = false;
    },
  },
  actions: {
    getProducts({ state, commit }) {
      state.productLoading = true;
      return getProducts({ size: 300 }).then((res) => {
        commit('SET_PRODUCTS', res.data.data);
      }).catch(() => {
        commit('SET_PRODUCTS', []);
      });
    },
  },
  modules: {
  },
  getters: {
    products: (state) => state.products,
    productLoading: (state) => state.productLoading,
  },
});
