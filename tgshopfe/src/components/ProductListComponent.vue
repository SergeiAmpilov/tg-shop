<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>{{ product.title }}</span>
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
