/*
var pwl = prompt(
  "Please choose a password length between 8 and 128 characters"
);

if (pwl < 8 || pwl > 128) {
  alert("You chose " + pwl + ". Please choose a number between 8-128");
} else {
  alert("Your Password will be " + pwl + " characters long.");
}
//boolean confirm generation
var pwlc = confirm("would you like to include lowercase letters?");
if (pwlc == true) {
  alert("I'll include lowercase letters");
} else {
  alert("i won't use lower case letters");
}

var pwuc = confirm("would you like to include uppercase letters?");

if (pwuc == true) {
  alert("I'll include uppercase letters");
} else {
  alert("i won't use upper case letters");
}

var pwn = confirm("would you like to include numbers?");

if (pwn == true) {
  alert("I'll include numbers");
} else {
  alert("i won't use numbers");
}

var pwsp = confirm("would you like to include Special Characters?");

if (pwsp == true) {
  alert("I'll include special characters");
} else {
  alert("i won't use special characters");
}
//creating an array of objects
var ch = [{ pwlc }, { pwuc }, { pwn }, { pwsp }].filter(
  (item) => Object.values(item)[0]
);

//rejecting a zero choice of character type
if (ch.length == 0) {
  alert("you must choose at least one type of character");
}
*/
// Assignment Code
var generateBtn = document.querySelector("#generate");
var resultEL = document.getElementById("result");
var lengthEL = document.getElementById("length");
var LCaseEL = document.getElementById("Lcase");
var UCaseEL = document.getElementById("Ucase");
var NumberEL = document.getElementById("number");
var SpecCharEL = document.getElementById("SpecChar");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

var randomfunc = {
  lower: randomLC,
  upper: randomUC,
  number: randomNo,
  special: randomSC,
};

generateBtn.addEventListener("click", function () {
  var length = lengthEL.value;
  var hasLower= LCaseEL.true
  var hasUpper= UCaseEL.true 
  var hasNumber= NumberEL.true 
  var hasSpecChar= SpecCharEL.true 
console.log("click")
});
var password = "";




var

//Generator functions

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

