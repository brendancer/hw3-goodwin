//generating prompt for length of password--establishing pwl

var pwl = prompt(
  "Please choose a password length between 8 and 128 characters"
);

while (pwl < 8 || pwl > 128) {
  var pwl = prompt(
    "You chose " +
      pwl +
      ". Please choose a number between 8-128. Refresh your screen to try again"
  );
  if (pwl >= 8 && pwl <= 128)
    alert("Your Password will be " + pwl + " characters long.");
}

//this is an array I'll use to count the character types
var char = [];

//boolean confirms generation--and counting of char.types
var pwlc = confirm("would you like to include lowercase letters?");
if (pwlc == true) {
  var lower;
  char.push(lower);
  alert("I'll include lowercase letters");
} else {
  alert("i won't use lower case letters");
}

var pwuc = confirm("would you like to include uppercase letters?");

if (pwuc == true) {
  var upper;
  char.push(upper);
  alert("I'll include uppercase letters");
} else {
  alert("i won't use upper case letters");
}

var pwn = confirm("would you like to include numbers?");

if (pwn == true) {
  var number;
  char.push(number);
  alert("I'll include numbers");
} else {
  alert("i won't use numbers");
}

var pwsp = confirm("would you like to include Special Characters?");

if (pwsp == true) {
  var special;
  char.push(special);
  alert("I'll include special characters");
} else {
  alert("i won't use special characters");
}

//rejecting a zero choice of character type
if (char.length == 0) {
  alert(
    "you must choose at least one type of character. Please refresh the page to try again."
  );
}

//determining of how many of each chosen type of character will be used--extras at the end to enhance randomness
var typecount = char.length;
var numbereach = Math.ceil(pwl / typecount) + 3;

//Creating the bigarray

var bigarray = [];

if (pwlc === true) {
  for (a = 0; a < numbereach; a++) {
    bigarray.push(randomLC());
  }
}

if (pwuc === true) {
  for (a = 0; a < numbereach; a++) {
    bigarray.push(randomUC());
  }
}

if (pwn === true) {
  for (a = 0; a < numbereach; a++) {
    bigarray.push(randomNo());
  }
}

if (pwsp === true) {
  for (a = 0; a < numbereach; a++) {
    bigarray.push(randomSC());
  }
}
//shuffling the bigarray so that randomness is increased when array is sliced. I found this code at  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array . I customized it slightly for my use.

function shuffle(bigarray) {
  var currentIndex = bigarray.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = bigarray[currentIndex];
    bigarray[currentIndex] = bigarray[randomIndex];
    bigarray[randomIndex] = temporaryValue;
  }

  return bigarray;
}

shuffle(bigarray);
var almost = bigarray.slice(0, pwl);

//var almost contains the completed password, but contained in an array. I join them so that they will be a string, appropriate to display in the UI

password = almost.join("");
console.log(password);

// tried to change password into an object so that the button might work. I never got it to work, but it no longer throws an error.
var passwordobj = new Object();
var a = almost.join("");
var b = password;
passwordobj[a] = b;

//Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", passwordobj);
console.log("click");

//These are my random character generators. The idea to use the charset came from a tutorial by Traversy Media.
//https://www.youtube.com/watch?v=duNmhKgtcsI

function randomLC() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUC() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNo() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSC() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
