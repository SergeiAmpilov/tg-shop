import { Telegraf, Markup } from 'telegraf';
import { config } from './config';

async function init(): Promise<void> {

  const bot = new Telegraf(config.token);
  bot.command('start', (ctx) => {
    ctx.reply(
      'Wellcome to TG shop bot. Press the button below to start the application.',
      Markup.keyboard([
        Markup.button.webApp(
          'Send a feedback',
          config.webAppUrl + 'feedback/'
        )
      ])
      );
  });
  bot.launch();

}

init();