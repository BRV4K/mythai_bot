import { parse } from 'csv-parse/browser/esm';
import axios from 'axios';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/10i9gtn0mTkkVtgHqrUaloHRyHchUciJQwwpOGS8o8j4/export?format=csv&gid=2099194697";

async function readPublicSheet() {
    try {
        const response = await axios.get(SHEET_URL);

        return await new Promise((resolve, reject) => {
            parse(response.data, {
                columns: true,
                skip_empty_lines: true,
            }, (err, records) => {
                if (err) reject(err);
                else resolve(records);
            });
        });

    } catch (err) {
        console.error('Ошибка:', err);
        return [];
    }
}

export default async function getServices() {
    try {
        const courses = await readPublicSheet();
        // Тестовый вывод данных в консоль
        console.log('Полученные данные:', JSON.parse(JSON.stringify(courses)));
        return courses;
    } catch (err) {
        console.error('Ошибка:', err);
        return [];
    }
}

