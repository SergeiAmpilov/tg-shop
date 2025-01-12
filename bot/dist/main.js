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
const filters_1 = require("telegraf/filters");
const config_1 = require("./config");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const bot = new telegraf_1.Telegraf(config_1.config.token);
        bot.command('start', (ctx) => {
            ctx.reply('Wellcome to TG shop bot. Press the button below to start the application.', telegraf_1.Markup.keyboard([
                telegraf_1.Markup.button.webApp('Send a feedback', config_1.config.webAppUrl + 'feedback/')
            ]));
        });
        bot.on((0, filters_1.message)('web_app_data'), (ctx) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            let data;
            data = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.webAppData) === null || _a === void 0 ? void 0 : _a.data.json();
            ctx.reply(`Your message was: ${(_b = data === null || data === void 0 ? void 0 : data.feedback) !== null && _b !== void 0 ? _b : 'empty'}`);
        }));
        bot.launch();
    });
}
init();
