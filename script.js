// Assignment Code
var generateBtn = document.querySelector("#generate");
var hello = "Hello user."
var passLength = "How long would you like your password?"

var passMin = 8
var passMax = 128
var num = "1234567890"
var charLow = "abcdefghijklmnopqrstuvwxyz"
var charHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChar = "!@#$%^&*()_-+<>?;:'{}[]"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

alert(hello)
Number(prompt(passLength))
