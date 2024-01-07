import { createStore } from 'vuex';
import { EProductType, ProductsService } from '@/services/Products.service';
import { TelegramServiceProvider } from '@/services/Telegram.Service';

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
      let totalCartCount = 0;

      Object.keys(state.cart).forEach((productId) => {
        if (state.cart[productId] > 0) {
          totalCartCount += state.cart[productId];
        }
      });

      // если есть хоть что-то в корзине, то нужно показать main button
      if (totalCartCount > 0) {
        TelegramServiceProvider.MainButton.setText(`Оформить заказ (${totalCartCount})`);
        TelegramServiceProvider.MainButton.onClick(() => this.$router.push('cart'));
        TelegramServiceProvider.MainButton.show();
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
