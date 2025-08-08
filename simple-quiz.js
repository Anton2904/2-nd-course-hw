function playSimpleQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswers = 0;
    let userExited = false;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = currentQuestion.question + "\n";
        questionText += currentQuestion.options.join("\n");
        
        const userInput = prompt(questionText);
        
        
        if (userInput === null) {
            userExited = true;
            break; 
        }
        
        
        if (userInput.trim() === "") {
            alert("Пожалуйста, введите номер ответа!");
            i--; 
            continue;
        }
        
        const userAnswer = parseInt(userInput);
        
        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswers++;
            alert("Правильно!");
        } else {
            alert(`Неправильно! Правильный ответ: ${currentQuestion.correctAnswer}`);
        }
    }

    if (!userExited) {
        alert(`Правильных ответов: ${correctAnswers} из ${quiz.length}`);
    } else {
        alert("Игра завершена. До свидания!");
    }
}