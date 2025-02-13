import { parse } from 'csv-parse/sync';
import axios from 'axios';

async function readPublicSheet() {
    // Используйте URL для экспорта в формате CSV
    const url = "https://docs.google.com/spreadsheets/d/1jJK6swaj4Ac11LHMzVxIsGVggoqcLJuQAuDfBBOSOoI/export?format=csv&gid=0";

    try {
        const response = await axios.get(url);
        const rows = parse(response.data, {
            columns: true, // Использовать первую строку как заголовки
            skip_empty_lines: true, // Пропускать пустые строки
        });
        console.log(rows);
    } catch (err) {
        console.error('Ошибка:', err);
    }
}

readPublicSheet();