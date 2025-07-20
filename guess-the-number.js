function guessTheNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 1;
  
  let userInput = prompt('Попробуйте отгадать число от 1 до 100!\n(Для выхода введите "exit" или нажмите Отмена)');
  
  while (true) {
    // Проверка на выход
    if (userInput === null || userInput.toLowerCase() === 'exit') {
      alert(`Игра окончена. Загаданное число было ${randomNumber}.`);
      return;
    }
    
    // Преобразуем в число
    const userNumber = Number(userInput);
    
    // Проверка корректности ввода
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
      userInput = prompt('Пожалуйста, введите число от 1 до 100 или "exit" для выхода:');
      continue;
    }
    
    // Проверка числа
    if (userNumber > randomNumber) {
      userInput = prompt(`Ваше число больше загаданного. Попытка ${++attempts}.\nВведите новое число или "exit" для выхода:`);
    } 
    else if (userNumber < randomNumber) {
      userInput = prompt(`Ваше число меньше загаданного. Попытка ${++attempts}.\nВведите новое число или "exit" для выхода:`);
    }
    else {
      alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`);
      return;
    }
  }
}
