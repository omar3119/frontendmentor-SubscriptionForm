let formulario = document.querySelector(".formulario");
let emailError = document.querySelector(".email-error");
let pageThanks = document.querySelector(".thanks");

let btnSuccess = document.querySelector(".btn-success");

formulario.addEventListener("submit", (e) => {
  let inputEmail = document.getElementById("email");
  let emailValid = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  if (inputEmail.value.trim() === '') {
    emailError.classList.remove("hidden");
    inputEmail.style.background = "#ffffff";
    inputEmail.style.outline = "1px solid tomato"
    

  }else if(!emailValid.test(inputEmail.value)){
    emailError.classList.remove("hidden");
    inputEmail.classList.add("text-tomato");
    inputEmail.style.outline = "1px solid tomato"
    inputEmail.style.background = "#fdcaca92";
    
  } else {
    emailError.classList.add("hidden");
    pageThanks.classList.replace("hidden", "flex");
  }
  e.preventDefault();

});

btnSuccess.addEventListener("click", () => {
  setTimeout(() => {
    location.reload();
  }, 300);
});
