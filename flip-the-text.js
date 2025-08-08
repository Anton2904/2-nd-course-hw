function playFlipTheText(){

        let userInput = prompt('Введите любой текст и я его переверну!');
    
        if (userInput === null || userInput.trim() === "") {
            alert('Игра окончена.');
        return;
    }

        let flip =  userInput.split('').reverse().join('');

        alert(flip); 
        
        const wantContinue = confirm('Хотите продолжить?');
        if (wantContinue) {
            playFlipTheText(); 
        } else {
            alert('Игра окончена.');
    }
   

    
    
}