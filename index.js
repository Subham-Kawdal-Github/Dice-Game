var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
//console.log(randomNumber1);

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImagesource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource);

randomNumber2 = Math .floor(Math.random() * 6 ) + 1;

var randomImagesource2 = "images/dice" +randomNumber2+ ".png"; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImagesource2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}