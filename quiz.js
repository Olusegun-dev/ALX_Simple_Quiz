// Define the function that checks the user's answer
function checkAnswer() {
    // Step 1: Declare the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Step 3: Check if the user selected an answer
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    // Step 4: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
