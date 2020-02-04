
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "h", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "|"];








// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  getLength()
  function getLength() {
    var length = prompt("Pick a password length between 8 and 128 characters.")
    if (length < 7 || length > 129) {
      alert("please, pick a password length between 8 and 128 characters. ")
      getLength()
    } else questions(length)

  }
  function questions(length) {
    

    console.log(length);
    var lower = confirm("Do you want lowercase letters?");
    console.log(lower);
    var upper = confirm("Do you want uppercase letters?");
    console.log(upper);
    var nums = confirm("Do you want numbers");
    console.log(nums);
    var symb = confirm("do you want symboles?");
    console.log(symb);

    if (lower || upper || nums || symb) generatePassword(length, lower, upper, nums, symb);
    else {
      questions(length)
      alert("please select atleast one option.")
    }


  }

}

function generatePassword(length, lower, upper, nums, symb) {
  var codeArea = []
  if (lower === true) {
    codeArea.push(lowerCase)
    console.log(codeArea)
  }
  if (upper === true) {
    codeArea.push(upperCase)
    console.log(codeArea)
  }
  if (nums === true) {
    codeArea.push(numbers)
    console.log(codeArea)
  }
  if (symb === true) {
    codeArea.push(symbol)
    console.log(codeArea)
  }
  var password =''
  for (let i = 0; i < length; i++) {
     var arrayChoice = Math.floor(Math.random()*codeArea.length)
     var actualCharacter = Math.floor(Math.random()*codeArea[arrayChoice].length)
    password += codeArea[arrayChoice][actualCharacter]
  }
  console.log(password)
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
