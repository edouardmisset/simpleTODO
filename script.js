// Defining variables (part of the document)
const addButton = document.getElementById("addButton"),
  input = document.getElementById("input"),
  ul = document.querySelector("UL"),
  li = ul.children,
  deleteButtons = document.getElementsByClassName("deleteBtn");

// Adding eventListeners
addButton.addEventListener("click", addListItemOnClick);
input.addEventListener("keypress", addListItemOnEnter);
addingEventListenersToText();
addingEventListenersToDeleteButton();

/**
 * @description checks if the input is valid on click
 * @date 07/12/2020
 * @return {*}
 */
function addListItemOnClick() {
  return input.value.length ? addItem() : 0; // ternary : if true, return the first statement else return the one after ":"
}

/**
 * @description checks if the input is valid on "Enter"
 * @date 07/12/2020
 * @param {*} event
 */
function addListItemOnEnter(event) {
  if (input.value.length !== 0 && event.key === "Enter") {
    addItem();
  }
}

/**
 * @description Creates a list item, adds it to the unordered list, clears input field and adds listeners
 * @date 07/12/2020
 */
function addItem() {
  // Create item & its button
  const listItem = document.createElement("LI"),
    deleteButton = document.createElement("button");
  // Gives the item & button content & places them
  listItem.appendChild(document.createTextNode(input.value));
  ul.appendChild(listItem);
  deleteButton.appendChild(document.createTextNode("X"));
  ul.appendChild(deleteButton);
  // Reset input
  input.value = "";
  // Add a listener
  addingEventListenersToText();
  addingEventListenersToDeleteButton();
}

/**
 * @description toggle the "done" class for selected element
 * @date 07/12/2020
 * @param {*} event
 */
function toggleItem(event) {
  return event.target.tagName === "LI"
    ? event.target.classList.toggle("done")
    : 0;
}

/**
 * @description Adds eventListeners to every list items to be able to toggle them
 * @date 07/12/2020
 */
function addingEventListenersToText() {
  for (let index = 0; index < li.length; index++) {
    li[index].addEventListener("click", toggleItem);
  }
}

function hideItem(event) {
  event.target.previousElementSibling.classList.add("hidden");
  event.target.classList.add("hidden");
}

function addingEventListenersToDeleteButton() {
  for (let index = 0; index < deleteButtons.length; index++) {
    deleteButtons[index].addEventListener("click", hideItem);
  }
}
