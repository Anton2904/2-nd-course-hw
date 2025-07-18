// 1 Задание
function smallerOfTwoNumbers(number1, number2) {
    if (number1 < number2) {
        return number1;
    }else
        return number2;

}

console.log(smallerOfTwoNumbers(8, 4));
console.log(smallerOfTwoNumbers(6, 6));


// 2 Задание

function evenOrOddNumber(number) {
    if (number % 2 === 0) {
            return ('Число четное');
    } else {
            return ('Число нечетное');  
    }

}

console.log(evenOrOddNumber(5)); // Число нечетное
console.log(evenOrOddNumber(4)); // Число четное

// 3 Задание

function squareNumber(number) {
    console.log(number * number);
}

squareNumber(5); // Квадрат числа 5

// 4 Задание

function userAge() {
    let age = prompt('Сколько вам лет?');

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    }
    else if (age === 0 || age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

userAge();


// 5 Задание

function checkingNumbers(number1, number2) {
    if (number1 === Number(number1) && number2 === Number(number2)) {
            return number1 * number2;
    } else {
            return ('Одно или оба значения не являются числом')
    }
}

console.log(checkingNumbers('3', 2));
console.log(checkingNumbers(6, 2));

// 6 Задание

function cubingNumber() {
    let number = Number(prompt('Введите число'));

    if (number === Number(number)) {
        let cube = number * number * number;
        return (`${number} в кубе равняется ${cube}`);
    } else {
        return ('Переданный параметр не является числом');
    }
}

console.log(cubingNumber());

// 7 Задание

function getArea(radius) {
    return this.radius * this.radius;    
}

function getPerimeter(radius) {
    return (this.radius + this.radius) * 2;
}

const circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter,
}

const circle2 = {
    radius: 8,
    area: getArea,
    perimeter: getPerimeter,
}

console.log(circle1.area());
console.log(circle1.perimeter());

console.log(circle2.area());
console.log(circle2.perimeter());