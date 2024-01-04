<template>
  <div>
    <h1>Feedback view</h1>
    <form action="" class="centered form">
      <label for="feedback">
        Feedback:
        <input type="text" class="form-control" id="feedback" v-model="feedback">
      </label>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TelegramServiceProvider } from '@/services/Telegram.Service';

export default defineComponent({
  mounted() {
    const clickHandler = this.sendData.bind(this);
    TelegramServiceProvider.MainButton.show();
    TelegramServiceProvider.MainButton.setText('Отправить отзыв');
    TelegramServiceProvider.MainButton.onClick(clickHandler);
    TelegramServiceProvider.MainButton.disable();
    TelegramServiceProvider.MainButton.setText('Отправить отзыв (Disabled)');
  },
  data() {
    return {
      feedback: '',
    };
  },
  watch: {
    feedback(newVal) {
      if (newVal.trim()) {
        TelegramServiceProvider.MainButton.enable();
        TelegramServiceProvider.MainButton.setText('Отправить отзыв (Enabled)');
      } else {
        TelegramServiceProvider.MainButton.disable();
        TelegramServiceProvider.MainButton.setText('Отправить отзыв (Disabled)');
      }
    },
  },
  methods: {
    sendData() {
      TelegramServiceProvider.sendData({ feedback: this.feedback });
    },
  },
});
</script>
