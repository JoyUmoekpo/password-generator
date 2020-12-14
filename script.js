var chars = ["1234567890", ",./!@#$%^&*", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUWXYZ"];
var password = "";
var insertUser = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var insertUser = 0
  if (insertUser <8 || insertUser > 128) {
    insertUser = parseInt(prompt("How long would you like your password?"))
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
