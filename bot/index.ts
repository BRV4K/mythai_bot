import {Telegraf} from "telegraf";
import {message} from "telegraf/filters";

console.log(process.env.BOT_TOKEN)

// const bot = new Telegraf(process.env.BOT_TOKEN)
const bot = new Telegraf("7525301982:AAG3cE_CTO4zYbOg3zqd1PdyERXancg2zWo");
bot.start((ctx) => ctx.reply('Welcome'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));