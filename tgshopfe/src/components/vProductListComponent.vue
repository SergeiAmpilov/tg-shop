<template>
  <div>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col p1"
      >
        <div class="product-card centered">
          <h3 class="centered product-title">
            {{ product.title.length >= 30
              ? product.title.substring(0, 27) + '...'
              : product.title }}
          </h3>
          <!-- <a :href="'/product/' + product.id.toString()">
          </a> -->
          <div class="centered mt">
            <b>{{ product.price.toLocaleString() }}</b> &#8381;
          </div>
          <img
            :src="product.image"
            class="mt product-image"
            :alt="product.title"
          >
          <div class="centered mt">
            <div v-if="product.id in $store.state.cart && $store.state.cart[product.id] > 0">
              <button
                class="filter-list__item filter-list__button-active"
                @click="subtractFromCart(product.id)"
                >-</button>
              <button
                class="filter-list__item"
                @click="addToCart(product.id)"
              >+</button>
            </div>
            <button
              v-else
              class="add-button"
              @click="addToCart(product.id)"
            >
              Добавить
            </button>
          </div>
          <div
            v-if="product.id in $store.state.cart && $store.state.cart[product.id] > 0"
            class="product-card__incart"
          >
            {{ $store.state.cart[product.id] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['products'],
  methods: {
    addToCart(id) {
      this.$store.commit('addToCart', id);
    },
    subtractFromCart(id) {
      this.$store.commit('subtractFromCart', id);
    },
  },
});
</script>

<style>
.product-card {
  position: relative;
  border-radius: 10px;
  padding: var(--main-padding) 0;
  color: var(--tg-theme-secondary-bg-color);
  background-color: var(--tg-theme-text-color);
  /* background-color: red; */
}
.product-title {
  height: 39px;
}
.product-image {
  max-width: 100%;
  /* max-height: 200px; */
  height: 150px;
}
.add-button {
  background-color: green;
}
.product-card__incart {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-ast-red);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--tg-theme-secondary-bg-color);
}
</style>
