// Kevin Clouse - CSC102 Assignment 5.1
// THUNDERDOME Palindrome Checker – Step 2: Basic Form Handling

// This function runs when the user submits the form
document.getElementById("palindromeForm").onsubmit = function(event) {
    // Stop the form from refreshing the page
    event.preventDefault();

    // Get the input text from the form
    let userInput = document.getElementById("inputText").value;

    // Clean the input: remove symbols, punctuation, spaces, and convert to lowercase
    let cleanedInput = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    // Reverse the cleaned string
    let reversedInput = cleanedInput.split("").reverse().join("");

    // Reference the result display element
    let resultArea = document.getElementById("result");

    // Handle empty or invalid input
    if (cleanedInput === "") {
        resultArea.innerHTML = "🚫 You entered nothing but desert wind... Type something worthy of the Thunderdome.";
        return;
    }

     // Check if the cleaned input is the same as the reversed input
    if (cleanedInput === reversedInput) {
        // It is a palindrome
        resultArea.innerHTML = `✅ "<strong>${userInput}</strong>" is a <span style="color:gold;">PALINDROME</span> — mirrored perfection forged in the AI core of VALHALLA. <br>🛠️ Ride eternal, shiny and chrome.`;
    } else {
        // It is not a palindrome
        resultArea.innerHTML = `❌ "<strong>${userInput}</strong>" is NOT a palindrome. <br>☠️ Exile it to the CODED WASTES and let it rust under blood-sky silence.`;
    }

    // Reset the form for the next input
    document.getElementById("palindromeForm").reset();
};