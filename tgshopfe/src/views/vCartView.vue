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
    const clickHandler = this.goToOrderClick.bind(this);
    TelegramServiceProvider.MainButton.onClick(clickHandler);
    TelegramServiceProvider.MainButton.setText(`Оформить заказ (${this.$store.getters.productsInCart})`);

    // go back
    const goBackClickHandler = this.goBackClick.bind(this);
    TelegramServiceProvider.BackButton.onClick(goBackClickHandler);
    TelegramServiceProvider.BackButton.show();
  },
  unmounted() {
    // go back
    const goBackClickHandler = this.goBackClick.bind(this);
    TelegramServiceProvider.BackButton.offClick(goBackClickHandler);
    TelegramServiceProvider.BackButton.hide();
  },
  methods: {
    goBackClick() {
      this.$router.push({ name: 'shop' });
    },
    goToOrderClick() {
      this.$router.push({ name: 'order' });
    },
  },
});
</script>
