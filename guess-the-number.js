function guessTheNumber() {

const randomNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = prompt('Попробуйте отгадать число!');


do {
    
    if (userNumber > randomNumber) {
        userNumber = prompt(`Ваше число больше загаданного. Введите еще раз:`);
    } 
    else if(userNumber < randomNumber) {
        userNumber = prompt(`Ваше число меньше загаданного. Введите еще раз:`);
    }else{
        alert(`Вы угадали! Загаданное число ${randomNumber}`);
        break;
    }

} while (userNumber !== randomNumber);


    
}



