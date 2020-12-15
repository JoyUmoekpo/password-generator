var password = "";

function generatePassword() {
  password = "";
  var passwordLeng = insertNumUser();

  var passwordChar = insertCharUser();
  var passCharLength = passwordChar.length;

  for (var i = 0; i < passwordLeng; i++) {
    password += passwordChar.charAt(Math.floor(Math.random() * passCharLength));
  }

  return password;
};

function insertNumUser() {
  var passLength = prompt("How long would you like your password? (between 8 and 128 characters)");

  if (passLength < 8 || passLength > 128 || passLength === "") {
    alert("Password can only be between 8 and 128 characters in length.");
    return insertNumUser;
  }

  passLength = Math.floor(Number(passLength));

  return passLength;
}

function insertCharUser() {
  var passwordChar = "";

  var numbs = "1234567890";
  var specs = "./!@#$%^&*";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";


  var number = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");
  var upperCase = confirm("Do you want uppercase letters in your password?");
  var lowerCase = confirm("Do you want lowercase letters in your password?");

  if (number == true) {
    passwordChar += numbs;
  }
  if (special == true) {
    passwordChar += specs;
  }
  if (upperCase == true) {
    passwordChar += uppers;
  }
  if (lowerCase == true) {
    passwordChar += lowers;
  }

  return passwordChar;

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
