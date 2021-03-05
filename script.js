// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercarse = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var symbols = ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "§", "£", "™", "¡", "¢", "∞", "§", "¶", "•", "ª", "º", "–", "≠"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function myFunction() {
    var txt;
    var number = window.prompt("Please Enter # of Characters (Must be 8 or more)");
    if (!number) {
      return;
    }

    if (number >= 8 && number <=128);
    var lowercasesuser = window.prompt("Would you like to include lowercase letters? (yes/no)");
    if (!lowercasesuser) {
      return
    }

    if (lowercasesuser === "yes");
    var uppercaseuser = window.prompt("Would you like to include upercase letters? (yes/no)");
    if (!uppercaseuser) {
      return
    }

    if (uppercaseuser === "yes");
    var symbolsuser = window.prompt("Would you like to include special characters? (yes/no)")
    if (!symbolsuser) {
      return
    }


  }
