// "Add to Cart" -> "Go to Cart" transition, used on every add-to-cart button
// site-wide. The button starts filled (as if always hovered) and flips on
// click, settling into an outlined "Go to Cart" — the fill/outline contrast
// is the signal that the state changed, not a color swap.

function getLabels(button: HTMLButtonElement) {
  return {
    addLabel: button.querySelector<HTMLElement>(".add-label"),
    cartLabel: button.querySelector<HTMLElement>(".cart-label"),
  };
}

function swapLabelsInstant(button: HTMLButtonElement) {
  const { addLabel, cartLabel } = getLabels(button);
  addLabel?.classList.add("hidden");
  cartLabel?.classList.remove("hidden");
}

export function flipToOutlineCart(button: HTMLButtonElement) {
  if (button.parentElement) button.parentElement.style.perspective = "600px";
  const anim = button.animate(
    [
      { transform: "rotateY(0deg)", offset: 0 },
      { transform: "rotateY(90deg)", offset: 0.5 },
      { transform: "rotateY(0deg)", offset: 1 },
    ],
    { duration: 420, easing: "ease-in-out" }
  );
  setTimeout(() => {
    button.classList.remove("bg-pdw-tan");
    swapLabelsInstant(button);
  }, 210);
  anim.onfinish = () => {
    button.style.transform = "";
  };
}
