// Переменные для отслеживания уровня, количества правильных и неправильных ответов, количества вопросов и текущего вопроса
let level = "Начальный";
let correctCount = 0;
let wrongCount = 0;
let questionCount = 0;
let currentQuestion = {};
let timer; // Переменная для таймера
let timeElapsed = 0; // Время, прошедшее с начала игры
const maxWrongAnswers = 3; // Максимальное количество неправильных ответов

// Запуск игры и таймера при загрузке документа
document.addEventListener('DOMContentLoaded', (event) => {
    startGame();
    startTimer();
});

// Функция для начала игры
function startGame() {
    const submitButton = document.querySelector('button[onclick="checkAnswer()"]');
    if (submitButton) {
        submitButton.style.display = 'block'; // Показываем кнопку для отправки ответа
    }

    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.style.display = 'none'; // Скрываем кнопку перезапуска в начале
    }

    // Сбрасываем значения переменных
    level = "Начальный";
    correctCount = 0;
    wrongCount = 0;
    questionCount = 0;
    timeElapsed = 0;

    // Обновляем отображение уровня и счетчиков
    const levelElement = document.getElementById('current-level');
    if (levelElement) {
        levelElement.innerText = level;
    }

    const correctElement = document.getElementById('correct');
    if (correctElement) {
        correctElement.innerText = correctCount;
    }

    const wrongElement = document.getElementById('wrong');
    if (wrongElement) {
        wrongElement.innerText = wrongCount;
    }

    // Очищаем финальное сообщение и загружаем следующий вопрос
    document.getElementById('final-message').innerText = '';
    nextQuestion();
}

// Функция для запуска таймера
function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Обновляем элемент таймера на странице
        const timerElement = document.getElementById('time-elapsed');
        if (timerElement) {
            timerElement.innerText = formattedTime;
        }
    }, 1000); // Обновляем каждую секунду
}

// Функция для загрузки следующего вопроса
function nextQuestion() {
    // Проверяем, достигли ли мы максимального количества вопросов
    if (questionCount >= 10) {
        // Если правильных ответов 8 или больше, повышаем уровень
        if (correctCount >= 8) {
            if (level === "Начальный") {
                level = "Средний";
            } else if (level === "Средний") {
                level = "Продвинутый";
            } else {
                endGame(true); // Заканчиваем игру при достижении последнего уровня
                return;
            }

            // Сбрасываем счетчики при повышении уровня
            correctCount = 0;
            wrongCount = 0;
            questionCount = 0;

            const correctElement = document.getElementById('correct');
            if (correctElement) {
                correctElement.innerText = correctCount;
            }
            
            const wrongElement = document.getElementById('wrong');
            if (wrongElement) {
                wrongElement.innerText = wrongCount;
            }
        } else {
            endGame(false); // Заканчиваем игру, если не хватает правильных ответов
            return;
        }
    }

    // Обновляем отображение текущего уровня
    const levelElement = document.getElementById('current-level');
    if (levelElement) {
        levelElement.innerText = level;
    }

    questionCount++; // Увеличиваем счетчик вопросов

    // Генерируем вопрос в зависимости от текущего уровня
    switch (level) {
        case "Начальный":
            currentQuestion = generateArithmeticQuestion(); // Для начального уровня генерируем арифметические вопросы
            break;
        case "Средний":
            currentQuestion = generateComparisonQuestion(); // Для среднего уровня генерируем вопросы на сравнение
            break;
        case "Продвинутый":
            currentQuestion = generateAdvancedQuestion(); // Для продвинутого уровня генерируем сложные вопросы
            break;
    }

    // Отображаем сгенерированный вопрос на странице
    const questionElement = document.getElementById('question');
    if (questionElement) {
        questionElement.innerText = currentQuestion.question;
    }
}

// Функция для генерации арифметических вопросов
function generateArithmeticQuestion() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question = `${a} ${operator} ${b}`;
    let answer;

    // Обрабатываем деление, чтобы избежать деления на ноль
    if (operator === '/' && b !== 0) {
        answer = (a / b).toFixed(2); // Округляем до двух знаков после запятой
    } else {
        answer = eval(question).toString(); // Вычисляем ответ на вопрос
    }

    // Если деление на ноль, генерируем новый вопрос
    if (operator === '/' && b === 0) {
        return generateArithmeticQuestion();
    }

    return { question, answer: answer }; // Возвращаем сгенерированный вопрос и ответ
}

// Функция для генерации вопросов на сравнение
function generateComparisonQuestion() {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let operators = ['>', '<', '>=', '<=', '=='];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let question = `${a} ${operator} ${b}`;
    let answer = eval(question) ? '1' : '0'; // Определяем, правильный ли ответ
    return { question, answer }; // Возвращаем вопрос и ответ
}

// Функция для генерации продвинутых логических вопросов
function generateAdvancedQuestion() {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let operators = ['&&', '||'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let question = `(${a} % 2 === 0) ${operator} (${b} % 2 === 0)`; // Генерируем логический вопрос
    let answer = eval(question) ? '1' : '0'; // Определяем, правильный ли ответ
    return { question, answer }; // Возвращаем вопрос и ответ
}

// Функция для проверки ответа пользователя
function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    if (userAnswer === '') {
        alert('Пожалуйста, введите ваш ответ!');
        return;
    }

    const validAnswerPattern = /^-?\d+(\.\d+)?$/; // Шаблон для проверки корректности введенного числа
    if (!validAnswerPattern.test(userAnswer)) {
        alert('Пожалуйста, введите корректный числовой ответ!');
        return;
    }

    // Сравниваем введенный ответ с правильным ответом
    if (parseFloat(userAnswer).toFixed(2) === parseFloat(currentQuestion.answer).toFixed(2)) {
        correctCount++;
        const correctElement = document.getElementById('correct');
        if (correctElement) {
            correctElement.innerText = correctCount;
        }
    } else {
        wrongCount++;
        const wrongElement = document.getElementById('wrong');
        if (wrongElement) {
            wrongElement.innerText = wrongCount;
        }

        if (wrongCount >= 3) {
            endGame(false);
            return;
        }
    }

    document.getElementById('answer').value = '';
    nextQuestion();
}


function endGame(success) {
    clearInterval(timer);

    const submitButton = document.querySelector('button[onclick="checkAnswer()"]');
    if (submitButton) {
        submitButton.style.display = 'none';
    }

    const finalMessageElement = document.getElementById('final-message');
    if (finalMessageElement) {
        if (success) {
            finalMessageElement.innerText = 'Поздравляем! Вы прошли все уровни!';
        } else {
            finalMessageElement.innerText = 'Игра окончена. Попробуйте снова!';
        }
    }

    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.style.display = 'block'; // Показываем кнопку перезапуска игры
    }
}

function restartGame() {
    startGame();
    startTimer();
}
