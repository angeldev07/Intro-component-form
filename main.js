//Inputs  container
const inputContainers = [...document.querySelectorAll(".input")];
// Inputs elements
const inputs = [...document.querySelectorAll(".input-form")];
// Button
const btnSumit = document.querySelector("#btn-submit");
// Error Messagge
const error = [...document.querySelectorAll(".error-msg")];
// Icon error
const iconError = [...document.querySelectorAll(".error")];
// Form
const form = document.getElementById("allForm");

const emailValidation =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let goodInput = true;

const infoForm = {
  firtName: true,
  lastName: true,
  email: true,
  password: true,
};

function validar(infoForm, input, i) {
  switch (i) {
    case 0:
      infoForm.firtName = validarFormulario(input, i);
      if (infoForm.firtName) activarErrores(i);
      else quitarErrores(i);
      break;

    case 1:
      infoForm.lastName = validarFormulario(input, i);
      if (infoForm.lastName) activarErrores(i);
      else quitarErrores(i);
      break;

    case 2:
      infoForm.email = validarFormulario(input, i);
      if (infoForm.email) activarErrores(i);
      else quitarErrores(i);
      break;

    case 3:
      infoForm.password = validarFormulario(input, i);
      if (infoForm.password) activarErrores(i);
      else quitarErrores(i);
      break;

    default:
      break;
  }
}

function validarFormulario(input, i) {
  return (
    input.value.length === 0 || (i === 2 && !emailValidation.test(input.value))
  );
}

function activarErrores(i) {
  inputContainers[i].classList.add("inputError");
  error[i].classList.add("showError");
  iconError[i].classList.add("showError");
}

function quitarErrores(i) {
  inputContainers[i].classList.remove("inputError");
  error[i].classList.remove("showError");
  iconError[i].classList.remove("showError");
}

btnSumit.addEventListener("click", (e) => {

  e.preventDefault();

  inputs.forEach((input, i) => {
    validar(infoForm, input, i);
    console.log(infoForm);
  });

  if (
    !infoForm['firtName'] &&
    !infoForm['lastName'] &&
    !infoForm['email'] &&
    !infoForm['password']
  ) {
    window.location.reload()
  }
});
