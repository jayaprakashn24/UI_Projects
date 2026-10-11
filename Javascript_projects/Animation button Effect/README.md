

  “This JavaScript creates a mouse-following ripple effect on the button. First, I select the button using `querySelector()`. Then I add a `mousemove` event listener to detect the mouse position whenever the cursor moves over the button.

 `getBoundingClientRect()` gives me the button's position and dimensions. I subtract `rect.left` and `rect.top` from `event.clientX` and `event.clientY` to get the mouse position **relative to the button**.

 Finally, I use `style.setProperty()` to store those X and Y coordinates in CSS custom properties, `--xPos` and `--yPos`. The CSS uses these variables to position the `::before` pseudo-element, creating the ripple effect from the mouse position.”

 ### Key lines to remember

```
const btnEl = document.querySelector(".btn");
```

 Selects the button.

```
btnEl.addEventListener("mousemove", (event) => {
```

 Tracks mouse movement over the button.

```
const rect = btnEl.getBoundingClientRect();
```

 Gets the button's position and size.

```
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;
```

 Calculates the mouse position **inside the button**.

```
btnEl.style.setProperty("--xPos", x + "px");
btnEl.style.setProperty("--yPos", y + "px");
```

 Passes the coordinates from JavaScript to CSS variables.

