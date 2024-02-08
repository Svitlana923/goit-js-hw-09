
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const textarea = document.querySelector("textarea");


//textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", onFormInput);

function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  
  const data = {
    email,
    message,
  };
  savetoLS(localStorageKey, data);
  }

function savetoLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key,zip)
}
  function loadfromLS(key) {
    const zip = localStorage.getItem(key);
    try {
      return JSON.parse(zip);
    } catch (error) {
      return zip;
    }
  }

function init() {
  const data = loadfromLS(localStorageKey) || {};
  form.elements.email.value = data.email || "";
  form.elements.message.value = data.message || "";
}
  init()

form.addEventListener("submit", onFormSubmit); 
  
function onFormSubmit(e) {
  e.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if ( email === "" ||  message === "") {
    alert("Будь ласка, заповніть усі поля форми.");
    return 
  };

  const data = {
    email,
    message,
  };

  console.log(data);
  localStorage.removeItem(localStorageKey);
  form.reset();
}