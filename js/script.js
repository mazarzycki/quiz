function submitAnswers() {

    let qTotal = 5; //total number of questions
    let score = 0; //result

    //Get answers
    let q1 = document.forms["quizForm"]["q1"].value;
    let q2 = document.forms["quizForm"]["q2"].value;
    let q3 = document.forms["quizForm"]["q3"].value;
    let q4 = document.forms["quizForm"]["q4"].value;
    let q5 = document.forms["quizForm"]["q5"].value;

    //Check if all questions have been answered
    for (i = 1; i <= qTotal; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '')
            alert(`You missed answer on question no. ${i}`);
    }
    //Correct answers 
    let correctAnswers = ["b", "b", "c", "c", "a"]

    //Check answers
    for (i = 1; i <= qTotal; i++) {
        if (eval('q' + i) == correctAnswers[i - 1])
            score++;
    }


    let results = document.getElementById("results");
    results.innerHTML = `<h3>You answered <span>${score}/${qTotal}</span> questions correctly.</h3>`;

    return false;
}