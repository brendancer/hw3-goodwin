//generating prompt for length of password--establishing pwl
var password = [];

var pwl = prompt(
  "Please choose a password length between 8 and 128 characters"
);

if (pwl < 8 || pwl > 128) {
  alert(
    "You chose " +
      pwl +
      ". Please choose a number between 8-128. Refresh your screen to try again"
  );
  return;
} else {
  alert("Your Password will be " + pwl + " characters long.");
}
console.log(pwl);
//boolean confirm generation
var pwlc = confirm("would you like to include lowercase letters?");
if (pwlc == true) {
  var lower = randomLC();
  password.push(lower);

  alert("I'll include lowercase letters");
} else {
  alert("i won't use lower case letters");
}

var pwuc = confirm("would you like to include uppercase letters?");

if (pwuc == true) {
  var upper = randomUC();
  password.push(upper);
  alert("I'll include uppercase letters");
} else {
  alert("i won't use upper case letters");
}

var pwn = confirm("would you like to include numbers?");

if (pwn == true) {
  var number = randomNo();
  password.push(number);
  alert("I'll include numbers");
} else {
  alert("i won't use numbers");
}

var pwsp = confirm("would you like to include Special Characters?");

if (pwsp == true) {
  var special = randomSC();
  password.push(special);
  alert("I'll include special characters");
} else {
  alert("i won't use special characters");
}

//finding 4 random numbers that will add up to 128function get3Numbers(pwl) {
var max = 128;
var r1 = randombetween(1, max - randombetween(1, 128));
var r2 = randombetween(1, max - 2 - r1);
var r3 = randombetween(1, max - 1 - r1 - r2);
var r4 = max - r1 - r2 - r3;

function randombetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(r1, r2, r3, r4);
var typecount = password.length;

console.log(password, typecount);

//rejecting a zero choice of character type
if (password.length == 0) {
  alert("you must choose at least one type of character");
}

//Get password of the right length
for (var i = 0; i <= pwl; i++) {
  password.push([i]);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
console.log("click");
var password = "";

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
