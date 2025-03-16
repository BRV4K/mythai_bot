import express from 'express';
import fetch from 'node-fetch';
import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import path from 'path';

// Загружаем .env
dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Проверяем, что BOT_TOKEN существует
if (!process.env.BOT_TOKEN) {
    console.error('Ошибка: BOT_TOKEN не указан в переменных окружения');
    process.exit(1);
}

console.log(process.env.BOT_TOKEN);
console.log(process.env.REACT_APP_URL);

const bot = new Telegraf(process.env.BOT_TOKEN);
const REACT_APP_URL = process.env.REACT_APP_URL || 'https://example.ru'; // Значение по умолчанию

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
            Markup.button.webApp('🚀 Запустить приложение', REACT_APP_URL),
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

        // Загружаем изображение с Яндекс.Диска
        const response = await fetch(yandexUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });

        // Пересылаем заголовки и данные
        res.set('Content-Type', response.headers.get('Content-Type'));
        response.body.pipe(res);
    } catch (error) {
        res.status(500).send('Ошибка загрузки изображения');
    }
});

// Обслуживание статических файлов React
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'build')));

// Обработка всех остальных маршрутов через index.html React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера и бота
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    // bot.launch();
    // console.log('Бот запущен в режиме long polling');
});

// Обработка ошибок и завершения
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));