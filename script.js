// Assignment Code
var number = 0;
var special = 0;
var capital = 0;
var characters = 0;

var options = ['0123456789abcdefghijklmnopqrstuvwxyz!"#$%~ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

var generateBtn = document.querySelector("#generate");

var password = document.getElementById('password');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // At least 8 characters long.
// Contains at least one number.
// Contains at least one capital letter.
// Contains at least one of the following special characters !, ", #, $, %, or ~.
// validate input
var passwordText = document.querySelector("#password");
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz!"#$%~ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var length = 8;
  var password = '';
  passwordText.value = password;

  for (var i = 0; i <= length; i++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum +1);
  }
    document.getElementById('password').value = password;
}
function generatePassword() {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();