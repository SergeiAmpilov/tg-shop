import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import { config } from './config';

async function init(): Promise<void> {

  const bot = new Telegraf(config.token);

  bot.command('start', (ctx) => {
    ctx.reply(
      'Wellcome to TG shop bot. Press the button below to start the application.',
      Markup.keyboard([
        Markup.button.webApp(
          'Open shop',
          config.webAppUrl 
          // + 'feedback/'
        )
      ])
      );
  });
  
  bot.on(message('web_app_data'), async (ctx) => {
    let data: any;
    data = ctx?.webAppData?.data.json();
    
    ctx.reply(`Your message was: ${data?.feedback ?? 'empty'}`);    
    
  });
  
  
  bot.launch();

}

init();