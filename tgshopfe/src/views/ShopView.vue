<template>
  <div>
    <h1>Shop view</h1>
    <p>
      {{ b }}
    </p>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { TelegramServiceProvider } from '@/services/Telegram.Service';
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    TelegramServiceProvider.MainButton.setText('Главная кнопка');
    TelegramServiceProvider.MainButton.show();
  },
  data() {
    return {
      b: 14,
    };
  },
});
</script>
