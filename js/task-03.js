const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', updateGreeting);

    function updateGreeting() {
      const inputValue = nameInput.value.trim();
      const greetingName = inputValue || 'Anonymous';

      nameOutput.textContent = greetingName;
    }