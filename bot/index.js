import { Telegraf, Markup } from "telegraf";
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN);
const REACT_APP_URL = process.env.REACT_APP_URL;

// Устанавливаем кнопку меню с Web App
const chatMenuButton = bot.telegram.setChatMenuButton({
    menu_button: {
        type: 'web_app',
        text: 'Мое приложение', // Новое название кнопки
        web_app: { url: REACT_APP_URL }
    }
});

console.log(chatMenuButton.then(res => console.log(res)));

// Обработчик команды /start с получением username
bot.start(async (ctx) => {
    const username = ctx.from.username || 'пользователь';

    await ctx.reply(`Привет, @${username}! Добро пожаловать! Я помогу тебе сделать твой отпуск в Тайланде ещё лучше и проще!`);

    // Кнопка для открытия Web App
    ctx.reply('Откройте приложение:', Markup.inlineKeyboard([
        Markup.button.webApp('🚀 Запустить приложение', REACT_APP_URL)
    ]));
});

// Обработчик данных из Web App
bot.on('web_app_data', (ctx) => {
    const webAppData = ctx.webAppData;
    console.log('Данные из приложения:', webAppData);
});

bot.launch();

// Обработка ошибок и завершения
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));