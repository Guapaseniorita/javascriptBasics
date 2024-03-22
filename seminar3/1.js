"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const number = Number(prompt("Введите любое число", ""));
function calculateCub(number) {
    console.log(Math.pow(number, 3));
}
calculateCub(number);
const calcCub = (number) => Math.pow(number, 3);
console.log(calcCub(number));


