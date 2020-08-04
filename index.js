"use strict";

var score = 0;
var person = prompt("Hey there! What is your preferred name?");

if (person !== null) {
  alert("Welcome " + person + "!");
  alert(person + ", lets play a game.");
  alert('You can only answer with a "Yes","Y" or "No","N".');
  greet();
}

function greet() {
  var firstQ = prompt("My name is Brian?");

  firstQ = firstQ.toLowerCase();
  if (firstQ === "no") {
    alert(" Wrong! Why do you hate me " + person + "...");
    quest2();
  }
  if (firstQ === "n") {
    alert("  Wrong! Why do you hate me " + person + "...");
    quest2();
  }
  if (firstQ === "yes") {
    alert("Correct! I knew you had my back " + person + ".");
    score = score + 1;
    quest2();
  }
  if (firstQ === "y") {
    alert("Correct! I knew you had my back " + person + ".");
    score = score + 1;
    quest2();
  }
}

function quest2() {
  var secondQ = prompt("Was I born in Puerto Rico?");

  secondQ = secondQ.toLowerCase();
  if (secondQ === "yes") {
    alert("Si, muy bien " + person + "!");
    score = score + 1;
    quest3();
  }
  if (secondQ === "y") {
    alert("Si, muy bien " + person + "!");
    score = score + 1;
    quest3();
  }
  if (secondQ === "no") {
    alert("Incorrecto! Quizas la proxima.");
    quest3();
  }
  if (secondQ === "n") {
    alert("Incorrecto! Quizas la proxima.");
    quest3();
  }
}

function quest3() {
  var thirdQ = prompt("Did I serve in the Army for 4 years?");

  thirdQ = thirdQ.toLowerCase();
  if (thirdQ === "yes") {
    alert("Wrong! 6 years actually " + person + "...");
    quest4();
  }
  if (thirdQ === "y") {
    alert(" Wrong! 6 years actually " + person + " ...");
    quest4();
  }
  if (thirdQ === "no") {
    alert("You are right, 6 years actually! Woot woot");
    score = score + 1;
    quest4();
  }
  if (thirdQ === "n") {
    alert("You are right, 6 years actually! Woot woot");
    score = score + 1;
    quest4();
  }
}

function quest4() {
  var fourthQ = prompt("I have 4 siblings?");
  console.log(fourthQ);

  fourthQ = fourthQ.toLowerCase();
  if (fourthQ === "no") {
    alert("Wrong! 3 brothers & 1 sister...");
    quest5();
  }
  if (fourthQ === "n") {
    alert("Wrong! 3 brothers & 1 sister...");
    quest5();
  }
  if (fourthQ === "yes") {
    alert(person + ", you love me... I can feel it.");
    score = score + 1;
    quest5();
  }
  if (fourthQ === "y") {
    alert(person + ", you love me... I can feel it.");
    score = score + 1;
    quest5();
  }
}

function quest5() {
  var fifthQ = prompt("I have a strong dislike for bananas?");

  fifthQ = fifthQ.toLowerCase();
  if (fifthQ === "no") {
    alert("Ewww, I would never come close to a banana");
    quest6();
  }
  if (fifthQ === "n") {
    alert("Ewww, I would never come close to a banana");
    quest6();
  }
  if (fifthQ === "yes") {
    alert(person + ", you know me too well.");
    score = score + 1;
    quest6();
  }
  if (fifthQ === "y") {
    alert(person + ", you know me too well.");
    score = score + 1;
    quest6();
  }
}

function quest6() {
  for (var i = 0; i < 4; i++) {
    var sixthQ = prompt(
      "Ok now " +
        person +
        ", using numbers try an guess how many different questions you have been asked? (hint: single digit number)"
    );
    var num1 = parseInt(sixthQ);
    if (num1 === 0) {
      alert("Are you serious...  try again and guess higher!");
    }
    if (num1 === 1) {
      alert("Are you even trying anymore? lets bump up that digit!");
    }
    if (num1 === 2) {
      alert(
        "One for you, uno para mi. It's an even number but not this one. Aim higher!"
      );
    }
    if (num1 === 3) {
      alert(
        "Don't give up! You were/'t close but you could be if you guessed higher!"
      );
    }
    if (num1 === 4) {
      alert(
        "Are you even trying anymore? Think of a number that is not 4. Guess higher!"
      );
    }
    if (num1 === 5) {
      alert("so so closeeee, but not quite. Mas jefe Mas... ");
    }
    if (num1 === 6) {
      alert(person + ", seems like this is your lucky day.");
      score = score + 1;
      alert("Score: " + score);
      quest7();
      return;
    }
    if (num1 === 7) {
      alert(
        person +
          ", doesn't seem like you will be hitting the lottery anytime soon. Maybe if you guess lower..."
      );
    }
    if (num1 === 8) {
      alert(
        "Maybe if you subtracted that number ? Thnik of a number smaller in value!"
      );
    }
    if (num1 === 9) {
      alert("Mucho high, guess lower Senior " + person + ".");
    }
  }
}

function quest7() {
  var places = [
    "new york",
    "california",
    "georgia",
    "florida",
    "washington",
    "colorado"
  ];

  for (var j = 0; j < 6; j++) {
    var seventhQ = prompt(
      "I would be ok with relocating to which states? You have 6 guesses to rack up them points. Lets see if you can guess all 6?"
    );
    seventhQ = seventhQ.toLowerCase();

    if (places.indexOf(seventhQ) !== -1) {
      alert("Thats right, I would not even think twice!");
      score = score + 1;
      alert(score);
    } else {
      alert("I would consdier it, but not a preferred place!");
    }
  }
  alert(
    `I would totally be ok with ${places}! Thanks for playing, you scored: ${score}!`
  );
}
