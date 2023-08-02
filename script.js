var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '"', '#', '$', '%', '~', '?'];
var capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'v', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getOptions() {
  var length = parseInt(
    prompt('How long would you like your password? Please enter a number.'),
    10
  );
  if (Number.isNaN(length)) {
    alert('Length must be a number.');
    return null;
  }

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false

  if (length < 8) {
    alert('Your password must be at least 8 characters in length, please try again!');
    return null;
  } 
  
  if (length > 128) {
    alert('Your password cannot exceed 128 characters, please try again!');
    return null;
  }
    var hasLowercase = confirm('Click OK to add a lowercase character?');
    var hasNumber = confirm('Click OK to add a number?');
    var hasCapital = confirm('Click OK to add a Capital letter?');
    var hasSpecial = confirm('Click OK to add the following special characters !, ", #, $, %, or ~ ?');

if (
  hasLowercase === false &&
  hasNumber === false &&
  hasSpecial === false &&
  hasCapital === false 
  ) {
  alert('Must have at least one type');
  return null;
}
var options = {
  length: length,
  hasLowercase: hasLowercase,
  hasNumber: hasNumber,
  hasSpecial: hasSpecial,
  hasCapital: hasCapital,
};
return options;
}
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if(!options) return null;

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }
  if (options.hasCapital) {
    possibleCharacters = possibleCharacters.concat(capital);
    guaranteedCharacters.push(getRandom(capital));
  }
  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
