function apply() {
  const loadButton = document.createElement("button");
  loadButton.className = "btn";
  loadButton.style.position = "fixed";
  loadButton.style.right = "8px";
  loadButton.style.top = "68px";
  loadButton.textContent = `Load all diffs`;
  document.body.appendChild(loadButton);

  loadButton.addEventListener("click", () => {
    const buttons = [...document.getElementsByClassName("load-diff-button")];
    if (buttons.length) {
      loadButton.textContent = `Loading ${buttons.length} diff${buttons.length > 1 ? "s" : ""}`;

      for (const button of buttons) {
        button.click();
      }
    } else {
      loadButton.textContent = `No diffs to load`;
    }

    setTimeout(() => {
      loadButton.textContent = `Load all diffs`;
    }, 3000);
  });
}
apply();
