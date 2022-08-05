
//  Password Array Options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var options = []
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
  
  // Adds user choices to an array
  if(usenumbers){options = options.concat(numbers)}
  if(usespecialChar){options = options.concat(specialChar)}
  if(usealphaLower){options = options.concat(alphaLower)}
  if(usealphaUpper){options = options.concat(alphaUpper)}
  
  return options;
}

// I am struggling to figure this section out and will need to request help from a ta
// Function for getting a random element from an array
// function getRandom(arr) {
//   var randIndex = Math.floor(Math.random() * arr.pwlength);
//   var randElement = arr[randIndex];

//   return randElement;
// }

// Assignement Code Provided
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;}

  generateBtn.addEventListener('click', writePassword);
}