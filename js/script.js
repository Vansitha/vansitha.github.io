// Type animation

var options = {
    strings: ["Student.", "Developer.", "Gamer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true, 
}

var typed = new Typed(".auto-type", options);

// add alret when resume button is clicked

var resumeButton = document.querySelector(".main-button");
resumeButton.addEventListener("click", function() { alert("Available soon!") });