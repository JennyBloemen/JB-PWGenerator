
//  Password Array Options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
  var usenumbers = confirm('Click OK to include numbers.');
  var usespecialChar = confirm("Click OK to include special characters.");
  var usealphaLower = confirm('Click OK to include lowercase characters.');
  var usealphaUpper = confirm('Click OK to include uppercase characters.');



  




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);