// Type animation
var options = {
    strings: ["Student.", "Developer.", "Gamer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true, 
}

var typed = new Typed(".auto-type", options);

/* MIGHT REQUIRE THIS AGAIN  
add alret when resume button is clicked
var resumeButton = document.querySelector(".main-button");
resumeButton.addEventListener("click", () => { 
    alert("Opps! Vansitha hasn't attached his resume yet. Seems like he is working on it! :)"); 
}); 
*/

// scolling animation
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

var windowSize = document.documentElement.clientWidth || window.innerWidth;
var minScreenWidth = 400;

function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElaplsed = currentTime - startTime;
        var run = easeOut(timeElaplsed, startPosition, distance, duration);
       window.scrollTo(0, run);
        if (timeElaplsed < duration) requestAnimationFrame(animation);
    }

    function easeOut(t, b, c, d) {
       t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;

    };

    function mobileAnimation(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b
    }

    requestAnimationFrame(animation);
}


var aboutSection = document.querySelector("#about");
aboutSection.addEventListener("click", () => { smoothScroll("#about-me", 1000); });

var aboutMeSection = document.querySelector(".next-page-icon");
aboutMeSection.addEventListener("click", () => { smoothScroll("#about-me", 1000); });

var projectsSection = document.querySelector("#projects");
projectsSection.addEventListener("click", () => { smoothScroll("#project", 1000); });

var contactSection = document.querySelector("#contactMe");
contactSection.addEventListener("click", () => { smoothScroll("#contact", 1000); });


// Load more functionality

var loadMoreBtn = document.querySelector(".load-more-button");
console.log("works");
var currentItems = 4;


loadMoreBtn.addEventListener("click", () => {
    var cards = [...document.querySelectorAll(".project-card")];
    for (var i = currentItems; i < currentItems + 4; i++) {
        cards[i].style.display = "inline-block";
    }
    currentItems += 4;

    if(currentItems == cards.length) {
        loadMoreBtn.style.display = "none";
    }
});

// Contact form success message

if (document.URL == "https://vansitha.github.io/#complete-status") {
    var successMessage = document.querySelector(".form-status");
    successMessage.style.visibility = "visible";
}
