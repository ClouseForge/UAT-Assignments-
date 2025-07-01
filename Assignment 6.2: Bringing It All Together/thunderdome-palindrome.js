// Kevin Clouse - CSC102 Assignment 6.2
// THUNDERDOME Palindrome Checker – Final Form: Class + Function + Loop

// Attach form handler (no event listeners used)
document.getElementById("palindromeForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form from refreshing

    // Get user input from form
    let userInput = document.getElementById("inputText").value;

    // Create a new PalindromeChecker object and run the check
    let checker = new PalindromeChecker(userInput);
    checker.evaluate();

    // Reset the form for the next challenger
    document.getElementById("palindromeForm").reset();
};

/**
 * CLASS: PalindromeChecker
 * Handles cleaning, reversing, and evaluating palindromes
 */
class PalindromeChecker {
    /**
     * Constructor stores original input
     * @param {string} input - raw user input
     */
    constructor(input) {
        this.original = input;
        this.cleaned = this.cleanInput(input);
        this.reversed = this.reverseInput(this.cleaned);
        this.resultArea = document.getElementById("result");
    }

    /**
     * Remove punctuation, spaces, and convert to lowercase
     */
    cleanInput(str) {
        return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    }

    /**
     * Reverse a string manually using a loop
     */
    reverseInput(str) {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    /**
     * Evaluate whether the input is a palindrome and display result
     */
    evaluate() {
        // If cleaned input is empty, warn the user
        if (this.cleaned === "") {
            this.resultArea.innerHTML = "🚫 You entered nothing but desert wind... Type something worthy of the Thunderdome.";
            return;
        }

        // Check for palindrome and output result using innerHTML
        if (this.cleaned === this.reversed) {
            this.resultArea.innerHTML = `✅ "<strong>${this.original}</strong>" is a <span style="color:gold;">PALINDROME</span> — mirrored perfection forged in the AI core of VALHALLA. <br>🛠️ Ride eternal, shiny and chrome.`;
        } else {
            this.resultArea.innerHTML = `❌ "<strong>${this.original}</strong>" is NOT a palindrome. <br>☠️ Exile it to the CODED WASTES and let it rust under blood-sky silence.`;
        }
    }
}
