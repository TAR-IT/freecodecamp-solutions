document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) {
      alert('Please provide a phone number');
      return;
    }
  
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    if (regex.test(userInput)) {
      document.getElementById('results-div').innerText = `Valid US number: ${userInput}`;
    } else {
      document.getElementById('results-div').innerText = `Invalid US number: ${userInput}`;
    }
  });
  
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').innerText = '';
  });
  