<template>
  <div>
    <div class="row title-row">
      <h1>Ваш заказ</h1>
      <button
        class="add-button"
        @click.prevent="goBackClick"
      >Изменить</button>
    </div>
    <div
      v-for="product in cartList"
      :key="product.id"
      class="row mt"
    >
      <div class="col2">
        <img
          :src="product.image"
          :alt="product.title"
          class="product-cart__img"
        >
      </div>
      <div class="col">
        <h4>{{ product.title }}</h4>
        <p class="mt">
          <span>
            {{ product.price }} &#8381;
          </span>
          <span class="ml">x {{ product.count }}</span>
        </p>
      </div>
      <div class="col2">
        {{ (product.count * product.price).toLocaleString()  }}
        &#8381;
      </div>
    </div>
    <hr class="mt">
    <div class="row title-row">
      <div>ИТОГО:</div>
      <div><b>{{ cartSumm.toLocaleString() }}</b> &#8381;</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';
import { ProductsService } from '@/services/Products.service';

const productService = new ProductsService();

export default defineComponent({
  data() {
    return {
      cartList: [],
      cartSumm: 0,
    };
  },
  mounted() {
    // order
    const clickHandler = this.goToOrderClick.bind(this);
    TelegramServiceProvider.MainButton.onClick(clickHandler);
    TelegramServiceProvider.MainButton.setText(`Оформить заказ (${this.$store.getters.productsInCart})`);
    TelegramServiceProvider.MainButton.show();

    // go back
    const goBackClickHandler = this.goBackClick.bind(this);
    TelegramServiceProvider.BackButton.onClick(goBackClickHandler);
    TelegramServiceProvider.BackButton.show();

    const newCart = [];
    let newCartSumm = 0;
    // get products in cart
    Object.keys(this.$store.state.cart).forEach((prodId) => {
      const product = productService.all.find((el) => el.id === Number(prodId));
      newCart.push({
        ...product,
        count: this.$store.state.cart[prodId],
      });
      newCartSumm += this.$store.state.cart[prodId] * product.price;
    });
    this.cartList = newCart;
    this.cartSumm = newCartSumm;
  },
  unmounted() {
    // go back
    // const goBackClickHandler = this.goBackClick.bind(this);
    // TelegramServiceProvider.BackButton.offClick(goBackClickHandler);
    // TelegramServiceProvider.BackButton.hide();

    // const clickHandler = this.goToOrderClick.bind(this);
    // TelegramServiceProvider.MainButton.offClick(clickHandler);
    // TelegramServiceProvider.MainButton.hide();
  },
  methods: {
    goBackClick() {
      this.$router.push({ name: 'shop' });
    },
    goToOrderClick() {
      this.$router.push({ name: 'order' });
    },
  },
});
</script>

<style>
.title-row {
  justify-content: space-between;
}
.product-cart__img {
  height: 100px;
  max-width: 100%;
}
</style>
