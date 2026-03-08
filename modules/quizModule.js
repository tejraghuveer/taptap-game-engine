// quizModule.js

// This module implements a simple quiz game.

class QuizGame {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.questionIndex = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getCurrentQuestion().answer === answer) {
            this.score++;
        }
        this.questionIndex++;
    }

    hasMoreQuestions() {
        return this.questionIndex < this.questions.length;
    }

    getScore() {
        return this.score;
    }
}

// Sample questions for the quiz
const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Germany?", answer: "Berlin" }
];

// Create a quiz game instance
const quiz = new QuizGame(questions);

// To start the quiz, call quiz.getCurrentQuestion() and quiz.guess(answer) to answer a question.

export default QuizGame;