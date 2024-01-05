<template>
  <!-- <nav>
    <router-link to="/">Shop</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/order">Order</router-link> |
    <router-link to="/product/123">Product 123</router-link>
  </nav> -->
  <div class="container">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=REM:wght@400;700&display=swap');

:root {
  --main-padding: 16px;
  /* define ast colors */
  --color-ast-red: #A04476;
  --color-ast-orange: #CE998D;
  --color-ast-blue: #3D6791;
  --color-ast-dark-blue: #1E355C;
  /*  */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
}
.centered {
  text-align: center;
}

body {
  font-size: 14px;
  padding: var(--main-padding);
  font-family: "Inter", sans-serif;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);

}

a {
  color: var(--tg-theme-link-color);
}

button {
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}

.mb {
  margin-bottom: var(--main-padding);
  font-size: .8rem;
}

.hint {
  color: var(--tg-theme-hint-color);
}

hr {
  background: var(--tg-theme-hint-color);
  margin-bottom: var(--main-padding);
}

.form {

}

.form-control {
  width: 100%;
  height: 60px;
  background: var(--tg-theme-secondary-bg-color);
  color: var(--tg-theme-text-color);
  resize: none;
  font-family: inherit;
  padding: 8px;
  border-radius: 10px;
}

.product {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.product-item {
  overflow: hidden;
  box-shadow: 2px 3px 6px rgba(0,0,0,.25);
  border-radius: 10px;
}

.product-image {
  display: flex;
  justify-content: center;
  /* background: var(--tg-theme-secondary-bg-color); */
  background: #fff;
  text-align: center;
}

.product-image img {
  display: block;
  padding: 10px;
}

.product-info {
  padding: var(--main-padding);
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';

export default defineComponent({
  mounted() {
    TelegramServiceProvider.ready();
  },
});
</script>
