document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!userInput) {
      alert('Please input a value');
      return;
    }
    const reversedInput = userInput.split('').reverse().join('');
    if (userInput === reversedInput) {
      document.getElementById('result').innerText = `${userInput} is a palindrome`;
    } else {
      document.getElementById('result').innerText = `${userInput} is not a palindrome`;
    }
  });
  
  // Add support for test cases with spaces and punctuation
  function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('text-input').value.trim();
    if (!userInput) {
      alert('Please input a value');
      return;
    }
    if (isPalindrome(userInput)) {
      document.getElementById('result').innerText = `${userInput} is a palindrome`;
    } else {
      document.getElementById('result').innerText = `${userInput} is not a palindrome`;
    }
  });
  