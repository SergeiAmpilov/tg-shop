<template>
  <div>
    <h1>Order</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';


export default defineComponent({
  mounted() {
    // go back
    const goBackClickHandler = this.redirectToCart.bind(this);
    TelegramServiceProvider.BackButton.onClick(goBackClickHandler);
    TelegramServiceProvider.BackButton.show();

    const clickSubmitHandler = this.submitOrder.bind(this);
    TelegramServiceProvider.MainButton.setText('Отправить заказ');
    TelegramServiceProvider.MainButton.onClick(clickSubmitHandler);
  },
  methods: {
    redirectToCart() {
      this.$router.push({ name: 'cart' });
    },
    submitOrder() {},
  },
});
</script>
