
//  Password Array Options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// variables for confirms, alerts adn functions
var usenumbers;
var usespecialChar;
var usealphaLower;
var usealphaUpper;
// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var pwlength = parseInt(
    prompt("Choose password length between 8 and 128 characters."),
    10
  );
  if(pwlength <= 7 || pwlength >= 128) {
        alert("You must enter a length between 8 and 128.");
        var pwlength = (prompt("Choose password length between 8 and 128 characters."));
        } 
  
  // Allows user to choose password options to include
  usenumbers = confirm('Click OK to include numbers.');
  usespecialChar = confirm("Click OK to include special characters.");
  usealphaLower = confirm('Click OK to include lowercase characters.');
  usealphaUpper = confirm('Click OK to include uppercase characters.');
  
  // forces user to start over if no options are chosen
  if(!usenumbers && !usespecialChar && !usealphaLower && !usealphaUpper) {
    alert("You must choose one option, please try again.");
  }
  // Stores user choices
  var passwordOptions = {pwlength, usespecialChar, usenumbers, usealphaLower, usealphaUpper,
  };
  return passwordOptions;
}

// allows random user choices
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user choices
function generatePassword() {
  var options = getPasswordOptions();
  var choices = [];
  var pwoptions = [];
  var userchoice = [];

// user choices
  if (options.usespecialChar) {
    pwoptions = pwoptions.concat(specialChar);
    userchoice.push(getRandom(specialChar));
  }
  if (options.usenumbers) {
    pwoptions = pwoptions.concat(numbers);
    userchoice.push(getRandom(numbers));
  }
  if (options.usealphaLower) {
    pwoptions = pwoptions.concat(alphaLower);
    userchoice.push(getRandom(alphaLower));
  }
  if (options.usealphaUpper) {
    pwoptions = pwoptions.concat(alphaUpper);
    userchoice.push(getRandom(alphaUpper));
  }

  // For loop to make user choices random
  for (var i = 0; i < options.pwlength; i++) {
    passwordOptions = getRandom(pwoptions);
    choices.push(passwordOptions);
  }
  
  // for loop to include user choices
  for (var i = 0; i < userchoice.pwlength; i++) {
    choices[i] = userchoice[i];
  }
  return choices.join('');
}

// Assignement Code Provided
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);