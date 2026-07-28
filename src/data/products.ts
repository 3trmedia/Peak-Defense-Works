export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: "Chassis" | "Accessories" | "Soft Goods";
  image: string;
  blurb: string;
  status?: "sold-out" | "coming-soon" | "sale";
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "tx7-mtn2-chassis-brace",
    name: "TX7-MTN2 Chassis & Brace",
    price: 139.99,
    category: "Chassis",
    image: "/images/products/tx7-mtn2-chassis.jpg",
    blurb: "Our signature chassis for the Taurus TX22 — the first MP7-style build for the platform. Thousands sold since launch.",
    status: "sold-out",
    featured: true,
  },
  {
    slug: "flux-raider-365-holster",
    name: "Flux Raider 365 Holster",
    price: 64.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A8760.jpg?v=1776729726&width=1200",
    blurb: "Purpose-built retention holster for chassis-mounted pistols. Molded for a clean draw with the brace attached.",
    status: "sold-out",
  },
  {
    slug: "uv-5r-button-guard",
    name: "UV-5R Button Guard",
    price: 7.0,
    compareAt: 12.0,
    category: "Accessories",
    image: "/images/products/uv5r-button-guard.jpg",
    blurb: "Machined guard that keeps mag releases from walking under recoil. Small part, big difference on the range.",
    status: "sale",
  },
  {
    slug: "pdw-magwell",
    name: "[PDW] Magwell",
    price: 23.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9318.jpg?v=1778576419&width=1200",
    blurb: "Flared magwell for faster reloads under pressure. Drops straight into the factory frame, no fitting required.",
  },
  {
    slug: "antimatter-optic-rail",
    name: "Antimatter Optic Rail Mount",
    price: 189.0,
    category: "Chassis",
    image: "/images/products/antimatter-optic-rail.jpg",
    blurb: "Full-length rail system for co-witnessed optics and LPVOs. Machined 6061 aluminum, FDE hardcoat finish.",
    featured: true,
  },
  {
    slug: "snakestaff-mag-pouch-grey",
    name: "Snakestaff Mag Pouch — Wolf Grey",
    price: 19.99,
    category: "Soft Goods",
    image: "/images/products/snakestaff-mag-pouch-grey.jpg",
    blurb: "Kydex-backed belt pouch with adjustable retention. Built for a single TX22 or 365 stick.",
  },
  {
    slug: "snakestaff-mag-pouch-4pack",
    name: "Snakestaff Mag Pouch — 4 Color Pack",
    price: 69.99,
    category: "Soft Goods",
    image: "/images/products/snakestaff-mag-pouch-quad.jpg",
    blurb: "Coyote, ranger green, wolf grey, and black — outfit the whole range bag in one order.",
  },
  {
    slug: "tx22-compact-chassis",
    name: "TX22 Compact Chassis",
    price: 124.99,
    category: "Chassis",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A8767.jpg?v=1776729726&width=1200",
    blurb: "A shorter-brace variant of the MTN2 platform for tighter concealment without losing the shooting posture.",
    status: "coming-soon",
  },
  {
    slug: "tx7-mtn2-brace-only",
    name: "TX7-MTN2 Brace Only",
    price: 79.99,
    category: "Chassis",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A8794.jpg?v=1776729726&width=1200",
    blurb: "For owners upgrading from a first-gen chassis. Drops onto the existing rail with factory hardware.",
  },
  {
    slug: "chassis-rail-cover-set",
    name: "Chassis Rail Cover Set",
    price: 14.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A8803.jpg?v=1776729726&width=1200",
    blurb: "Snap-in polymer covers for unused rail sections. Cleans up the profile and protects your grip.",
  },
  {
    slug: "extended-mag-release",
    name: "Extended Mag Release",
    price: 18.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A8813.jpg?v=1776729764&width=1200",
    blurb: "Slightly extended for gloved hands and faster reloads. Direct factory fit, no gunsmithing.",
  },
  {
    slug: "skeletonized-trigger",
    name: "Skeletonized Trigger",
    price: 89.99,
    category: "Chassis",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A8831.jpg?v=1776729764&width=1200",
    blurb: "Lightened trigger shoe with a crisper break. Fits factory TX22 trigger bar, no modification needed.",
  },
  {
    slug: "threaded-barrel-adapter",
    name: "Threaded Barrel Adapter",
    price: 34.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9319.jpg?v=1778576420&width=1200",
    blurb: "1/2x28 thread adapter for suppressor and compensator use. Precision-machined for concentric fit.",
  },
  {
    slug: "chassis-charging-handle",
    name: "Extended Charging Handle",
    price: 16.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9324.jpg?v=1778576420&width=1200",
    blurb: "Wider grip surface for faster, more positive charging with the chassis installed.",
  },
  {
    slug: "compensator-cap",
    name: "Compensator Cap",
    price: 24.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9333.jpg?v=1778577705&width=1200",
    blurb: "Thread protector and light compensator in one. Keeps muzzle threads clean between range trips.",
  },
  {
    slug: "cerakote-custom-chassis",
    name: "Cerakote Custom Chassis",
    price: 189.99,
    category: "Chassis",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9832.jpg?v=1781770769&width=1200",
    blurb: "Send in your build for a custom Cerakote finish. Color and pattern options opening up this year.",
    status: "coming-soon",
  },
  {
    slug: "sling-mount-kit",
    name: "Sling Mount Kit",
    price: 12.99,
    category: "Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9836.jpg?v=1781770770&width=1200",
    blurb: "QD sling mount hardware for the chassis rail. Front and rear points included.",
  },
  {
    slug: "field-range-bag",
    name: "Field Range Bag",
    price: 54.99,
    category: "Soft Goods",
    image: "https://fluxdefense.com/wp-content/uploads/wareandgoods.jpg",
    blurb: "Padded range bag with dedicated chassis and mag storage. Built to survive the truck bed.",
  },
  {
    slug: "trauma-kit-ifak",
    name: "Trauma Kit / IFAK",
    price: 59.99,
    category: "Soft Goods",
    image: "https://fluxdefense.com/wp-content/uploads/medical.jpg",
    blurb: "Compact individual first aid kit for the range bag or belt. Because training safety comes first.",
  },
  {
    slug: "pdw-patch-pack",
    name: "PDW Patch Pack",
    price: 9.99,
    category: "Soft Goods",
    image: "https://fluxdefense.com/wp-content/uploads/wingcatagory.jpg",
    blurb: "Velcro-backed morale patches for your range bag, plate carrier, or hat.",
  },
];

export const categories = ["All", "Chassis", "Accessories", "Soft Goods"] as const;
