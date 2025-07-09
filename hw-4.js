//Задание 1

let i = 0;

while (i < 2) {
    console.log("привет");
    i++;
}

//Задание 2

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//Задание 3

let i = 7;

while ( i <= 22) {
    console.log(i);
    i++;
}

//Задание 4

let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
   
}


//Задание 5

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++
}

console.log(n);
console.log(num);


//Задание 6. На примере Июнь 2025 год.

let friday = 4;
for (let i = 1; i <= 31; i++){
    
       if (i === friday) {
         friday += 7;
         alert("Сегодня пятница," + i + "-е число. Необходимо подготовить отчет");
       }
       
}

