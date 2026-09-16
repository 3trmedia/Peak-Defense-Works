// Eight experimental "Add to Cart" -> "Go to Cart" transition variants, one
// wired to each product card on the homepage "New & Notable" grid so Ben can
// compare them side by side. Pick a winner, then delete the rest and hardcode
// that one variant into ProductCard.astro's click handler.

const TAN = "#BAA477";
const TAN_DARK = "#9E8B65";
const INK = "#1A1A18";

function getLabels(button: HTMLButtonElement) {
  return {
    addLabel: button.querySelector<HTMLElement>(".add-label"),
    cartLabel: button.querySelector<HTMLElement>(".cart-label"),
  };
}

function applyFilledStyle(button: HTMLButtonElement) {
  button.classList.remove("hover:bg-pdw-tan", "hover:text-pdw-ink");
  button.classList.add("bg-pdw-tan", "hover:bg-pdw-tan-dark");
}

// For buttons that start filled (as if always hovered) — settling into
// "Go to Cart" means dropping the fill so it reads as outlined instead,
// rather than changing color on top of an already-filled button.
function applyOutlineStyle(button: HTMLButtonElement) {
  button.classList.remove("bg-pdw-tan");
}

function swapLabelsInstant(button: HTMLButtonElement) {
  const { addLabel, cartLabel } = getLabels(button);
  addLabel?.classList.add("hidden");
  cartLabel?.classList.remove("hidden");
}

// 1. Fly off the button, morph into a package mid-flight, land in the cart
// icon (which bounces on impact), then a "Go to Cart" button fades in.
function flyToCart(button: HTMLButtonElement) {
  const cartIcon = document.querySelector<HTMLElement>('a[aria-label="Cart"]');
  const startRect = button.getBoundingClientRect();
  const endRect = cartIcon?.getBoundingClientRect();

  const flyer = document.createElement("div");
  flyer.style.cssText = `
    position: fixed; z-index: 9999; pointer-events: none; overflow: hidden;
    left: ${startRect.left}px; top: ${startRect.top}px;
    width: ${startRect.width}px; height: ${startRect.height}px;
    background: ${TAN}; border: 1px solid ${TAN_DARK}; border-radius: 2px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; color: ${INK}; font-weight: 700; text-transform: uppercase;
    letter-spacing: .05em; white-space: nowrap;
  `;
  flyer.textContent = "Add to Cart";
  document.body.appendChild(flyer);

  const endX = (endRect ? endRect.left + endRect.width / 2 : startRect.left) - (startRect.left + startRect.width / 2);
  const endY = (endRect ? endRect.top + endRect.height / 2 : startRect.top) - (startRect.top + startRect.height / 2);

  button.style.transition = "opacity 120ms ease";
  button.style.opacity = "0";

  const anim = flyer.animate(
    [
      { transform: "translate(0,0) scale(1)", offset: 0 },
      { transform: `translate(${endX * 0.5}px, ${endY - 70}px) scale(0.55)`, offset: 0.55 },
      { transform: `translate(${endX}px, ${endY}px) scale(0.1)`, offset: 1 },
    ],
    { duration: 750, easing: "cubic-bezier(.32,.6,.35,1)", fill: "forwards" }
  );

  setTimeout(() => {
    flyer.textContent = "";
    flyer.style.background = "transparent";
    flyer.style.border = "none";
    flyer.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${INK}" stroke-width="2" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>`;
  }, 320);

  anim.onfinish = () => {
    flyer.remove();
    if (cartIcon) {
      cartIcon.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.4)" },
          { transform: "scale(0.85)" },
          { transform: "scale(1.1)" },
          { transform: "scale(1)" },
        ],
        { duration: 480, easing: "ease-out" }
      );
    }
    setTimeout(() => {
      applyFilledStyle(button);
      swapLabelsInstant(button);
      button.style.opacity = "1";
      button.animate([{ opacity: 0, transform: "scale(0.9)" }, { opacity: 1, transform: "scale(1)" }], {
        duration: 280,
        easing: "ease-out",
      });
    }, 80);
  };
}

// 2. Line-only firework burst in brand colors, then the button morphs in place.
function fireworkBurst(button: HTMLButtonElement) {
  const rect = button.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = [TAN, TAN_DARK, INK];
  const lineCount = 14;

  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * Math.PI * 2 + Math.random() * 0.2;
    const distance = 34 + Math.random() * 22;
    const line = document.createElement("div");
    line.style.cssText = `
      position: fixed; z-index: 9999; pointer-events: none;
      left: ${cx}px; top: ${cy}px;
      width: 2px; height: ${8 + Math.random() * 8}px;
      background: ${colors[i % colors.length]};
      transform-origin: center top;
      transform: translate(-50%, -50%) rotate(${angle}rad);
    `;
    document.body.appendChild(line);
    line
      .animate(
        [
          { transform: `translate(-50%, -50%) rotate(${angle}rad) translateY(0)`, opacity: 1 },
          { transform: `translate(-50%, -50%) rotate(${angle}rad) translateY(-${distance}px)`, opacity: 0 },
        ],
        { duration: 550 + Math.random() * 150, easing: "cubic-bezier(.2,.8,.4,1)" }
      )
      .onfinish = () => line.remove();
  }

  setTimeout(() => {
    button.animate([{ transform: "scale(1)" }, { transform: "scale(0.9)" }, { transform: "scale(1)" }], {
      duration: 280,
      easing: "ease-out",
    });
    applyFilledStyle(button);
    swapLabelsInstant(button);
  }, 220);
}

