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
      this.commit('recalcCart');
    },
    subtractFromCart(state, payload) {
      if (state.cart[payload] && state.cart[payload] > 0) {
        state.cart[payload] -= 1;
        this.commit('recalcCart');
      }
    },
    recalcCart(state) {
      let hasAnyProduct = false;

      Object.keys(state.cart).forEach((productId) => {
        if (state.cart[productId] > 0) {
          hasAnyProduct = true;
        }
      });

      // если есть хоть что-то в корзине, то нужно показать main button


    },
  },
  actions: {
  },
  modules: {
  },
});
