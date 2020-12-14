var chars = ['1234567890', ',./!@#$%^&*', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUWXYZ'];
var password = "";
var insertUser = "";

function generatePassword() {
  var insertUser = 0
  if (insertUser <8 || insertUser > 128) {
    insertUser = parseInt(prompt("How long would you like your password?"))
  }
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
