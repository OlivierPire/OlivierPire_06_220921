export function modalDisplay() {
  const btnContact = document.getElementById("contact");
  const form = document.querySelector(".form_contact");
  const close = document.querySelector(".close_form");
  const btnClose = document.getElementById("btn_close");
  
  const launchForm = () => {
    form.style.display = "inline-block";
  };

  function closeForm() {
    form.style.display = "none";
  }

  const validationMessage = () => {
    const formContent = document.querySelector(".formContent");
    btnClose.style.display = "inline-block";
    btnClose.setAttribute("tabindex", "1");
    formContent.style.display = "none";
    const validMessage = document.getElementById("validation_message");
    validMessage.style.display = "inline-block";
  };

  const controlName = (e) => {
    e.preventDefault();
    const first = document.getElementById("first");
    const last = document.getElementById("last");
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    const regex = new RegExp(/^[a-z,.'-]+$/i);

    const errorMessage = (selector, style) => {
      const error = document.getElementById(selector);
      error.style.display = style;
    };

    const firstControl = () => {
      if (first.value.match(regex)) {
        first.classList.remove("inputError");
        errorMessage("errorFirst", "none");
        return true;
      } else {
        first.classList.add("inputError");
        errorMessage("errorFirst", "inline-block");
      }
    };
    firstControl();

    const lastControl = () => {
      if (last.value.match(regex)) {
        last.classList.remove("inputError");
        errorMessage("errorLast", "none");
        return true;
      } else {
        last.classList.add("inputError");
        errorMessage("errorLast", "inline-block");
      }
    };
    lastControl();

    const emailControl = () => {
      if (email.value === "") {
        email.classList.add("inputError");
        errorMessage("errorEmail", "inline-block");
      } else {
        email.classList.remove("inputError");
        errorMessage("errorEmail", "none");
        return true;
      }
    };
    emailControl();

    const messageControl = () => {
      if (message.value.match(regex)) {
        message.classList.remove("inputError");
        errorMessage("errorMsg", "none");
        return true;
      } else {
        message.classList.add("inputError");
        errorMessage("errorMsg", "inline-block");
      }
    };
    messageControl();

    if (
      firstControl() &&
      lastControl() &&
      messageControl() &&
      emailControl() === true
    ) {
      validationMessage();
    }
  };

  const focusFirst = () => {
    const first = document.getElementById("first").focus()
  }

  btnContact.addEventListener("click", launchForm);
  btnContact.addEventListener("click", focusFirst);
  close.addEventListener("click", closeForm);
  btnClose.addEventListener("click", closeForm);
  form.addEventListener("submit", controlName);

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeForm()
    } 
})
}

modalDisplay();
