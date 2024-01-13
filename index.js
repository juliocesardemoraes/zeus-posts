const dialog = document.querySelector("dialog");
const showButton = document.getElementById("open__modal");
const closeButton = document.getElementById("close__modal");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
