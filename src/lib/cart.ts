export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image?: string;
  qty: number;
}

const STORAGE_KEY = "pdw-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cart:updated"));
}

export function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
  const cart = getCart();
  const existing = cart.find((i) => i.slug === item.slug);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...item, qty });
  }
  saveCart(cart);
}

export function removeFromCart(slug: string) {
  saveCart(getCart().filter((i) => i.slug !== slug));
}

export function setQty(slug: string, qty: number) {
  const cart = getCart();
  const item = cart.find((i) => i.slug === slug);
  if (!item) return;
  if (qty <= 0) {
    saveCart(cart.filter((i) => i.slug !== slug));
  } else {
    item.qty = qty;
    saveCart(cart);
  }
}

export function getCartCount(): number {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

export function getCartTotal(): number {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}
