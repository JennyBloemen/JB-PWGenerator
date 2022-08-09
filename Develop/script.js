
//  Password Array Options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// variables for confirms, alerts and functions
var usenumbers;
var usespecialChar;
var usealphaLower;

var usealphaUpper;
// Function to prompt user for password options
function getPasswordOptions() {
  var options = [];
  var passwordselect = [];
  var optionsselected = 0;
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
  if(usenumbers){
    options = options.concat(numbers)
    passwordselect.push(numbers[Math.floor(Math.random()*numbers.length)])
    optionsselected++
  }
  if(usespecialChar){
    options = options.concat(specialChar)
    passwordselect.push(specialChar[Math.floor(Math.random()*specialChar.length)])
    optionsselected++   
  }
  if(usealphaLower){
    options = options.concat(alphaLower)
    passwordselect.push(alphaLower[Math.floor(Math.random()*alphaLower.length)])
    optionsselected++
  }
  if(usealphaUpper){
    options = options.concat(alphaUpper)
    passwordselect.push(alphaUpper[Math.floor(Math.random()*alphaUpper.length)])
    optionsselected++
  }
  console.log(options)
  console.log(passwordselect)
  console.log(pwlength)
  console.log(optionsselected)
  
  for (let i = 0; i < pwlength-optionsselected; i++) {
    passwordselect.push(options[Math.floor(Math.random()*options.length)])
  }
  console.log(passwordselect)
  var final = passwordselect.join('');
  console.log(final)
  
  var passwordText = document.querySelector('#password');
  passwordText.value = final;
}


// Assignement Code Provided
var generateBtn = document.querySelector('#generate');

// function writePassword() {
//   var password = generatePassword();
  

  generateBtn.addEventListener('click', getPasswordOptions);
