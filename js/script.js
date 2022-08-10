// Type animation

var options = {
    strings: ["Student.", "Developer.", "Gamer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true, 
}

var typed = new Typed(".auto-type", options);

var option2 = {
    strings: ["Designing layout.", "Coding it up.", "Squashing bugs."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
}

var comingSoonType = new Typed(".auto-type-coming-soon", option2);

// add alret when resume button is clicked

var resumeButton = document.querySelector(".main-button");
resumeButton.addEventListener("click", function() { alert("Available soon!") });