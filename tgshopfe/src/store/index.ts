import { createStore } from 'vuex';
import { EProductType, ProductsService } from '@/services/Products.service';

const productService = new ProductsService();

export default createStore({
  state: {
    products: productService.all,
    filter: {
      type: EProductType.all,
    },
    cart: {},
  },
  getters: {
  },
  mutations: {
    setFilter(state, payload) {
      state.filter.type = payload;
    },
    addToCart(state, payload) {
      if (state.cart[payload]) {
        state.cart[payload] += 1;
      } else {
        state.cart[payload] = 1;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
