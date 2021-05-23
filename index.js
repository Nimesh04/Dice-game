// Take the name input from each player
// 
// var x= document.querySelector("input.input-player-1").value;
// var y= document.querySelector("input.input-player-2").value;

// Random Number generator
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Heading changing and announcing the winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = " 🚩Player 1 Won!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Won!🚩";
}else{
  document.querySelector("h1").textContent = "Draw!";
}


// Dice image changing selector
document.querySelector(".player-1-img").setAttribute("src", "images/dice"+ randomNumber1+".png");
document.querySelector(".player-2-img").setAttribute("src", "images/dice"+randomNumber2+".png");




// Function that works when clicked
// function click(){
//
// }
