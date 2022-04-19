// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//User character variables
function generatePassword() {
var pickSymbol=  ["~","!","@","#","$","%","^","&","*","(", ")", "_", "+", "[","]", "{", "}",":", ";", "|", "<", ">", "?"];
var pickNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pickUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pickLower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoice = [];


//User Password Criterias
//password length prompt
  var promptAmount = parseInt(prompt('How many characters would you like your password to have?  (Must be 8 to 128 characters long)'));
    while ((promptAmount ==="") || (promptAmount <=7) || (promptAmount >=129)){
      promptAmount= confirm('The password must be 8 to 128 characters long!')
    }

//password number prompt
  var promptNumber = confirm('Click ok to include numbers in your password');
    if (promptNumber){
      number =true;
    }else{
      number =false;
    }

//password lowercase prompt
  var promptLowercase =confirm('Click ok to include lowercase letters in your password');
  if (promptLowercase){
    lowercase = true;
  } else{
    lowercase = false;
  }

  var promptUppercase = confirm('Click ok to include uppercase letters in your password');
  if (promptUppercase){
    uppercase = true;
  } else{
    uppercase = false;
  }

  var promptSymbol =confirm('Click ok to include special characters/symbols in your password');
  if (promptSymbol){
    symbol = true;
  } else{
    symbol = false;
     }

 // Validate user choices, push when they click OK
  
 if (number) {
  userChoice.push(pickNumber);
};

if (uppercase) {
  userChoice.push(pickUpper)
};

if (lowercase) {
  userChoice.push(pickLower)
};

if (symbol) {
  userChoice.push(pickSymbol)
};

  //create random password from user picked criterias 
  var result = ""
  for (let i = 0; i < promptAmount; i++) {

    var list = Math.floor(userChoice.length * Math.random());  
    var charOk = userChoice[list];
    var promptOkList = Math.floor(charOk.length * Math.random());
    var pass = charOk[promptOkList];
    result += pass;
  
  };
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
