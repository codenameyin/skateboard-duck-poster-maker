"use strict"
console.log("⛑🦆🛹");

////////// variables and elements
// colours
const darkDuck = "rgb(255, 180, 72)";
const duckYellow = "rgb(255, 221, 72)";
const translucentDuckYellow = "rgb(255, 221, 72,.5)";

////////// selected elements
// nav bar
const navLinks = document.querySelectorAll("nav .nav-btn");

// poster images
const imagesToSelect = document.querySelectorAll(".imgSelector > img");
console.log(imagesToSelect);
const imagesSelection = document.querySelector(".imgSelector");
const pickedImg = document.querySelector("#pickedImg");

//poster text on image
const posterTextDisplay = document.getElementById("posterTextDisplay")

// poster text title buttons
const posterText1Selector = document.getElementById("posterText1title");
const posterText2Selector = document.getElementById("posterText2title");
const posterText3Selector = document.getElementById("posterText3title");
// select all text option titles
const posterTextSelector = document.querySelectorAll("#posterTextTitles > button");
// console.log(posterTextSelector);

// poster text input fields
const posterText1 = document.getElementById("PosterText1");
const posterText2 = document.getElementById("PosterText2");
const posterText3 = document.getElementById("PosterText3");

// select all text inputs in form for putting into array for data fetching
const form = document.querySelector("form");
const userInputs = form.elements;
console.log(userInputs);


// posterText3 character count
const poster3UserInput = document.querySelectorAll("input > #poster3Freestyle")
const characterCount = document.getElementById("characterCount");
const characterRemain = document.getElementById("characterRemain");

// variables
let promptInput = prompt("Hey, just checking, are you a human or a duck? Give us an even number (in number format 0-9) to confirm if you're a human.")
const imagesList = Array.from(imagesToSelect);
// console.log(imagesList);
const characterLimit = 100;




/////////// functions
// prompt
if (promptInput % 2 !== 0 || promptInput == null || promptInput == '' || promptInput == false || !promptInput){
  alert("I think you're a duck. One smart duck for sure 🦆")
} else {
  alert(`${promptInput} is an even number. You're, probably, human`)
}

// nav bar
navLinks.forEach(link => {
    link.addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = translucentDuckYellow;
      e.target.style.fontWeight = "bold";
    });
    
    link.addEventListener('mouseout', function(e){
      e.target.style.backgroundColor = duckYellow;
      e.target.style.fontWeight = "";
    });
});

////// poster images
// img selection
imagesToSelect.forEach(image => {
  //image selection hover effects
  image.addEventListener('mouseover', function(e){
    e.target.style.opacity = "1";
    e.target.style.border = `.2rem solid ${translucentDuckYellow}`;
    e.target.style.cursor = "pointer";
  });

  image.addEventListener("mouseout", function(e){
    e.target.style.opacity = "";
    e.target.style.border = "";
    e.target.style.cursor = "";
  });
  
  // image from selection click to display 
  image.addEventListener("click", function(e){
    pickedImg.src = e.target.src;
  });
});

///////// Text biz
// poster text tabs interaction effects
posterTextSelector.forEach(button => {
  button.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = `${darkDuck}`;
    e.target.style.cursor = "pointer";
  });

  button.addEventListener("mouseout", function(e){
    e.target.style.backgroundColor = "";
    e.target.style.cursor = "";
  });
});

// reveal/hide poster text inputs
posterText1Selector.addEventListener("click", function(){
  if (posterText1.style.display === "block") {
    posterText1.style.display ="none";
  } else {
    posterText1.style.display ="block";
    posterText2.style.display ="none";
    posterText3.style.display ="none";
  }
});

posterText2Selector.addEventListener("click", function(){
  if (posterText2.style.display === "block") {
    posterText2.style.display ="none";
  } else {
    posterText1.style.display ="none";
    posterText2.style.display ="block";
    posterText3.style.display ="none";
  }
});

posterText3Selector.addEventListener("click", function(){
  if (posterText3.style.display === "block") {
    posterText3.style.display ="none";
  } else {
    posterText1.style.display ="none";
    posterText2.style.display ="none";
    posterText3.style.display ="block";
  }
});

///character counter for posterText3
poster3Freestyle.addEventListener("input", textOutputs);

function textOutputs(e) {
  console.log(e.target.value.length);
  characterCount.textContent = e.target.value.length;
  characterRemain.textContent = characterLimit - e.target.value.length;
  posterTextDisplay.textContent = e.target.value;
  posterTextDisplay.style.color = duckYellow
  posterTextDisplay.style.fontWeight = "bolder"
  };
//