// Get form input and validate
function validateInput() {
    // Grab values and trim whitespace
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const fullName = firstName + " " + lastName;

    // Clear previous messages
    document.getElementById("message").innerText = "";
    document.getElementById("secretMessage").innerText = "";

    // Check if full name is > 20 characters
    if (fullName.length > 20) {
        document.getElementById("message").innerText = "I pitty the fool with a name longer than 20 characters!";
        return false;
    }

    // Regex for 5-digit zip code
    const zipCodeRegex = /^\d{5}$/;
    if (!zipCodeRegex.test(zip)) {
        document.getElementById("message").innerText = "Zip must be EXACTLY 5 digits or the THUNDER DOME will be unhappy!";
        return false;
    }

    // If all is valid, show secret
    document.getElementById("secretMessage").innerText = "You have entered a valid name and zip code. Welcome to the THUNDER DOME! You killed my father, prepare to die!";
    return false; // prevent actual form submission
}