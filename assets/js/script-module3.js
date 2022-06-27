var generateBtn = document.querySelector("#generate");
//generation of button
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_+=-}{';:?><.,~`";
//initializing the four aspects of the generated password

function generatePassword() { //main function for generating the password

  var password = "";
  var passwordCharacter = "";
  var passLength = prompt("Your pass word must be between 8 and 128 characters. How many would you like your password to be?"); //first question asked to the user when they want a password to be generated
  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128) { //if else tree to make sure the selects the right amount of characters
    alert("Password must have more than 7 characters and less than 129!");
    return "";
  }
  else {
  var lowercaseChoice = confirm("Lowercase letters?"); //the next four statements are meant for user password customization
  if (lowercaseChoice) {
    passwordCharacter += lowercase;
  }

  var uppercaseChoice = confirm("Uppercase letters?"); 
  if(uppercaseChoice) {
    passwordCharacter += uppercase;
  }

  var numChoice = confirm("Numbers?");
  if(numChoice) {
    passwordCharacter += number;
  }

  var specChoice = confirm("Special Characters?");
  if(specChoice) {
    passwordCharacter += special;
  }

  for (var i = 0; i < passLength; i++) { //creation of thew final displayed password
    password = passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)];
  }
}

return password; //returned value
}


function writePassword() { //write password function to display the created password
  var passwordF = generatePassword();
  var puTextArea = document.getElementById("password").value;
  puTextArea.value = passwordF;
}

generateBtn.addEventListener("click", writePassword); //click event listener for the user
