<template>
  <div>
    <h1>Подтверждение заказа</h1>
    <form action="" class="mt">
      <select name="city" id="city" v-model="city">
        <option value="0">Выберите город</option>
        <option value="msk">Moscow</option>
        <option value="sch">Sochi</option>
        <option value="spb">Saint-Petersburg</option>
      </select>
      <label for="name">
        <input
          type="text"
          class="form-control"
          v-model="name"
          id="name"
          placeholder="Ваше имя:"
        >
      </label>
      <label for="email">
        <input
          type="text"
          class="form-control"
          v-model="email"
          id="email"
          placeholder="Email:"
        >
      </label>
      <label for="phone">
        <input
          type="text"
          class="form-control"
          v-model="phone"
          id="phone"
          placeholder="Email:"
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
