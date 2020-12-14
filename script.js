var numbs = '1234567890' 
var specs = './!@#$%^&*' 
var lowers = 'abcdefghijklmnopqrstuvwxyz' 
var uppers = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'

var password = "";
var insertUser = "";

function generatePassword() {
  password = "";
  var passLength = insertNumUser();
  var chars = insertCharUser();
}

function insertNumUser() {
  var passLength = prompt("How long would you like your password? (between 8 and 128 characters)")
}

function insertCharUser() {
  
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);