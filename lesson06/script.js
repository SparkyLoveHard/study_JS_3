"use strict";

function gameFindNum() {
    // "Загадывание случайного числа от 1 до 100"
    let guessNum = Math.floor(Math.random() * 101);
    console.log(guessNum);
    // Проверка на число
    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    // спрашивает пользователя: "Угадай число от 1 до 100".
    function askUser() {
        let askUserNum = prompt('Угадай число от 1 до 100');

        if(askUserNum !== null) {
            if(isNumber(askUserNum)) {     
                // если пользовательское число равно загаданному, то игра заканчивается и 
                // выводит сообщение  "Поздравляю, Вы угадали!!!".    
                if(+askUserNum === +guessNum) {
                    alert('Поздравляю, Вы угадали!!!');
                    return;
                }
                // если пользовательское число больше, то бот выводит "Загаданное число меньше"
                // и предлагает ввести новый вариант
                if(askUserNum > guessNum) {
                    alert('Загаданное число меньше');
                    return askUser();
                }
                // если пользовательское число меньше, то бот выводит "Загаданное число больше" 
                // и предлагает ввести новый вариант;
                if(askUserNum < guessNum) {
                    alert('Загаданное число больше');
                    return askUser();   
                }
            } else {
                // если пользователь нажимает "Отмена", то игра заканчивается 
                // и выводится сообщение "Игра окончена".
                alert('Введи число!');
                return askUser();
            }
        } 
        else {
            alert('Игра окончена');
        }
    }
    askUser();
}
gameFindNum();