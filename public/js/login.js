// login page
const loginFormHandler = async function(event) {
    event.preventDefault();
  

    const emailEl = document.querySelector('#email-input-login');

    const passwordEl = document.querySelector('#password-input-login');
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({


        username: emailEl.value,

        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/all-events');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#login-form')

    .addEventListener('submit', loginFormHandler);
