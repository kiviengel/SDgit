const button = document.querySelector(".nextarrow");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
