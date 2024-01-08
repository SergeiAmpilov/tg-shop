<template>
  <div>
    <h1>{{ product.title }}</h1>
    <pre>{{ $store.state.cart }}</pre>
    <div class="row">
      <div class="col mt">
          <img
            :src="product.image"
            class="product-image"
            :alt="product.title"
          >
      </div>
      <div class="col mt">
        <p>
          <b>{{ product.price.toLocaleString() }}</b> &#8381;
        </p>
        <p class="mt">
          Тип: <i>{{ productTypeText }}</i>
        </p>
        <p class="mt">
          {{ product.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductsService, EProductType } from '@/services/Products.service';
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';

const productService = new ProductsService();

export default defineComponent({
  mounted() {
    const goBackClickHandler = this.goBackClick.bind(this);
    TelegramServiceProvider.BackButton.onClick(goBackClickHandler);
    TelegramServiceProvider.BackButton.show();
    this.productTypeText = productService.getProductTypeText(EProductType[this.product.type]);
  },
  methods: {
    goBackClick() {
      this.$router.push({ name: 'shop' });
      TelegramServiceProvider.BackButton.hide();

      const clickHandler = this.redicrectToCart.bind(this);
      TelegramServiceProvider.MainButton.onClick(clickHandler);

      this.$store.commit('recalcCart');
    },
    redicrectToCart() {
      this.$router.push({ name: 'cart' });
    },
  },
  data() {
    return {
      product: productService.getById(Number(this.$route.params.id)),
      productTypeText: '',
    };
  },
});
</script>
