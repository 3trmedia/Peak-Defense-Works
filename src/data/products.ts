export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: "Chassis & Rifle Kits" | "Holsters & Carry" | "Parts & Accessories";
  image?: string;
  blurb: string;
  status?: "coming-soon" | "sale";
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "tx22-mountain-chassis-frt",
    name: "TX22 Mountain Chassis + FRT",
    price: 149.99,
    category: "Chassis & Rifle Kits",
    image: "/images/products/tx7-mtn2-chassis.jpg",
    blurb: "Our flagship build. A folding brace chassis with forced-reset trigger for the Taurus TX22, built to turn a $300 pistol into a compact range machine.",
    featured: true,
  },
  {
    slug: "precision-rifle-22lr-body-kit",
    name: "Precision Rifle 22LR Body Kit",
    price: 179.99,
    category: "Chassis & Rifle Kits",
    image: "/images/products/antimatter-optic-rail.jpg",
    blurb: "Full-length chassis for shooters who want a dedicated rimfire precision platform, not just a pistol brace. Built for a long rail and real glass.",
    featured: true,
  },
  {
    slug: "flux-defense-iwb-holster",
    name: "Flux Defense IWB Holster",
    price: 54.99,
    category: "Holsters & Carry",
    blurb: "Inside-the-waistband carry built for chassis-equipped pistols. Sourced through our Flux Defense partnership.",
  },
  {
    slug: "flux-defense-owb-holster",
    name: "Flux Defense OWB Holster",
    price: 59.99,
    category: "Holsters & Carry",
    blurb: "Outside-the-waistband retention holster for range and competition use. Same Flux Defense build quality, open carry fit.",
  },
  {
    slug: "ar15-gas-block-vise-block",
    name: "AR-15 Gas Block Vise Block",
    price: 29.99,
    category: "Parts & Accessories",
    blurb: "A shop tool, not a chassis part. Holds AR-pattern gas blocks steady for pinning and staking without marring the finish.",
  },
  {
    slug: "uv-5r-button-guard",
    name: "UV-5R Button Guard",
    price: 7.0,
    compareAt: 12.0,
    category: "Parts & Accessories",
    image: "/images/products/uv5r-button-guard.jpg",
    blurb: "Machined guard that keeps radio buttons from getting bumped in a plate carrier or range bag pocket.",
    status: "sale",
  },
  {
    slug: "flared-magwell-extension",
    name: "Flared Magwell Extension",
    price: 23.99,
    category: "Parts & Accessories",
    image: "https://peakdefenseworks.com/cdn/shop/files/222A9318.jpg?v=1778576419&width=1200",
    blurb: "Flared magwell for faster reloads under pressure. Drops straight into the factory TX22 frame, no fitting required.",
  },
  {
    slug: "3d-printed-foregrip",
    name: "3D Printed Foregrip",
    price: 19.99,
    category: "Parts & Accessories",
    blurb: "Lightweight foregrip printed in-house on the same production line as our chassis systems. Multiple color options.",
  },
  {
    slug: "3d-printed-hand-grip",
    name: "3D Printed Hand Grip",
    price: 17.99,
    category: "Parts & Accessories",
    blurb: "Drop-in replacement grip panel for a more aggressive texture and better control under recoil.",
  },
  {
    slug: "killflash-scope-cap-set",
    name: "Killflash & Scope Cap Set",
    price: 21.99,
    category: "Parts & Accessories",
    blurb: "Anti-reflection killflash and matching flip caps for your optic. Keeps glass protected and glare down on the line.",
  },
  {
    slug: "cerakote-custom-chassis",
    name: "Custom Cerakote Finish",
    price: 219.99,
    category: "Chassis & Rifle Kits",
    blurb: "Send your chassis in for a custom Cerakote finish. Color and pattern options are still being finalized.",
    status: "coming-soon",
  },
  {
    slug: "tx22-trigger-upgrade",
    name: "TX22 Trigger Upgrade",
    price: 89.99,
    category: "Chassis & Rifle Kits",
    blurb: "A lighter, crisper trigger shoe to pair with the FRT. In testing now.",
    status: "coming-soon",
  },
  {
    slug: "additional-caliber-chassis",
    name: "New Platform Chassis",
    price: 0,
    category: "Chassis & Rifle Kits",
    blurb: "We're scoping chassis support for additional pistol platforms beyond the TX22. Details soon.",
    status: "coming-soon",
  },
];

export const categories = ["All", "Chassis & Rifle Kits", "Holsters & Carry", "Parts & Accessories"] as const;
