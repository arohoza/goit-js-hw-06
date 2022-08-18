const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    const data = { email: email.value, password: password.value };
    console.log(data);
    event.currentTarget.reset();
  } else {
    alert("Please fill in all the fields!");
  }
}
