<template>
  <div v-cloak class="centered">
    <h2 class="mb">
      {{  product.title  }}
    </h2>
    <b>{{ product.price }}</b> &#8381;
    <div class="product-image">
      <img
        :src="product.image"
        :alt="product.title"
      >
    </div>
    <p>{{ product.text }}</p>
    <div>
      <button @click="goBackClickHandler">Go back custom</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductsService } from '@/services/Products.service';
import { TelegramServiceProvider } from '@/services/Telegram.Service';
import { defineComponent } from 'vue';

const prodService = new ProductsService();

export default defineComponent({
  mounted() {
    const gbHandle = this.goBackClickHandler.bind(this);
    this.product = prodService.getById(Number(this.$route.params.id));
    // TelegramServiceProvider.BackButton.setText('bb Back Button');
    TelegramServiceProvider.BackButton.show();
    TelegramServiceProvider.BackButton.onClick(gbHandle);
  },
  unmounted() {
    const gbHandle = this.goBackClickHandler.bind(this);
    TelegramServiceProvider.BackButton.offClick(gbHandle);
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    goBackClickHandler() {
      console.log('goback');
      this.$router.push({ name: 'shop' });
    },
  },
});
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
