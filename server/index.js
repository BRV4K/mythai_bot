import express from 'express';
import fetch from 'node-fetch';
import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.BOT_TOKEN) {
    console.error('Ошибка: BOT_TOKEN не указан в переменных окружения');
    process.exit(1);
}

console.log('BOT_TOKEN:', process.env.BOT_TOKEN);
console.log('REACT_APP_URL:', process.env.REACT_APP_URL);
console.log('VITE_PROXY_URL:', process.env.VITE_PROXY_URL);
console.log('PORT:', PORT);

const bot = new Telegraf(process.env.BOT_TOKEN);
const REACT_APP_URL = process.env.REACT_APP_URL || 'https://mythaicomp.ru';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

bot.start(async (ctx) => {
    const username = ctx.from.username || 'пользователь';
    console.log(`${username} запустил бота`);
    try {
        await ctx.reply(
            `Привет, @${username}! Добро пожаловать! Я помогу тебе сделать твой отпуск в Тайланде ещё лучше и проще!`
        );
        ctx.reply('Откройте приложение:', Markup.inlineKeyboard([
            Markup.button.webApp('🚀 Запустить приложение', REACT_APP_URL),
        ]));
    } catch (error) {
        console.error('Ошибка в /start:', error);
    }
});

bot.on('web_app_data', (ctx) => {
    const webAppData = ctx.webAppData;
    console.log('Данные из приложения:', webAppData);
});

app.get('/yandex-proxy', async (req, res) => {
    try {
        const yandexUrl = req.query.url;
        console.log('Прокси-запрос для URL:', yandexUrl);

        const response = await fetch(yandexUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });

        res.set('Content-Type', response.headers.get('Content-Type'));
        response.body.pipe(res);
    } catch (error) {
        console.error('Ошибка в /yandex-proxy:', error);
        res.status(500).send('Ошибка загрузки изображения');
    }
});

app.post('/bot', (req, res) => {
    console.log('Получен запрос от Telegram на /bot');
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    const webhookUrl = `https://mythaicomp.ru/bot`;
    bot.telegram.setWebhook(webhookUrl).then(() => {
        console.log(`Webhook установлен: ${webhookUrl}`);
    }).catch((error) => {
        console.error('Ошибка установки Webhook:', error);
    });
});

process.once('SIGINT', () => {
    console.log('Получен сигнал SIGINT, останавливаем бота');
    bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
    console.log('Получен сигнал SIGTERM, останавливаем бота');
    bot.stop('SIGTERM');
});