//Task 5
const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseover", function () {
  colorBox.style.backgroundColor = "lightpink";
});

colorBox.addEventListener("mouseout", function () {
  colorBox.style.backgroundColor = "lightgray";
});
//Task 6
const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

inputField.addEventListener("keyup", function () {
  output.textContent = inputField.value;
});
//Task 7
const form = document.getElementById("form1");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
  if (
    nameField.value === "" ||
    emailField.value === "" ||
    passwordField.value === ""
  ) {
    event.preventDefault();
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});
