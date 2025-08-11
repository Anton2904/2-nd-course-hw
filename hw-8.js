// 1 Задание

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// 2 Задание

function isPositive(num) {
  return num > 0;
}
function isMale(person) {
   return person.gender === 'male';
}
function filter(array, ruleFunction) {
   const result = [];
   for(let i = 0; i < array.length; i++){
      if (ruleFunction(array[i], i, array)) {
      result.push(array[i]);
     }
   }

   return result;

}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));


// 3 Задание

function infoDate(){
   let date = new Date();
   console.log(date);

}

 let repeatDate = setInterval(infoDate, 3000);
 setTimeout(() => {
   clearInterval(repeatDate);
   console.log('30 секунд прошло');   
 }, 1000 * 30); 


 // 4 Задание

 function delayForSecond(callback) {
    setTimeout(callback, 1000);
   
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// 5 Задание

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб')); 
