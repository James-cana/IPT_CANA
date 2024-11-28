const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const sumButton = document.getElementById('sumButton');
    const resultDiv = document.getElementById('result');
    const darkModeToggle = document.getElementById('darkModeToggle');

    function calculateSum() {
      const num1 = parseFloat(num1Input.value) || 0;
      const num2 = parseFloat(num2Input.value) || 0;
      const sum = num1 + num2;
      resultDiv.textContent = `Result: ${sum}`;
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    sumButton.addEventListener('click', calculateSum);
    darkModeToggle.addEventListener('change', toggleDarkMode);