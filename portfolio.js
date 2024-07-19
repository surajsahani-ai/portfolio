// <<--AutoGreet-->
let greet = document.querySelector(".greet");
let curr_time = new Date().getHours();
let greeting = curr_time >= 5 && curr_time < 12 ? "Good Morning" : curr_time >= 12 && curr_time < 18 ? "Good Afternoon" : "Good Evening";
// console.log(greeting);
greet.innerHTML = `<h1 id="greet_txt">${greeting}</h1>`;

// <<--AutoType-->
var typed = new Typed("#typewriter2",{
    strings:["Student", "Younger Brother"],
    loop: true,
    typeSpeed: 60,
    startDelay: 100,
});

var typed = new Typed("#typewriter3",{
    strings:["Frontend Developer","Pythonista","&amp; Graphic Designer"],
    loop: true,
    typeSpeed: 60,
    startDelay: 100,
});

var typed = new Typed("#typewriter4",{
    strings:["Timeline","Progression","Journey","History"],
    shuffle: true,
    loop: true,
    typeSpeed: 60,
    startDelay: 100,
});

var typed = new Typed("#typewriter5",{
    strings:["Digital Footprint","Identity","Network","Persona","Connections","Profiles","Social Signature"],
    shuffle: true,
    loop: true,
    typeSpeed: 60,
    startDelay: 100,
});

// <<--ProfileRedirect-->
function redirect_twitter(){
    window.open('https://x.com/SurajSa43440057','_blank')
}
function redirect_linkedin(){
    window.open('https://www.linkedin.com/in/surajsahani07u/','_blank')
}
function redirect_github(){
    window.open('https://github.com/surajsahani-ai','_blank')
}
function redirect_instagram(){
    window.open('https://www.instagram.com/surajsahani.ai/','_blank')
}
function redirect_threads(){
    window.open('https://www.threads.net/@surajsahani.ai','_blank')
}