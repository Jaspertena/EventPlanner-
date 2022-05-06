console.log("whats up");
const signupFormHandler = async function (event) {
  event.preventDefault();
  console.log("hi");

  const nameEl = document.querySelector("#name-input-signup");
  console.log(nameEl.value);
  const emailEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  const addressEl = document.querySelector("#address-input-signup");
  const phoneNumberEl = document.querySelector("#phoneNumber-input-signup");
  const birthdayEl = document.querySelector("#birthday-input-signup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      name: nameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
      address: addressEl.value,
      phoneNumber: phoneNumberEl.value,
      birthday: birthdayEl.valuepasswordEl.value,

    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/signup");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
console.log(document.querySelector("#signup-form"));
