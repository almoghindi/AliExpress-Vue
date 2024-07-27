import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const useUserStore = new Vuex.Store({
  state: {
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  },
  mutations: {
    SET_MENU_OVERLAY(state, payload) {
      state.isMenuOverlay = payload;
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    SET_CHECKOUT(state, checkout) {
      state.checkout = checkout;
    },
  },
  actions: {
    setMenuOverlay({ commit }, payload) {
      commit("SET_MENU_OVERLAY", payload);
    },
    setLoading({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
    setCart({ commit }, cart) {
      commit("SET_CART", cart);
    },
    setCheckout({ commit }, checkout) {
      commit("SET_CHECKOUT", checkout);
    },
  },
  getters: {
    isMenuOverlay: (state) => state.isMenuOverlay,
    isLoading: (state) => state.isLoading,
    cart: (state) => state.cart,
    checkout: (state) => state.checkout,
  },
});
