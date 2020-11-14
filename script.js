// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts
function generatePassword() {
  var passwordLength = prompt("Enter the amount of characters you want for you new unique password.  It must be more than 8 but but no more than 128.");
  var numbers = confirm("Yes or no for numbers in your password?");
  var lowerCases = confirm("Yes or no if you want lowercases?");
  var upperCases = confirm("Now yes or no if you want any uppercases?");
  var special = confirm("Lastly yes or no, do you want any special characters in your password?");

  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
    ];

  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
    ];

  var upperCasedCharacters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
        ];


  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

  if (numbers === true) {
    minNumbers = functionArray.getNumbers();
    minCount++;
  }
  if (lowerCases === true) {
    minLowerCases = functionArray.getLowerCases();
    minCount++;
  }
  if (upperCases === true) {
    minUpperCases = functionArray.getUpperCases();
    minCount++;
  }
  if (special === true) {
    minSpecialCharacters = functionArray.getSpecialCharacters();
    minCount++;
  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }

  return randomPasswordGenerated;
}

// Sources that helped me were
// https://www.w3schools.com/jsref/jsref_max.asp
// https://www.youtube.com/watch?v=NzvuB4dNosI
// https://stackoverflow.com/questions/32065106/write-a-function-finding-maximum-minimum-of-array-in-javascript
// will tham

