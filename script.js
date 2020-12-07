// Defining variables (part of the document)
const button = document.getElementById("Add"),
  input = document.getElementById("input"),
  ul = document.querySelector("ul"),
  li = ul.children;

// Adding eventListeners
button.addEventListener("click", addListItemOnClick);
input.addEventListener("keypress", addListItemOnEnter);
addingEventListeners();

/**
 * @description checks if the input is valid on click
 * @date 07/12/2020
 * @return {*}
 */
function addListItemOnClick() {
  return inputLength() ? addItem() : 0; // ternary : if true, return the first statement else return the one after ":"
}

/**
 * @description checks if the input is valid on "Enter"
 * @date 07/12/2020
 * @param {*} event
 */
function addListItemOnEnter(event) {
  if (inputLength() !== 0 && event.key === "Enter") {
    addItem();
  }
}

/**
 * @description returns the input length
 * @date 07/12/2020
 * @return {*}
 */
function inputLength() {
  return input.value.length;
}

/**
 * @description Creates a list item, adds it to the unordered list, clears input field and adds listeners
 * @date 07/12/2020
 */
function addItem() {
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(input.value));
  ul.appendChild(listItem);
  // append a button to delete
  input.value = "";
  addingEventListeners();
}

/**
 * @description toggle the "done" class for selected element
 * @date 07/12/2020
 * @param {*} event
 */
function toggleItem(event) {
  console.log(event.target);
  return event.target.tagName === "LI"
    ? event.target.classList.toggle("done")
    : 0;
}

/**
 * @description Adds eventListeners to every list items to be able to toggle them
 * @date 07/12/2020
 */
function addingEventListeners() {
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.addEventListener("click", toggleItem);
  }
}
