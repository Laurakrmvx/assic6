// Task 2: Changing Content

// Get the paragraph and button elements
const paragraph = document.getElementById("text");
const button = document.getElementById("changeTextButton");

// When the button is clicked, change the paragraph text
button.addEventListener("click", function () {
  paragraph.textContent = "This is the new text after clicking the button!";
});
// Task 3: Changing Styles

// Get the container and buttons
const container = document.getElementById("styleContainer");
const changeColorButton = document.getElementById("changeColorButton");
const changeFontSizeButton = document.getElementById("changeFontSizeButton");

// Change the background color when the button is clicked
changeColorButton.addEventListener("click", function () {
  container.style.backgroundColor = "lightblue";
});

// Change the font size when the button is clicked
changeFontSizeButton.addEventListener("click", function () {
  container.style.fontSize = "24px";
});

const addItem = document.getElementById("addItem");
const items = document.getElementById("items");
const removeItem = document.getElementById("removeItem");

addItem.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = "fourth";
  items.appendChild(li);
});
removeItem.addEventListener("click", function () {
  const lastItem = items.lastElementChild;
  if (lastItem) {
    items.removeChild(lastItem);
  }
});
