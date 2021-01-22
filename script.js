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
  return input.value.length ? addItem() : 0;
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
  deleteButton.classList.add("deleteBtn");
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

/**
 * @description Add a "hidden" class the the LI and the button in order to hide the (display : none)
 * @date 21/01/2021
 * @param {*} event
 */
function hideItem(event) {
  event.target.previousElementSibling.classList.add("hidden");
  event.target.classList.add("hidden");
}

/**
 * @description Adds an event listener to all the delete buttons
 * @date 21/01/2021
 */
function addingEventListenersToDeleteButton() {
  for (let index = 0; index < deleteButtons.length; index++) {
    deleteButtons[index].addEventListener("click", hideItem);
  }
}
