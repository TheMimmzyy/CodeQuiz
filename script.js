function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctanswer = function(choices) {
    return choices === this.answer;

}



function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}

Quiz.prototype.getquestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndexl;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if (this.getquestionIndex() .correctanswer(answer)) {
        this.score++;
    }
}



function populate() {
    if(quiz.isEnded()) {
        // showscores();
   }
   else {
       // show question
       var element = document.getElementById("question");
       element.innerHTML = quiz.getquestionIndex() .text;

       var choices = quiz.getquestionIndex() .choices;
       for(var i = 0; i < choices.length; i++)
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
   }

}

var questions = [
   new Question("Which is not a coding language?", ["JavaScript", "CSS", "HTML", "Bootstrap"], "Bootstrap"),
   new Question("An array is identified as being opened and closed by __?", ["{}", "[]", "()", "<>"], "[]"),
   new Question("What is the possible amount of variables that can be stored in an array?", ["3", "5", "100", "no limit"], "no limit"),
   new Question("What language is used for styling web pages?", ["CSS", "C++", "C#", "JavaScript"], "CSS"),
   new Question("Bootstrap is a ___?", ["Language", "Library", "Framework", "All of the above"], "Framework")
];

var quiz = new Quiz(questions);

populate();