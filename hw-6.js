// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 0 ) break;
        console.log(numbers[i]);
    
}


// Задание 2

const numbers2 = [1, 5, 4, 10, 0, 3];

let position = numbers2.indexOf(4);

console.log(position);

// Задание 3

const numbers3 = [1, 3, 5, 10, 20];
console.log(numbers3.join(' '));

// Задание 4

const arr1 = [];


for(i = 0; i < 3; i++ ){
  const arr2 = []; 
 for(j = 0; j < 3; j++){
   arr2.push(1);
 } 
 arr1.push(arr2);
}

console.log(arr1);


// Задание 5

const arr3 = [1, 1, 1];

arr3.push(2, 2, 2);

console.log(arr3);

// Задание 6

const arr4 = [9, 8, 7, 'a', 6, 5];

const filteredArr = arr4.filter(item => typeof item === 'number');

const sortedArr = filteredArr.sort((a, b) => a - b);

console.log(sortedArr);

// Задание 7

const guessTheNumber = [9, 8, 7, 6, 5];

let userNumber = prompt('Угадай одно из загаданных чисел!');

if (guessTheNumber.includes(Number(userNumber))) {
    alert("Угадал!");
} else {
    alert("Не угадал!");
}

//Задание 8

let str = 'abcdef';
let splitStr = str.split('');
let rev = splitStr.reverse();
let str2 = rev.join('');
console.log(str2);

//Задание 9

const arr9 = [[1, 2, 3],[4, 5, 6]];
const combineArr9 = [].concat(...arr9);
console.log(combineArr9);

// Задание 10

const arr10 = [1, 2, 4, 3, 5, 7, 6, 8, 10, 9];

for (let i = 0; i < arr10.length - 1; i++) {
    const current = arr10[i];
  const next = arr10[i + 1];
  const sum = current + next;
  
  console.log(`Сумма элементов ${i} и ${i+1}: ${current} + ${next} = ${sum}`);
    
}

// Задание 11

function squareArray (arr){
    return squareArr = arr.map(square => square ** 2);
    
}

let arr11 = [5, 4, 3, 2];
console.log(squareArray(arr11));

// Задание 12

function stringLength(stringArr){
    return stringArr.map(str => str.length);
}

const words = ['Велосипед', 'Самолет','Автомобиль'];
console.log(stringLength(words));

// Задание 13

function negativeValues(numbers){
    return numbers.filter(num => num < 0);
}

const numArr = [2, -3, 5, -8, 6, 4, -5, 3, 9];
console.log(negativeValues(numArr));

// Задание 14

const array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 11));
}

const evenNumbers = array.filter(num => num % 2 === 0);

console.log(array);
console.log(evenNumbers);

// Задание 15

const arr15 = [];
for (let i = 0; i < 6; i++){
    arr15.push(Math.floor(Math.random() * 11));
}

const sum = arr15.reduce((total, number) => total + number, 0);

const arithmeticMean = sum / arr15.length;

console.log(arithmeticMean);