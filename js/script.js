// Type animation
var options = {
    strings: ["Student.", "Developer.", "Gamer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true, 
}

var typed = new Typed(".auto-type", options);

/* add alret when resume button is clicked
var resumeButton = document.querySelector(".main-button");
resumeButton.addEventListener("click", () => { 
    alert("Opps! Vansitha hasn't attached his resume yet. Seems like he is working on it! :)"); 
}); */

// scolling animation
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElaplsed = currentTime - startTime;
        var run = easeOut(timeElaplsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElaplsed < duration) requestAnimationFrame(animation);
    }

    function easeOut(t, b, c, d) {
        // t /= d;
        // t--;
        // return -c * (t*t*t*t - 1) + b;
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;

    };
    

    requestAnimationFrame(animation);
}

var aboutSection = document.querySelector("#about");
aboutSection.addEventListener("click", () => { smoothScroll("#about-me", 1000); });

var aboutSection = document.querySelector(".next-page-icon");
aboutSection.addEventListener("click", () => { smoothScroll("#about-me", 1000); });

var aboutSection = document.querySelector("#projects");
aboutSection.addEventListener("click", () => { smoothScroll("#project", 1000); });

var aboutSection = document.querySelector("#contact");
aboutSection.addEventListener("click", () => { smoothScroll(".contact", 1000); });