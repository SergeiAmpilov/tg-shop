import { Telegraf, Markup } from 'telegraf';
import { config } from './config';

async function init(): Promise<void> {

  const bot = new Telegraf(config.token);
  bot.command('start', (ctx) => {});
  bot.launch();

}

init();



/*
Done! Congratulations on your new bot. You will find it at 

t.me/TgWineShopAppBot

You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
6946374220:AAEX8Wih-0ycshK_Y8FPuI6dgcdsA718HoI
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api

*/