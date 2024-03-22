"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const number1 = Number.parseInt(prompt("Введите любое число", ""));
const number2 = Number.parseInt(prompt("Введите любое число", ""));
const number3 = Number.parseInt(prompt("Введите любое число", ""));

function max(number1, number2, number3) {
    let max = 0;
    if (number1 > number2 && number1 > number3) {
        return max = number1; 
    } else if (number2 > number1 && number2 > number3) {
        return max = number2
    } else {
        return max = number3;
    }
}
const result = max(number1, number2, number3);
console.log(`Максимальное значение среди чисел ${number1}, ${number2}, ${number3} равно ${result}.`)


