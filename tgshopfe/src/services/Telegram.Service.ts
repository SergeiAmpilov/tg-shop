interface TgButton {
  show: () => void;
  hide: () => void;
  setText?: (text: string) => void;
  onClick: (fn: () => void) => void;
  offClick: (fn: () => void) => void;
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

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  ready(): void {
    this.tg.ready();
  }
}

export const TelegramServiceProvider = new TelegramService();
