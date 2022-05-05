// login page


// const emailEl = document.querySelector('#email-input-login')
// const passwordEl = document.querySelector('#password-input-login');

// const consoleLog = function (event) {
//   event.preventDefault(); 
//   console.log(emailEl, passwordEl)
// }

// document
// .querySelector('#login-form')
// .addEventListener('login-btn', consoleLog);
const loginFormHandler = async function(event) {
    event.preventDefault();
  

    const emailEl = document.querySelector('#email-input-login');

    const passwordEl = document.querySelector('#password-input-login');

  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({

        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/main');
      
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#login-form')

    .addEventListener('submit', loginFormHandler);
    
