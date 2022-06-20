const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']',',','|',':',';','<','>','.','?','/'];

// generate two random passwords when user clicks button
// each password should be 15 characters long

let passwordOne = document.getElementById('password-one');
let passwordTwo = document.getElementById('password-two');
let generateBtn = document.getElementById('generate-btn');

function getRandomChar(num) {
  let text = '';
  for (let i = 0; i < num; i++) {
    text += characters[Math.floor(Math.random() * characters.length)];
  }
  return text;
}

generateBtn.addEventListener('click', function() {
  passwordOne.textContent = getRandomChar(15);
  passwordTwo.textContent = getRandomChar(15);
});