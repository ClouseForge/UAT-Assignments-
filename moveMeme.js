// CSC102 Assignment 4.1: Event Driven Programming
// Name: B. Kevin Clouse Jr.

// This JS file controls the meme image movement and button logic
// Over-commented for clarity!

window.onload = function() {
    // Get references to HTML elements
    const meme = document.getElementById("memeImage");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const btnArea = document.getElementById("btnArea");
    const footer = document.querySelector("footer");
    const msgArea = document.getElementById("msgArea");
    const mainContent = document.getElementById("mainContent");
    let moveInterval = null;

    // This function calculates the area where the meme can move (between buttons and footer)
    function getAllowedArea() {
        const btnRect = btnArea.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const containerRect = mainContent.getBoundingClientRect();
        const imgWidth = meme.offsetWidth;
        const imgHeight = meme.offsetHeight;

        // Only calculate area INSIDE mainContent!
        const minX = 0;
        const maxX = containerRect.width - imgWidth;
        const minY = btnRect.bottom - containerRect.top;
        const maxY = containerRect.height - imgHeight - (footerRect.height || 0);

        return { minX, maxX, minY, maxY };
    }

    // Move meme randomly in allowed area
    function moveMeme() {
        const area = getAllowedArea();
        if (area.maxY <= area.minY || area.maxX <= area.minX) return;
        const left = Math.random() * (area.maxX - area.minX) + area.minX;
        const top = Math.random() * (area.maxY - area.minY) + area.minY;
        meme.style.left = left + "px";
        meme.style.top = top + "px";
        meme.style.transform = "";
    }

    // Start button function: start moving meme
    window.startMove = function() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        msgArea.innerHTML = "<span style='color:green;'>Meme is bouncing! Click Stop to freeze it.</span>";
        moveMeme();
        moveInterval = setInterval(moveMeme, 1000);
    };

     // Stop button function: stop moving meme
    window.stopMove = function() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        msgArea.innerHTML = "<span style='color:blue;'>Meme stopped. Click Start to move again!</span>";
        clearInterval(moveInterval);
    };

     // Add creative glow effect (in case CSS is overridden)
    meme.style.boxShadow = "0 0 30px 10px #00e6e6";
    meme.style.borderRadius = "20px";

    // Ensure first meme position is valid after image loads
    meme.onload = function() {
        window.stopMove();
        moveMeme();
    };

 // If the image is cached and loads instantly, onload may not fire. Move it once on script run too:
    if (meme.complete) {
        window.stopMove();
        moveMeme();
    }
};