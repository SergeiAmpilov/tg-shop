<template>
  <div>
    <h1>Shop page AST shop</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    console.log('products in store');
    console.log(this.$store.state.products);
  },
});

</script>
