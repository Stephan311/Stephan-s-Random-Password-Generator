// Assignment Code
var generateBtn = document.querySelector("#generate");

// set variables for user actions 
var enter;
var choosenumber;
var choosesymbols;
var chooseuppercase;
var chooselowercase;

//set variables for password variables
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var symbols = ["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "§", "£", "™", "¡", "¢", "∞", "§", "¶", "•", "ª", "º", "–", "≠"];

//variable for what choices the users picks in the program, what he/she wants to include in the program
var choice;

// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);


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
        choice = alert("Atleast one of the criteria has to be picked")
      }

      else if (choosenumber && choosesymbols && chooseuppercase && chooselowercase) {
        choice = numbers.concat(symbols, uppercase, lowercase);
      }

      //conditions for 3 options picked

      else if (choosenumber && choosesymbols && chooseuppercase) {
        choice = numbers.concat(symbols, uppercase);
      }
      else if (choosenumber && choosesymbols && chooselowercase) {
        choice = numbers.concat(symbols, lowercase);
      }
      else if (choosenumber && chooseuppercase && chooselowercase) {
        choice = numbers.concat(uppercase, lowercase);
      }
      else if (choosesymbols && chooseuppercase && chooselowercase) {
        choice = symbols.concat(uppercase, lowercase);
      }

      //conditions for 2 options picked

      else if (choosenumber && choosesymbols) {
        choice = numbers.concat(symbols);
      }
      else if (choosenumber && chooseuppercase) {
        choice = numbers.concat(uppercase);
      }
      else if (choosenumber && chooselowercase) {
        choice = numbers.concat(lowercase);
      }
      else if (choosesymbols && chooseuppercase) {
        choice = symbols.concat(uppercase);
      }
      else if (choosesymbols && chooselowercase) {
        choice = symbols.concat(lowercase);
      }
      else if (chooseuppercase & chooselowercase) {
        choice = uppercase.concat(lowercase);
      }

      //conditions for 1 option picked

      else if (choosenumber) {
        choice = numbers;
      }
      else if (choosesymbols) {
        choice = symbols;
      }
      else if (chooseuppercase) {
        choice = uppercase;
      }
      else if (chooselowercase) {
        choice = lowercase;
      };

      //password variable created as an array to store the multiple other variables of symbols, letters, and numbers
      var password = [];

      //the random selection of password characters, numbers, and symbols

      for (var i = 0; i < enter; i++) {
        var selectchoices = choice[Math.floor(Math.random() * choice.length)];
        password.push(selectchoices);
      }

      //Converts and joins the password array into a string (this was researched)

      var visiblepasword = password.join("");
      writePassword(visiblepasword);
      return visiblepasword;
}

// Write password to the #password input
function writePassword(visiblepasword) {
  document.getElementById("password").value = visiblepasword;
}
