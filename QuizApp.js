let num = 0
let correct = 0
let incorrect = 0
let feedback;
$("form").submit(function (event) {
    event.preventDefault();
    console.log(num)
    feedback = true;
    if ($('input:checked').val() === questions[num].answer) {
        //alert("You got the correct answer")
        $(".correctImage").removeClass("hide")
        $(".incorrectImage").addClass("hide")
        correct++
        nextquestion()

    }
    else {
         $(".incorrectImage").removeClass("hide")
         $(".correctImage").addClass("hide")
        // alert("You got the incorrect answer, the answer is: " + questions[num].answer)
        incorrect++
        nextquestion()

    }
})

let questions = [
    {
        question: "7 * 4 = ",
        answer: "28",
        choices: [
            "16", "10", "28", "14"
        ]
    },
    {
        question: "2 * 2 = ",
        answer: "4",
        choices: [
            "6", "3", "4", "8"
        ]
    },
    {
        question: "2 * 3 = ",
        answer: "6",
        choices: [
            "6", "3", "4", "8"
        ]
    },
    {
        question: "8 * 4 = ",
        answer: "32",
        choices: [
            "2", "16", "32", "40"
        ]
    },
    {
        question: "9 * 9 = ",
        answer: "81",
        choices: [
            "20", "63", "72", "81"
        ]
    },
    {
        question: "5 * 3 = ",
        answer: "15",
        choices: [
            "6", "9", "15", "8"
        ]
    },
    /* {
         question:"7 * 0 = ",
         answer:"0",
         choices:[
             "0", "1", "4", "7"
         ]
     },
     {
         question:"5 * 4 = ",
         answer:"20",
         choices:[
             "20", "16", "30", "40"
         ]
     },
     {
         question:"6 * 7 = ",
         answer:"42",
         choices:[
             "32", "6", "35", "42"
         ]
     },
     {
         question:"10 * 6 = ",
         answer:"60",
         choices:[
             "61", "60", "10", "66"
         ]
     }*/
]
function loadQuestion() {
    $("form p").text(questions[num].question)

    let q = ``;
    questions[num].choices.forEach(function (choice) {
        q += `<label class="container"> 
        <input type="radio" name="choice" value="${choice}">
        ${choice}
        <span class="checkmark"></span>
      </label>`
        // q += `<input class = "w3-radio" type="radio" name="choice" value="${choice}">${choice}<BR>`
    })
    $("form fieldset").html(q)
}

function nextquestion() {
    console.log(questions.length, num)
    console.log($('input:checked').val())
    
    if (num != questions.length - 1) {
        
        $('button.nextQuestion').text('Next Question')
        $("#feedback").addClass("show")
        $("#feedback .correctAnswer").text(`You picked: ${($('input:checked').val())} The correct answer is: ${(questions[num].answer)}`)
        $("#feedback h2").text(`You got ${(correct / (num + 1) * 100).toFixed(2)}% correct`)
        $("#feedback .currentScore").text(`You've gotten ${(correct)} correct and ${(incorrect)} incorrect`)
        num++
        $("#questionNumber").text(`Question Number: ${(num + 1)} out of ${(questions.length)}`)
        // loadQuestion()

    }
    else {
        $("#feedback").addClass("show")
        $('.nextQuestion').text("Restart Quiz")
        console.log("GameOver")
        $("#feedback h2").text(`You got ${(correct / (num + 1) * 100).toFixed(2)}% correct`)
        $("#feedback .currentScore").text(`You got ${(correct)} correct out of ${(num + 1)}`)
        num = 0
        $("#questionNumber").text(num + 1)
        incorrect = 0
        correct = 0
        startQuiz()
        /*$('button.nextQuestion').click(()=>{
            
            $("#feedback").removeClass("show")
            loadQuestion()
        })
        */

    }
}
$('button.nextQuestion').click(() => {
    $("#feedback").removeClass("show")
    feedback = false;
    loadQuestion()
})
$("body").on("keydown", function(e) {
    if(e.keyCode === 13){
    console.log("enterkey" + feedback)
    if (feedback){
        $("button.nextQuestion").click()
    }
    }
});
function startQuiz() {

    $('.submitAnswer').show();
    $('form').show();
    $('.startQuiz').hide();
    $('.startQuiz').val("Next Question");
    $("#questionNumber").text(`Question Number: ${(num + 1)} out of ${(questions.length)}`)
   // $('button.nextQuestion').text('Next Question')
    loadQuestion()

}
$('.startQuiz').click(() => {
    startQuiz()
})

$("#feedback").removeClass("show")
$('.submitAnswer').hide();
$('form').hide();

