const btn = document.querySelector("#btn");

const form = document.forms.form;

const validate = () => {
  let format = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  document.getElementById("error").classList.add("error-state");
  document.getElementById("error-text").classList.add("error-state");

  if (!format.test(form.email.value)) {
    form.email.addEventListener("invalid", () => {
      document.getElementById("error").classList.remove("error-state");
      document.getElementById("error-text").classList.remove("error-state");
    });
  }
};

btn.addEventListener("click", validate);
