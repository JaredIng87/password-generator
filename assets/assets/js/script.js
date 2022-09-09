//arrays of includable characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "$", "#", "?", "&"];
var userChoices = [];
var length = '';

//function to generate randomized password
var generatePassword = function() {

  //window prompt to choose password length, with if/else statements
  var passwordLength = function() {
    userInput = window.prompt("How long would you like your password to be? (8-128)");
    if (!userInput) {
      window.alert("Please enter a value.");
      passwordLength();
    }
    else if (userInput > 128) {
      window.alert("Please Try Again.");
      passwordLength();
    }
    else if (userInput < 8) {
      window.alert("Please try again.");
      passwordLength();
    }
  }

  //window prompt to include lower case letters, with if/else statements
  var includeLow = function() {
    var userSaidYes = window.confirm("Would you like to include lowercase letters?");
    if (userSaidYes) {
      userChoices = [...userChoices, ...lowerCase];
    }
  }

  //window prompt to include upper case letters, with if/else statements
  var includeUp = function() {
    var userSaidYes = window.confirm("Would you like to include uppercase letters?");
    if (userSaidYes) {
      userChoices = [...userChoices, ...upperCase];
    }
  }

  //window prompt to include numbers, with if/else statements
  var includeNum = function() {
    var userSaidYes = window.confirm("Would you like to include numerals?");
    if (userSaidYes) {
      userChoices = [...userChoices, ...numeric];
    }
  }

  //window prompt to include special characters, with if/else statements
  var includeSpec = function() {
    var userSaidYes = window.confirm("Would you like to include special characters?");
    if(userSaidYes) {
      userChoices = [...userChoices, ...special];
    }
  }

  //call all functions
  passwordLength();
  includeLow();
  includeUp();
  includeNum();
  includeSpec();
//TODO: determine why windows call twice

//for loop with math to create random string including chosen characters at chosen length
var randomString = '';
for(var i = 0; i < userInput; i++) {
var math = Math.floor(Math.random() * userChoices.length);
var randomInteger = userChoices[math];
randomString += randomInteger;
}


//return generated string
return randomString;
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
