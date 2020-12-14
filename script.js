var numbs = '1234567890' 
var specs = './!@#$%^&*' 
var lowers = 'abcdefghijklmnopqrstuvwxyz' 
var uppers = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
var password = "";
var insertUser = "";

function generatePassword() {
  password ="";
  var insertUser = 0
  if (insertUser <8 || insertUser > 128) {
    insertUser = parseInt(prompt("How long would you like your password?"))
  }
  for (var i = 0; i < insertUser; i++) {
    password += chars.charAt(Math.floor(Math.random() * insertUser));
}



var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
}