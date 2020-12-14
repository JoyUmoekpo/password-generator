// Assignment Code
var generateBtn = document.querySelector("#generate");
var hello = "Hello user."
var passLength = "How long would you like your password?"

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

alert(hello)
prompt(passLength)

