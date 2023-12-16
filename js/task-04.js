  const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = {};
      const isFormValid = true;

      this.elements.forEach(element => {
        if (element.type !== 'button') {
          const trimmedValue = element.value.trim();

          if (!trimmedValue) {
            isFormValid = false;
            alert('All form fields must be filled in');
          }

          formData[element.name] = trimmedValue;
        }
      });

      if (isFormValid) {
        console.log(formData);
        this.reset();
      }
    });
