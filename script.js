// Assignment Code
var generateBtn = document.querySelector("#generate");
var hello = "Hello user."
var passLength = "How long would you like your password?"

var passMin = 8
var passMax = 128

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

alert(hello)
prompt(passLength)
generateBtn.addEventListener("click", writePassword);
