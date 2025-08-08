// 1 Задание

let str = 'js';
console.log(str.toUpperCase());

// 2 Задание

function filterStringsByPrefix(arr, prefix) {
  const lowerPrefix = prefix.toLowerCase();
  return arr.filter(item => 
    item.toLowerCase().startsWith(lowerPrefix)
  );
}

const words = ["Яблоко", "Банан", "Яблоня", "Мандарин", "Ананас"];
const prefix = "яб";

const filteredWords = filterStringsByPrefix(words, prefix);
console.log(filteredWords);


// 3 Задание

let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// 4 Задание

const numArr = [52, 53, 49, 77, 21, 32];

  console.log(Math.min(...numArr));
  console.log(Math.max(...numArr));

// 5 Задание

function printRandomNumbers() {
  const randomNumbers = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumbers);
}

printRandomNumbers();

// 6 Задание

function returnsAnArrayOfRandomNumbers(num){
  const length = Math.floor(num / 2);
  
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (num + 1)));
    
    
    
  }
  return result;
}

console.log(returnsAnArrayOfRandomNumbers(20));


// 7 Задание

function returnRandomNumbers(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}

console.log(returnRandomNumbers(10, 30));


// 8 Задание

let myDate = new Date();

console.log('Текущая дата: ' + myDate.toLocaleDateString());

// 9 Задание

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


// 10 Задание

function returnDate(date){
const options = { year: 'numeric', month: 'long',
day: 'numeric' };
const options2 = {weekday: 'long'};  
const weekday = date.toLocaleDateString('ru-RU', options2);
const formattedDate = date.toLocaleDateString('ru-RU', options);
const formattedTime = date.toLocaleTimeString('ru-RU');
return `Дата: ${formattedDate} — это ${weekday}.\nВремя: ${formattedTime}`;

}


console.log(returnDate(new Date()));