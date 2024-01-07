<template>
  <div>
    <h1>Подтверждение заказа</h1>
    <form action="" class="mt">
      <label for="name">
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="name"
          placeholder="Ваше имя:"
        >
      </label>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
      city: 0,
      phone: '',
    };
  },
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
    submitOrder() {
      console.log('submit');
    },
  },
});
</script>
