const wordToGuess = "HAPPY";
let attempts = 0;

document.getElementById("guess-button").addEventListener("click", function() {
    const guess = document.getElementById("guess-input").value.toUpperCase();

    if (guess.length !== 5) {
        alert("Please enter a 5-letter word!");
        return;
    }

    if (guess === wordToGuess) {
        document.getElementById("results").innerHTML = `You guessed the word ${wordToGuess} in ${attempts + 1} attempts!`;
    } else {
        let result = "";
        for (let i = 0; i < guess.length; i++) {
            if (wordToGuess.includes(guess[i])) {
                result += wordToGuess[i] === guess[i] ? "🟩" : "🟧";
            } else {
                result += "🟥";
            }
        }
        attempts++;
        document.getElementById("results").innerHTML += `<div>${guess} - ${result}</div>`;
    }
});
