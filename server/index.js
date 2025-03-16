import express from 'express';
import fetch from 'node-fetch';
import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join as pathJoin } from 'path';

//лежит на Render

// Получаем __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загружаем .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Render задаст порт через PORT

// Проверяем, что BOT_TOKEN существует
if (!process.env.BOT_TOKEN) {
    console.error('Ошибка: BOT_TOKEN не указан в переменных окружения');
    process.exit(1);
}

// Логируем переменные окружения для отладки
console.log('BOT_TOKEN:', process.env.BOT_TOKEN);
console.log('REACT_APP_URL:', process.env.REACT_APP_URL);
console.log('PORT:', PORT);

const bot = new Telegraf(process.env.BOT_TOKEN);
const BACKEND_URL = process.env.RENDER_EXTERNAL_URL || 'https://your-app.onrender.com'; // URL Render для API и Webhook

// Middleware для обработки JSON и URL-encoded данных
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Обработчик команды /start с получением username
bot.start(async (ctx) => {
    const username = ctx.from.username || 'пользователь';
    console.log(`${username} запустил бота`);
    console.log('Контекст:', ctx);
    try {
        await ctx.reply(
            `Привет, @${username}! Добро пожаловать! Я помогу тебе сделать твой отпуск в Тайланде ещё лучше и проще!`
        );
        ctx.reply('Откройте приложение:', Markup.inlineKeyboard([
            Markup.button.webApp('🚀 Запустить приложение', process.env.REACT_APP_URL || 'https://mythaicomp.ru'),
        ]));
    } catch (error) {
        console.error('Ошибка в /start:', error);
    }
});

// Обработчик данных из Web App
bot.on('web_app_data', (ctx) => {
    const webAppData = ctx.webAppData;
    console.log('Данные из приложения:', webAppData);
});

// Прокси-эндпоинт для загрузки изображений с Яндекс.Диска
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

// Эндпоинт для Webhook Telegram
app.post('/bot', (req, res) => {
    console.log('Получен запрос от Telegram на /bot');
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

// Запуск сервера и установка Webhook
const startServer = async () => {
    app.listen(PORT, async () => {
        console.log(`Сервер запущен на порту ${PORT}`);
        const webhookUrl = `${BACKEND_URL}/bot`; // Используем URL Render для Webhook
        try {
            await bot.telegram.setWebhook(webhookUrl);
            console.log(`Webhook установлен: ${webhookUrl}`);
            const webhookInfo = await bot.telegram.getWebhookInfo();
            console.log('Текущий Webhook:', webhookInfo);
        } catch (error) {
            console.error('Ошибка установки Webhook:', error);
        }
    });
};

// Обработка ошибок и завершения
process.once('SIGINT', () => {
    console.log('Получен сигнал SIGINT, останавливаем бота');
    bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
    console.log('Получен сигнал SIGTERM, останавливаем бота');
    bot.stop('SIGTERM');
});

// Запуск сервера
startServer().catch((err) => {
    console.error('Ошибка при запуске сервера:', err);
});