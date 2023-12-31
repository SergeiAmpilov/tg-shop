"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const bot = new telegraf_1.Telegraf(config_1.config.token);
        bot.command('start', (ctx) => {
            ctx.reply('Wellcome to TG shop bot. Press the button below to start the application.', telegraf_1.Markup.keyboard([
                telegraf_1.Markup.button.webApp('Send a message', config_1.config.webAppUrl)
            ]));
        });
        bot.launch();
    });
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
