class Question {
    constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }
    shuffleChoices() {
        //How to shuffle:
        for (let i = this.choices.length - 1; i > 0; i--) {
            const randomNum = Math.floor(Math.random() * (i + 1));
            
            const temp = this.choices[i];
            this.choices[i] = this.choices[randomNum];
            this.choices[randomNum] = temp;
        }


    }
}
/* 
const question1 = new Question("what color is my shirt?",["red","blue","green"], "red", 1)
const question1 = new Question("what color is my shirt?",["red","blue","green"], "red", 1)
const question1 = new Question("what color is my shirt?",["red","blue","green"], "red", 1)
const question1 = new Question("what color is my shirt?",["red","blue","green"], "red", 1)
const question1 = new Question("what color is my shirt?",["red","blue","green"], "red", 1)

const arrayOfQuestions = [question1,questio...]

const quiz = new Quiz (arrayOfQuestions) */