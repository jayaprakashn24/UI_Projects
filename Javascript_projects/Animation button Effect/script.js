const btnEl = document.querySelector(".btn");
btnEl.addEventListener("mousemove", (event) => {
  const rect = btnEl.getBoundingClientRect();

  //The Element.getBoundingClientRect()
  // method returns a DOMRect object providing
  // information about the size of an element and its position relative to the viewport.

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
