<template>
  <div>
    <h1>Shop view</h1>
    <hr>
    <product-list
      title="Список продуктов"
      subtitle="Список алкогольных продуктов АСТ"
      :products="products"
    ></product-list>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { TelegramServiceProvider } from '@/services/Telegram.Service';
import { defineComponent } from 'vue';
import { ProductsService } from '@/services/Products.service';
import ProductList from '@/components/ProductListComponent.vue';

const prodService = new ProductsService();

export default defineComponent({
  mounted() {
    // TelegramServiceProvider.MainButton.setText('Главная кнопка');
    // TelegramServiceProvider.MainButton.show();
    TelegramServiceProvider.BackButton.hide();
  },
  data() {
    return {
      products: prodService.all,
    };
  },
  components: {
    'product-list': ProductList,
  },
});
</script>
