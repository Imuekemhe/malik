document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    let score = 0;
    const rounds = 5;
    const results = []; 

    for (let i = 0; i < rounds; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operatorIndex = Math.floor(Math.random() * 3);
        const operator = ['+', '-', '*'][operatorIndex];
        
        let correctAnswer;
        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
        }

        const userAnswer = prompt(`What is ${num1} ${operator} ${num2}?`);
        
        if (parseInt(userAnswer) === correctAnswer) {
            alert('Correct!');
            score++;
            results.push({ question: `${num1} ${operator} ${num2}`, userAnswer: userAnswer, correct: true });
        } else {
            alert(`Wrong! The correct answer was ${correctAnswer}.`);
            results.push({ question: `${num1} ${operator} ${num2}`, userAnswer: userAnswer, correct: false });
        }
    }

    alert(`Game over! Your score is ${score} out of ${rounds}.`);
    console.log('Game Results:', results);  
}
