const signupFormHandler = async function(event) {
    event.preventDefault();
  

    const emailEl = document.querySelector('#email-input-signup');

    const passwordEl = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: emailEl.value,
        password: passwordEl.value,
        name: nameEl.value,
        address: addressEl.value,
        phoneNumber: phoneNumberEl.value,
        birthday: birthdayEl.value,

      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  