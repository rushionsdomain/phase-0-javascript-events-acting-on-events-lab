function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  let left = dodger.style.left.replace("px", "");
  left = parseInt(left, 10);

  // Move the dodger 4px to the left
  dodger.style.left = `${left - 4}px`;
}

function moveDodgerRight() {
  // Get the current position of the dodger
  const dodger = document.getElementById("dodger");
  let left = dodger.style.left.replace("px", "");
  left = parseInt(left, 10);

  // Move the dodger 4px to the right
  dodger.style.left = `${left + 4}px`;
}
