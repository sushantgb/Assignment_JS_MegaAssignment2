/*declaration of variable to store dice rolling intervals, 
which is 0.1 seconds or 100 miliseconds*/
var diceValue = window.setInterval(displayImage, 100);
//declaration of dice array of dice images
const dice = [];
dice[0] = "https://cdn-icons-png.flaticon.com/512/0/751.png";
dice[1] = "https://cdn-icons-png.flaticon.com/512/0/2.png";
dice[2] = "https://cdn-icons-png.flaticon.com/512/37/37561.png";
dice[3] = "https://cdn-icons-png.flaticon.com/512/0/963.png";
dice[4] = "https://cdn-icons-png.flaticon.com/512/565/565745.png";
dice[5] = "https://cdn-icons-png.flaticon.com/512/0/165.png";

//function to automatically start the dice rolling
function displayImage() {
    //randomly selecting the dice image from the array
    const randomImage = Math.floor(Math.random() * dice.length);
    //updating this randomImage in src value of the img tag in HTML code
    document.getElementById('diceShow').src = dice[randomImage];
}

//function to stop/start dice on clicking it
function stopDice() {
    //stopping dice on clicking it, checks if diceValue has value greated than -1
    if (diceValue > -1) {
        //clears interval
        clearInterval(diceValue);
        //message displayed underneath dice when it is stopped
        document.getElementById('instruction').innerHTML = "<h4>Click on the dice again to restart.</h4>";
        //stores -1 value in diceValue
        diceValue = -1;
    } else {
        //to restart dice on click
        diceValue = setInterval(displayImage, 100);
        //removing the messaged displayed on stopping the dice
        document.getElementById('instruction').innerHTML = "";
    }
}