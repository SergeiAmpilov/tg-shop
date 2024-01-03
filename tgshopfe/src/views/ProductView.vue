<template>
  <div v-cloak class="centered">
    <h2 class="mb">
      {{  product.title  }}
    </h2>
    <div class="product-image">
      <img
        :src="product.image"
        :alt="product.title"
      >
    </div>
    <p>{{ product.text }}</p>
    <div></div>
  </div>
</template>

<script lang="ts">
import { ProductsService } from '@/services/Products.service';
import { TelegramServiceProvider } from '@/services/Telegram.Service';
import { defineComponent } from 'vue';

const prodService = new ProductsService();

export default defineComponent({
  mounted() {
    this.product = prodService.getById(Number(this.$route.params.id));
  },
  data() {
    return {
      product: {},
    };
  },
});
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
