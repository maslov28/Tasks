// 01 Вычисление площади треугольника

// const a = 3;
// const b = 4;
// const c = 5;

// const p = (a + b + c) / 2;
// const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

// console.log(area);

// 02 Форматирование даты

// let today = new Date();
// today = today.toLocaleDateString();
// console.log(today);

// 03 Вывод в консоль расширения файла

// const filename = "webstorm.exe";
// const arr = filename.split('.');
// const extension = arr[arr.length - 1];
// console.log(extension);

// 04 Найти наибольшее и наименьшее значение

// const numbers = '2 4 5 7 -2';
// const arr = numbers.split(' ');
// const result = `${Math.max(...arr)} ${Math.min(...arr)}`;
// console.log(result);

// 05 Определение високосного года

// function leapYear(year) {
//     if (year % 400 === 0) return true;
//     else if (year % 100 === 0) return false;
//     else if (year % 4 === 0) return true;
//     else return false;
// }

// console.log(leapYear(2022));

// 06 Отсортировать массив чисел по возрастанию

const arr = [13, 1, 0, 22, 2, 32, 2];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                let minValue = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = minValue;
            }
        }
    }

console.log(arr);