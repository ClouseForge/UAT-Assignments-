// Trigger the game when the form is submitted
document.getElementById("gameForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent page reload
    playGame(); //Call the game function
};

// Function 1: Main game logic
function playGame() {
    // Generate a random number (1-3)
    const prize = Math.floor(Math.random() * 3) + 1;
    let output = "";

    // Determine outcome
    if (prize === 1) {
        output = generateMessage("Glory Skull");
    } else if (prize === 2) {
        output = generateMessage("Rusty Can");
    } else {
        output = generateMessage("Shock Crystal");
    }

// Output result to the page
    document.getElementById("result").innerHTML = output;
}

// Function 2: Generate a message based on the prize type
function generateMessage(item) {
    if (item === "Glory Skull") {
        return "You found the GLORY SKULL! You are the Thunder Champion!";
    } else if (item === "Rusty Can") {
        return "Just a Rusty Can... Weak! Try again, warrior.";
    } else if (item === "Shock Crystal") {
        return "A SHOCK CRYSTAL! The gods of the dome favor you!";
    } else {
        return "Unknown item. Please try again.";
    }
}