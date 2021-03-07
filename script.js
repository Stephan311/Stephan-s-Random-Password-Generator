// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var choosenumber;
var choosesymbols;
var chooseuppercase;
var chooselowercase;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var symbols = ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "§", "£", "™", "¡", "¢", "∞", "§", "¶", "•", "ª", "º", "–", "≠"];

var choice;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


    function generatePassword() {
      
      enter = parseInt(prompt("How many characters do you want this password to be? (Must be between 8 and 128)"));
      if (!enter) {
        alert("Please enter a value");
      } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Please choose a number between 8 and 128"));

      } else {
        choosenumber = confirm("Do you want to include numbers?")
        choosesymbols = confirm("Do you want to include symbols?")
        chooseuppercase = confirm("Do you want to include uppercase letters?")
        chooselowercase = confirm("Do you want to include lowercase letters?")

      };

      if (!choosenumber && !choosesymbols && !chooseuppercase && !chooselowercase) {
        choice = alert("Atleast one of the criteria must be chosen")
      }
}


