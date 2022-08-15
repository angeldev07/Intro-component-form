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

function validarFormularios(input, i) {

  if (input.value.length === 0 || (i===2 && !emailValidation.test(input.value)) )  {
    inputContainers[i].classList.add("inputError");
    error[i].classList.add("showError");
    iconError[i].classList.add("showError");
    return false;
  }
  return true;
}

function quitarErrores(input,i) {
    inputContainers[i].classList.remove("inputError");
    error[i].classList.remove("showError");
    iconError[i].classList.remove("showError");
}



btnSumit.addEventListener("click", (e) => {
  
  e.preventDefault();

  inputs.forEach((input, i) => {
        goodInput = validarFormularios(input, i);
        if(goodInput) quitarErrores(input,i)
  });

  if (goodInput) {
    form.reset();
  }
});
