import { parse } from 'csv-parse/sync';
import axios from 'axios';

async function readPublicSheet() {
    const url = "https://docs.google.com/spreadsheets/d/1jJK6swaj4Ac11LHMzVxIsGVggoqcLJuQAuDfBBOSOoI/export?format=csv&gid=0";

    try {
        const response = await axios.get(url);
        return parse(response.data, {
            columns: true,
            skip_empty_lines: true,
        });
    } catch (err) {
        console.error('Ошибка:', err);
        return []; // Возвращаем пустой массив при ошибке
    }
}

export default async function getEstate(orderType, estateType, district) {
    return [];
    try {
        const data = await readPublicSheet();
        return data.filter(estate =>
            estate['Тип сделки'] === orderType &&
            estate['Тип жилья'] === estateType &&
            estate['Район'] === district
        );
    } catch (err) {
        console.error('Ошибка:', err);
        return [];
    }
}

// Для тестирования нужно использовать async IIFE
(async () => {
    console.log(await getEstate('Покупка', 'Вилла', 'Восточное побережье'));
})();