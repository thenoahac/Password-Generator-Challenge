// Assignment code here
var selectedChars = []

function generatePassword() {
  var password = ""
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperChar = ["A","C","D","E","F","G","H","I","J","K","L","M,","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var specialChar = ["!","@","#","$","%","^","&","*","=","+","?"]
  var integers = ["1","2","3","4","5","6","7","8","9","0"]
  var length = prompt("Please enter in a desired password length. \nNo less than 8 and no more than 128 Characters.");
    if (length >= 8 && length <=128){
      console.log(length)
     
      var checkLowerChar = confirm("Will your password have lower-case characters in your password?");
      var checkUpperChar = confirm("Will your password have upper-case characters in your password?");
      var checkSpecialChar = confirm("Will your password have special characters in your password?");
      var checkIntegers = confirm("Will your password have integers in your password?");


      if(checkLowerChar) {
        password = password+lowerChar
        console.log(password);
        selectedChars = selectedChars.concat(lowerChar);
      } 

      if(checkUpperChar) {
        password = password+upperChar
        console.log(password);
        selectedChars = selectedChars.concat(upperChar);
      }

      if(checkSpecialChar) {
        password = password+specialChar
        console.log(password);
        selectedChars = selectedChars.concat(specialChar);
      }

      if(checkIntegers) {
        password = password+intergers
        console.log(password);
        selectedChars = selectedChars.concat(integers);
      }

      var parameters = getParameters();

      for (i=0; i<parameters.length; i++) {
        password += 
      }
      
    } else {
      alert("That's not right! Your password must be between 8 and 128 characters long!")
    }
    
  }
    





    // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);