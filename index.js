var clickOnDrum = document.querySelectorAll(".drum")
/*clickOnDrum.addEventListener("click",handleClick);

function handleClick() {
    alert("Click on me!");
}
or  */
/* clickOnDrum.addEventListener("click",function handleClick() {
    alert("Click on me!");
}); */


// for add event listener for every drum we should use loop
var numberOfDrums = document.querySelectorAll(".drum").length;
// for press on button by mouse
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonPreesed = this.innerHTML; // <element onClick="alert(this.innerHTML);"> ... </element>s
        makeSound(buttonPreesed);
        addAnimation(buttonPreesed);

    });
}

// for type the specific key on keyboards 
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    addAnimation(event.key);
});

// function for specific content of the buttton contained
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");  /* for add audio to dom */
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
            var tom5 = new Audio("sounds/crash.mp3");
            tom5.play();
            break;

        case "k":
            var tom6 = new Audio("sounds/kick-bass.mp3");
            tom6.play();
            break;

        case "l":
            var tom7 = new Audio("sounds/snare.mp3");
            tom7.play();
            break;
    }

}

// funtion for add animation for each drum when triggered

function addAnimation(currentKeyey) {
    var activeButton = document.querySelector("." + currentKeyey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100

    );

}

// function for delay between each animation by 1 sec and remove the effect



// high order function pass function as an input(argument) for another function

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
console.log(calculator(2, 3, division));

// in chrom console after define the functions using debugger; then the calling of the function then enter and see the steps of debbuging

// object and constructor
// object used for make a variable with multible data type;
// constructor make an initial values for the object values and use this word in each variable and new world to definate it

// object
/* var houseKeeper1 = {
 name: "Sara",
 age: 29,
 works: ["bathroom","looby","corners"]
};
console.log(houseKeeper1);
console.log(houseKeeper1.name);
console.log(houseKeeper1.age);
console.log(houseKeeper1.works[0]);

var houseKeeper2 = {
    name: "Lara",
    age: 32,
    works: ["bathroom","looby","corners"]
   }; */

// or using constructor
function Workers(name, age, works) {
    this.name = name,
        this.age = age,
        this.works = works,
        this.clean = function () {
            alert("cleaning in progress...");
        }
};

var houseKeeper1 = new Workers("Angela", 23, ["rooms", "bathrooms"]);
var houseKeeper2 = new Workers("maya", 25, ["reciption", "hall"]);
console.log(houseKeeper1);
console.log(houseKeeper2);
console.log(houseKeeper1.age);
   //console.log(houseKeeper1.clean());


