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

  validar(input, i) {

    switch (i) {
      case 0:
        this.firtName = this.validarFormulario(input, i);
        if (this.firtName) this.activarErrores(i);
        else this.quitarErrores(i);
        break;
  
      case 1:
        this.lastName = this.validarFormulario(input, i);
        if (this.lastName) this.activarErrores(i);
        else this.quitarErrores(i);
        break;
  
      case 2:
        this.email = this.validarFormulario(input, i);
        if (this.email) this.activarErrores(i);
        else this. quitarErrores(i);
        break;
  
      case 3:
        this.password = this.validarFormulario(input, i);
        if (this.password) this.activarErrores(i);
        else this.quitarErrores(i);
        break;
    }
  },

  validarFormulario(input, i) {
    return (
      input.value.length === 0 || (i === 2 && !emailValidation.test(input.value))
    );
  },

  activarErrores(i) {
    inputContainers[i].classList.add("inputError");
    error[i].classList.add("showError");
    iconError[i].classList.add("showError");
  }, 

  quitarErrores(i) {
    inputContainers[i].classList.remove("inputError");
    error[i].classList.remove("showError");
    iconError[i].classList.remove("showError");
  }

};

btnSumit.addEventListener("click", (e) => {

  e.preventDefault();

  inputs.forEach((input, i) => {
    infoForm.validar(input, i);
  });

  if (
    !infoForm.firtName &&
    !infoForm.lastName &&
    !infoForm.email &&
    !infoForm.password
  ) {
    window.location.reload()
  }
});
