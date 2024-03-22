"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function calculateSalaryWithTax(number) {

    const salaryAfterTax = number * 0.87;

    console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax}.`);
}

function processUserInput() {
    let userInput = prompt("Введите число:");

    if(isNaN(userInput)) {
        console.log("Значение задано неверно");
    } else {
        let number = parseFloat(userInput);
        calculateSalaryWithTax(number);
    }
}

processUserInput();
