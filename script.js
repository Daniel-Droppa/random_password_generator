
// var choices = {
//   lowercase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
//    function randLower() {
//     Math.floor(Math.random());
//   },

//   uppercase:["A","B","C","D","E","F","G","h","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"],
//   nums:[1,2,3,4,5,6,7,8,9,0],
//   symbol: ["!","@","#","$","%","^","&","*","(",")","[","]","|"],
// }



// console.log(generate_random_string(12))



// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  var newpass = confirm("Do you want to create a new password?")
  console.log(newpass)
  if (newpass === true) {
    var length = prompt("Pick a password length between 8 and 128 characters.")
    if (length < 7) {
      alert("please, pick a password length between 8 and 128 characters. ")
      var length = prompt("Pick a password length between 8 and 128 characters.")
    }
    if (length > 129) {
      alert("please, pick a password length between 8 and 128 characters. ")
      var length = prompt("Pick a password length between 8 and 128 characters.")
    }
    console.log(length)
    var lowercase = confirm("Do you want lowercase letters?")
    console.log(lowercase)
    var uppercase = confirm("Do you want uppercase letters?")
    console.log(uppercase)
    var nums = confirm("Do you want numbers")
    console.log(nums)
    var symb = confirm("do you want symboles?")
    console.log(symb)
  } else {
    alert("no password for you!")
  }



  if (lowercase === true && uppercase === true) {

    for (var i = 0; i < parseInt(length); i++) {
      var randomNumber = Math.floor(Math.random() * 1);
      console.log(randomNumber)
      if (randomNumber === 0) {
        function makeidlower(length) {
          var result = '';
          var characters = 'abcdefghijklmnopqrstuvwxyz';
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
        console.log(makeidlower(length));
      }
      else {
        function makeidupper(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        }
        console.log(makeidupper(length));

      }
    }





  }









}








  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
