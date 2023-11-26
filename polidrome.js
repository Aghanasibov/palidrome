document.querySelector('.btn').addEventListener('click', function () {
  let input = document.querySelector('.form-control').value;
  let result = isPalindrome(input);

  let resultText = document.querySelector('.mt-4');
  resultText.textContent = `This "${input}" number is ${
    result ? ' a palindrome ' : 'not a palindrome'
  }`;
  if (result) {
    resultText.style.backgroundColor = 'green';
  } else {
    resultText.style.backgroundColor = 'red';
  }
});
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

