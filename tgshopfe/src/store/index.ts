import { createStore } from 'vuex';
import { ProductsService } from '@/services/Products.service';

const productService = new ProductsService();

export default createStore({
  state: {
    products: productService.all,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
