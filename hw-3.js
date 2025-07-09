// 1 задание

let password = 'qwerty'
let inputUserPassword = prompt("Введите пароль");

if (inputUserPassword === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}


// 2 задание

let c = 2;

if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("неверно");
}


// 3 задание

let d = 150;
let e = 57;

if (d > 100 || e > 100) {
    console.log("Верно");    
} else {
    console.log("Неверно");
}


// 4 задание

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//5 задание

let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
    case 1: 
          alert("Январь - это зима");  
        break;
    
    case 2: 
          alert("Февраль - это зима");  
        break;
    case 3: 
          alert("Март - это весна");  
        break;
    case 4: 
          alert("Апрель - это весна");  
        break;
    case 5: 
          alert("Май - это весна");  
        break;
    case 6: 
          alert("Июнь - это лето");  
        break;
    case 7: 
          alert("Июль - это лето");  
        break;
    case 8: 
          alert("Август - это лето");  
        break;
    case 9: 
          alert("Сентябрь - это осень");  
        break;
    case 10: 
          alert("Октябрь - это осень");  
        break;
    case 11: 
          alert("Ноябрь - это осень");  
        break;
    case 12: 
          alert("Декабрь - это зима");  
        break;        

    default:
        alert("Нет такого месяца");
        break;
}



    
