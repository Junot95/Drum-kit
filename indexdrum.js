// document.querySelector("button").addEventListener("click", clickme);

// function clickme(){
//     alert("Someone clicked me!");
// }

// OR I CAN USE AN ANONYMOUS FUNCTION LIKE THE FOLLOWING WHICH THE FUNCTION IS WITHOUT A NAME:

//THIS IS THE SOLUTION I FOUND WHILE DOING THE CHALLENGE

// var eventListener = document.querySelector("#drum"); // I added ID drum to the div containing the buttons and create a varible for eventlistener.
// eventListener.addEventListener("click",playMusic);
// function playMusic(){
//     var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//   };


// OR I CAN USE FOR LOOP LIKE THE FOLLOWING:

// DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// I have to declare the number buttons by creating a variable

// DETECTING BUTTON PRESS

var numberOfButtons = document.querySelectorAll(".drum").length; //all of the buttons that have drum class which are 7, and I used length to get the number of them.

// Create a for loop now:
for (var i =0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function playMusic() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
          
    });
}



function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();  
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
            break;
    
        default: console.log(buttonInnerHTML);
    }
    
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // This is to add a new class from Css

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
};



