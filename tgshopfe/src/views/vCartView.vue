<template>
  <div>
    <h1>Cart</h1>
    <pre>{{ this.$store.state.cart }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';

export default defineComponent({
  mounted() {
    // order
    const redicrectToOrder = function () {
      this.$router.push({ name: 'order' });
    };
    const clickHandler = redicrectToOrder.bind(this);
    TelegramServiceProvider.MainButton.onClick(clickHandler);
    TelegramServiceProvider.MainButton.setText(`Оформить заказ (${this.$store.getters.productsInCart})`);

    // go back
    const goBackRedirect = function () {
      this.$router.push({ name: 'shop' });
    };
    const goBackClickHandler = goBackRedirect.bind(this);
    TelegramServiceProvider.BackButton.onClick(goBackClickHandler);
    TelegramServiceProvider.BackButton.enable();
  },
});
</script>
