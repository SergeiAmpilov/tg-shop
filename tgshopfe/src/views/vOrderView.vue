<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <h1>Подтверждение заказа</h1>
    <form action="" class="mt">
      <div class="mt">
        <select name="city" id="city" v-model="city" >
          <option value="0">Выберите город</option>
          <option value="msk">Moscow</option>
          <option value="sch">Sochi</option>
          <option value="spb">Saint-Petersburg</option>
        </select>
      </div>
      <div class="mt">
        <label for="name">
          <input
            type="text"
            class="form-control"
            v-model="name"
            id="name"
            placeholder="Ваше имя:"
          >
        </label>
      </div>
      <div class="mt">
        <label for="email" class="mt">
          <input
            type="text"
            class="form-control"
            v-model="email"
            id="email"
            placeholder="Email:"
          >
        </label>
      </div>
      <div class="mt">
        <label for="phone" class="mt">
          <input
            type="text"
            class="form-control"
            v-model="phone"
            id="phone"
            placeholder="Phone:"
          >
        </label>
      </div>
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
    TelegramServiceProvider.MainButton.show();
    TelegramServiceProvider.MainButton.onClick(clickSubmitHandler);
  },
  methods: {
    redirectToCart() {
      this.$router.push({ name: 'cart' });
    },
    submitOrder() {
      TelegramServiceProvider.sendData({
        name: this.name,
        email: this.email,
        phone: this.phone,
        city: this.city,
        cart: { ...this.$store.state.cart },
      });
    },
  },
});
</script>
