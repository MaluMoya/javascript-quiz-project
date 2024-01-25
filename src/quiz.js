class Quiz {
    // YOUR CODE HERE:
    //
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        //should return the item from the questions array at the position of currentQuestionIndex.
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        //should increment the currentQuestionIndex by 1.
        return this.currentQuestionIndex += 1;
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const randomNum = Math.floor(Math.random() * (i + 1));

            const temp = this.questions[i];
            this.questions[i] = this.questions[randomNum];
            this.questions[randomNum] = temp;

        }
    }

    checkAnswer(answer) {
        return this.correctAnswers += 1;
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true;
        }
    }
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty === 1 || difficulty === 2 || difficulty === 3) {
            const filteredquestions = this.questions.filter((eachQuestion) => {
                return difficulty === eachQuestion.difficulty
            })
            //We have to store it somewhere:
            this.questions = filteredquestions
        }
    }
    averageDifficulty(){
        const sumDifficulty = this.questions.reduce((accumulator, currentValue) => {

            return accumulator += currentValue.difficulty
            
          }, 0);
          console.log(sumDifficulty/this.questions.length);
          return Math.round(sumDifficulty/this.questions.length);
    }
    
}