// 3. Simple clean cross-fade — no border/background fight, just labels
// dissolving into each other while the color settles.
function crossFade(button: HTMLButtonElement) {
  const { addLabel, cartLabel } = getLabels(button);
  addLabel?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: "ease-in", fill: "forwards" });
  setTimeout(() => {
    applyFilledStyle(button);
    swapLabelsInstant(button);
    cartLabel?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease-out" });
  }, 220);
}

// 4. 3D card flip — button rotates on its Y axis, swaps content at the
// halfway (edge-on) point, then rotates back into view.
function flip3D(button: HTMLButtonElement) {
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
    applyOutlineStyle(button);
    swapLabelsInstant(button);
  }, 210);
  anim.onfinish = () => {
    button.style.transform = "";
  };
}

// 5. Odometer-style slide — old label slides up and out, new label slides
// up from below into place.
function slideUp(button: HTMLButtonElement) {
  const { addLabel, cartLabel } = getLabels(button);
  if (addLabel) {
    addLabel.style.display = "inline-block";
    addLabel.animate([{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(-140%)", opacity: 0 }], {
      duration: 300,
      easing: "cubic-bezier(.4,0,.2,1)",
      fill: "forwards",
    });
  }
  setTimeout(() => {
    applyFilledStyle(button);
    swapLabelsInstant(button);
    if (cartLabel) {
      cartLabel.style.display = "inline-block";
      cartLabel.animate(
        [
          { transform: "translateY(140%)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1 },
        ],
        { duration: 300, easing: "cubic-bezier(.4,0,.2,1)" }
      );
    }
  }, 260);
}

// 6. Expanding ring (outline only, no fill) that grows from the button's
// center and fades, with the button settling to solid color as it clears.
function rippleExpand(button: HTMLButtonElement) {
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2.4;
  const ring = document.createElement("div");
  ring.style.cssText = `
    position: fixed; z-index: 9999; pointer-events: none;
    left: ${rect.left + rect.width / 2}px; top: ${rect.top + rect.height / 2}px;
    width: 10px; height: 10px; margin-left: -5px; margin-top: -5px;
    border: 2px solid ${TAN}; border-radius: 9999px;
  `;
  document.body.appendChild(ring);
  ring
    .animate(
      [
        { width: "10px", height: "10px", marginLeft: "-5px", marginTop: "-5px", opacity: 1 },
        {
          width: `${size}px`,
          height: `${size}px`,
          marginLeft: `${-size / 2}px`,
          marginTop: `${-size / 2}px`,
          opacity: 0,
        },
      ],
      { duration: 500, easing: "ease-out" }
    )
    .onfinish = () => ring.remove();

  setTimeout(() => {
    applyFilledStyle(button);
    swapLabelsInstant(button);
  }, 260);
}

// 7. Shake, then a scale "pop" as it settles into the filled state.
function shakePop(button: HTMLButtonElement) {
  const shake = button.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-4px)" },
      { transform: "translateX(4px)" },
      { transform: "translateX(-3px)" },
      { transform: "translateX(0)" },
    ],
    { duration: 260, easing: "ease-in-out" }
  );
  shake.onfinish = () => {
    applyFilledStyle(button);
    swapLabelsInstant(button);
    button.animate([{ transform: "scale(1)" }, { transform: "scale(1.18)" }, { transform: "scale(1)" }], {
      duration: 260,
      easing: "cubic-bezier(.34,1.56,.64,1)",
    });
  };
}

// 8. Outline sweep — four border segments trace the perimeter in sequence,
// then the button locks into solid fill.
function outlineSweep(button: HTMLButtonElement) {
  const rect = button.getBoundingClientRect();
  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    position: fixed; z-index: 9999; pointer-events: none;
    left: ${rect.left}px; top: ${rect.top}px; width: ${rect.width}px; height: ${rect.height}px;
  `;
  document.body.appendChild(wrapper);

  const edges: Array<[string, string]> = [
    ["top:0;left:0;width:100%;height:2px;", "scaleX"],
    ["top:0;right:0;width:2px;height:100%;", "scaleY"],
    ["bottom:0;right:0;width:100%;height:2px;", "scaleX"],
    ["bottom:0;left:0;width:2px;height:100%;", "scaleY"],
  ];
  const origins = ["left", "top", "right", "bottom"];

  edges.forEach(([style, axis], i) => {
    const edge = document.createElement("div");
    edge.style.cssText = `position:absolute;background:${TAN};${style}transform:${axis}(0);transform-origin:${origins[i]};`;
    wrapper.appendChild(edge);
    edge.animate([{ transform: `${axis}(0)` }, { transform: `${axis}(1)` }], {
      duration: 160,
      delay: i * 120,
      easing: "ease-out",
      fill: "forwards",
    });
  });

  setTimeout(() => {
    wrapper.remove();
    applyFilledStyle(button);
    swapLabelsInstant(button);
  }, 4 * 120 + 160);
}

export const cartAnimations: Record<number, (button: HTMLButtonElement) => void> = {
  1: flyToCart,
  2: fireworkBurst,
  3: crossFade,
  4: flip3D,
  5: slideUp,
  6: rippleExpand,
  7: shakePop,
  8: outlineSweep,
};
