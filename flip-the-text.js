function playFlipTheText(){

    do {
        let userInput = prompt('Введите любой текст и я его переверну!');
    
        let flip =  userInput.split('').reverse().join('');

        alert(flip); 
        const result = confirm('Хотите продолжить?');
        result?playFlipTheText():alert('Игра окончена.')
    
    } while (result);
    
}