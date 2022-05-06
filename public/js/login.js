
const loginFormHandler = async (event) => {
    event.preventDefault();
  

    const emailEl = document.querySelector("#email-input-login").value;
    const passwordEl = document.querySelector("#password-input-login").value;

  console.log(emailEl, passwordEl);
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({

        email: emailEl,
        password: passwordEl,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  console.log(response)
    if (response.ok) {
      document.location.replace('/');
      
    } else {
      alert(response);
    }
  };
  
  document
    .querySelector('#login-form')

    .addEventListener('submit', loginFormHandler);
    
