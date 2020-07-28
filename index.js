"use strict";

var score = 0;
var person = prompt("Hey there! What is your preferred name?");
//prints input value of person after person is prompted
console.log(person);

if (person !== null) {
  alert("Welcome " + person + "!");
  alert(person + ", lets play a game.");
  alert('You can only answer with a "Yes","Y" or "No","N".');
}

var firstQ = prompt("My name is Brian?");
//prints input value of firstQ after firstQ is prompted
console.log(firstQ);

firstQ = firstQ.toLowerCase();
if (firstQ === "no") {
  // console.log(" Wrong! Why do you hate me " + person + "...");
  alert(" Wrong! Why do you hate me " + person + "...");
}
if (firstQ === "n") {
  // console.log("  Wrong! Why do you hate me " + person + "...");
  alert("  Wrong! Why do you hate me " + person + "...");
}
if (firstQ === "yes") {
  // console.log("Correct! I knew you had my back " + person + ".");
  alert("Correct! I knew you had my back " + person + ".");
  score = score + 1;
}
if (firstQ === "y") {
  // console.log("Correct! I knew you had my back " + person + ".");
  alert("Correct! I knew you had my back " + person + ".");
  score = score + 1;
}

alert("Score: " + score);

var secondQ = prompt("Was I born in Puerto Rico?");
//prints input value of secondQ after secondQ is prompted
console.log(secondQ);

secondQ = secondQ.toLowerCase();
if (secondQ === "yes") {
  // console.log("Si, muy bien " + person + "!");
  alert("Si, muy bien " + person + "!");
  score = score + 1;
}
if (secondQ === "y") {
  // console.log("Si, muy bien " + person + "!");
  alert("Si, muy bien " + person + "!");
  score = score + 1;
}
if (secondQ === "no") {
  // console.log("Incorrecto! Quizas la proxima.");
  alert("Incorrecto! Quizas la proxima.");
}
if (secondQ === "n") {
  // console.log("Incorrecto! Quizas la proxima.");
  alert("Incorrecto! Quizas la proxima.");
}

alert("Score: " + score);

var thirdQ = prompt("Did I serve in the Army for 4 years?");
//prints input value of thirdQ after thirdQ is prompted
console.log(thirdQ);

thirdQ = thirdQ.toLowerCase();
if (thirdQ === "yes") {
  // console.log("Wrong! 6 years actually " + person + "...");
  alert("Wrong! 6 years actually " + person + "...");
}
if (thirdQ === "y") {
  // console.log(" Wrong! 6 years actually " + person + " ...");
  alert(" Wrong! 6 years actually " + person + " ...");
}
if (thirdQ === "no") {
  // console.log("You are right, 6 years actually! Woot woot");
  alert("You are right, 6 years actually! Woot woot");
  score = score + 1;
}
if (thirdQ === "n") {
  // console.log("You are right, 6 years actually! Woot woot");
  alert("You are right, 6 years actually! Woot woot");
  score = score + 1;
}

alert("Score: " + score);

var fourthQ = prompt("I have 4 siblings?");
//prints input value of fourthQ after fourthQ is prompted
console.log(fourthQ);

fourthQ = fourthQ.toLowerCase();
if (fourthQ === "no") {
  // console.log("Wrong! 3 brothers & 1 sister...");
  alert("Wrong! 3 brothers & 1 sister...");
}
if (fourthQ === "n") {
  // console.log("Wrong! 3 brothers & 1 sister...");
  alert("Wrong! 3 brothers & 1 sister...");
}
if (fourthQ === "yes") {
  // console.log(person + ", you love me... I can feel it.");
  alert(person + ", you love me... I can feel it.");
  score = score + 1;
}
if (fourthQ === "y") {
  // console.log(person + ", you love me... I can feel it.");
  alert(person + ", you love me... I can feel it.");
  score = score + 1;
}

alert("Score: " + score);

var fifthQ = prompt("I have a strong dislike for bananas?");
//prints input value of fifthQ after fifthQ is prompted
console.log(fifthQ);

fifthQ = fifthQ.toLowerCase();
if (fifthQ === "no") {
  // console.log("Ewww, I would never come close to a banana");
  alert("Ewww, I would never come close to a banana");
}
if (fifthQ === "n") {
  // console.log("Ewww, I would never come close to a banana");
  alert("Ewww, I would never come close to a banana");
}
if (fifthQ === "yes") {
  // console.log(person + ", you know me too well.");
  alert(person + ", you know me too well.");
  score = score + 1;
}
if (fifthQ === "y") {
  // console.log(person + ", you know me too well.");
  alert(person + ", you know me too well.");
  score = score + 1;
}

alert("Score: " + score);
