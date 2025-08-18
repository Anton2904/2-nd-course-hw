function playRockPaperScissors(){

    
    const userChoise = prompt('Выберите: камень, ножницы или бумага').toLowerCase();

    if(userChoise !== 'камень' && userChoise !== 'ножницы' && userChoise !== 'бумага'){
        alert("Пожалуйста, введите одно из следующих значений: камень, ножницы или бумага");
        return;
    }


    const computerOption = ["камень", "ножницы", "бумага"]; 
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = computerOption[randomIndex];

    let result;


    if(userChoise === computerChoice){
        result = 'Ничья';
    }
    else if((userChoise === 'камень' && computerChoice === 'ножницы') || (userChoise === 'ножницы' && computerChoice === 'бумага') || (userChoise === 'бумага' && computerChoice === 'камень')){
        result = 'Вы победили';
    }else{
        result = 'Компьютер победил';
    }

    alert(`
        Ваш выбор: ${userChoise}
        Выбор компьютера: ${computerChoice}
        Результат: ${result}
        `);




}