import { createStore } from 'vuex';
import { EProductType, ProductsService } from '@/services/Products.service';

const productService = new ProductsService();

export default createStore({
  state: {
    products: productService.all,
    filter: {
      type: EProductType.all,
    },
  },
  getters: {
  },
  mutations: {
    setFilter(state, payload) {
      state.filter.type = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
