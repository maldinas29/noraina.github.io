const dynamicText = document.querySelector("p span");
const words = ["I am Siti NorAina Nabilah binti Roslan", "Internet Computing Student", "I am from Johor"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();
//script.js
function SendEmail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
 }
 emailjs.send("service_9f32mos","template_sm8khvm",params).then(function (res) { 
    alert("Your message has been sent! " + res.status);
 })
}

/*-------------------song----------*/
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
	if(mySong.paused){
		mySong.play();
		icon.src = "img/pause.png";
	}else{
		mySong.pause();
		icon.src = "img/play.png";
	}
}

/*-------------------scroll button----------*/
let scrollup = document.getElementById("scrollup");

window.onscroll = function() {scrollFunc()};

function scrollFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollup.style.display = "block";
  } else {
    scrollup.style.display = "none";
  }
}

function topFunc() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}