"use strict";

var score = 0;
var person = prompt("Hey there! What is your preferred name?");
//prints input value of person after person is prompted
console.log(person);

if (person !== null) {
  alert("Welcome " + person + "!");
  alert(person + ", lets play a game.");
  alert('You can only answer with a "Yes","Y" or "No","N".');
  greet();
}

function greet() {
  var firstQ = prompt("My name is Brian?");
  //prints input value of firstQ after firstQ is prompted
  console.log(firstQ);

  firstQ = firstQ.toLowerCase();
  if (firstQ === "no") {
    // console.log(" Wrong! Why do you hate me " + person + "...");
    alert(" Wrong! Why do you hate me " + person + "...");
    quest2();
  }
  if (firstQ === "n") {
    // console.log("  Wrong! Why do you hate me " + person + "...");
    alert("  Wrong! Why do you hate me " + person + "...");
    quest2();
  }
  if (firstQ === "yes") {
    // console.log("Correct! I knew you had my back " + person + ".");
    alert("Correct! I knew you had my back " + person + ".");
    score = score + 1;
    quest2();
  }
  if (firstQ === "y") {
    // console.log("Correct! I knew you had my back " + person + ".");
    alert("Correct! I knew you had my back " + person + ".");
    score = score + 1;
    quest2();
  }
}

function quest2() {
  var secondQ = prompt("Was I born in Puerto Rico?");
  //prints input value of secondQ after secondQ is prompted
  console.log(secondQ);

  secondQ = secondQ.toLowerCase();
  if (secondQ === "yes") {
    // console.log("Si, muy bien " + person + "!");
    alert("Si, muy bien " + person + "!");
    score = score + 1;
    quest3();
  }
  if (secondQ === "y") {
    // console.log("Si, muy bien " + person + "!");
    alert("Si, muy bien " + person + "!");
    score = score + 1;
    quest3();
  }
  if (secondQ === "no") {
    // console.log("Incorrecto! Quizas la proxima.");
    alert("Incorrecto! Quizas la proxima.");
    quest3();
  }
  if (secondQ === "n") {
    // console.log("Incorrecto! Quizas la proxima.");
    alert("Incorrecto! Quizas la proxima.");
    quest3();
  }
}

function quest3() {
  var thirdQ = prompt("Did I serve in the Army for 4 years?");
  //prints input value of thirdQ after thirdQ is prompted
  console.log(thirdQ);

  thirdQ = thirdQ.toLowerCase();
  if (thirdQ === "yes") {
    // console.log("Wrong! 6 years actually " + person + "...");
    alert("Wrong! 6 years actually " + person + "...");
    quest4();
  }
  if (thirdQ === "y") {
    // console.log(" Wrong! 6 years actually " + person + " ...");
    alert(" Wrong! 6 years actually " + person + " ...");
    quest4();
  }
  if (thirdQ === "no") {
    // console.log("You are right, 6 years actually! Woot woot");
    alert("You are right, 6 years actually! Woot woot");
    score = score + 1;
    quest4();
  }
  if (thirdQ === "n") {
    // console.log("You are right, 6 years actually! Woot woot");
    alert("You are right, 6 years actually! Woot woot");
    score = score + 1;
    quest4();
  }
}

function quest4() {
  var fourthQ = prompt("I have 4 siblings?");
  //prints input value of fourthQ after fourthQ is prompted
  console.log(fourthQ);

  fourthQ = fourthQ.toLowerCase();
  if (fourthQ === "no") {
    // console.log("Wrong! 3 brothers & 1 sister...");
    alert("Wrong! 3 brothers & 1 sister...");
    quest5();
  }
  if (fourthQ === "n") {
    // console.log("Wrong! 3 brothers & 1 sister...");
    alert("Wrong! 3 brothers & 1 sister...");
    quest5();
  }
  if (fourthQ === "yes") {
    // console.log(person + ", you love me... I can feel it.");
    alert(person + ", you love me... I can feel it.");
    score = score + 1;
    quest5();
  }
  if (fourthQ === "y") {
    // console.log(person + ", you love me... I can feel it.");
    alert(person + ", you love me... I can feel it.");
    score = score + 1;
    quest5();
  }
}

function quest5() {
  var fifthQ = prompt("I have a strong dislike for bananas?");
  //prints input value of fifthQ after fifthQ is prompted
  console.log(fifthQ);

  fifthQ = fifthQ.toLowerCase();
  if (fifthQ === "no") {
    // console.log("Ewww, I would never come close to a banana");
    alert("Ewww, I would never come close to a banana");
    quest6();
  }
  if (fifthQ === "n") {
    // console.log("Ewww, I would never come close to a banana");
    alert("Ewww, I would never come close to a banana");
    quest6();
  }
  if (fifthQ === "yes") {
    // console.log(person + ", you know me too well.");
    alert(person + ", you know me too well.");
    score = score + 1;
    quest6();
  }
  if (fifthQ === "y") {
    // console.log(person + ", you know me too well.");
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
    console.log(sixthQ);
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

alert("Score: " + score);

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
    console.log(seventhQ);
    alert("Thats right, I would not even think twice!");
    score + 1;
  } else {
    console.log(seventhQ);
    alert("I would consdier it, but not a preferred place!");
  }
}
alert(
  `I would totally be ok with ${places}! Thanks for playing, you scored: ${score}!`
);
