interface TgButton {
  show: () => void;
  hide: () => void;
  setText: (text: string) => void;
}

export class TelegramService {
  private window;

  private tg: any;

  constructor() {
    this.window = window;
    this.tg = this.window.Telegram.WebApp;
  }

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }
}

export const TelegramServiceProvider = new TelegramService();
