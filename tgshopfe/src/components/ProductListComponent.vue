<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <ul class="product">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-image">
          <img
            :src="product.image"
            alt=""
          >
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <b>{{ product.price.toLocaleString() }}</b> &#8381;
          <p class="hint">{{ product.text }}</p>
          <router-link :to="'/product/' + product.id">Подробнее</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductList',
  props: ['title', 'subtitle', 'products'],
});
</script>
