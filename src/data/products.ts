export type UseCase = "Tactical" | "Competition" | "Concealed Carry";

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: "Chassis & Rifle Kits" | "Holsters & Carry" | "Parts & Accessories";
  useCase: UseCase;
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
    useCase: "Tactical",
    image: "/images/products/tx7-mtn2-chassis.jpg",
    blurb: "Our flagship build. A folding brace chassis with forced-reset trigger for the Taurus TX22, built to turn a $300 pistol into a compact range machine.",
    featured: true,
  },
  {
    slug: "precision-rifle-22lr-body-kit",
    name: "Precision Rifle 22LR Body Kit",
    price: 179.99,
    category: "Chassis & Rifle Kits",
    useCase: "Competition",
    image: "/images/products/precision-rifle-chassis.png",
    blurb: "Full-length chassis for shooters who want a dedicated rimfire precision platform, not just a pistol brace. Built for a long rail and real glass.",
    featured: true,
  },
  {
    slug: "flux-defense-iwb-holster",
    name: "Flux Defense IWB Holster",
    price: 54.99,
    category: "Holsters & Carry",
    useCase: "Concealed Carry",
    image: "/images/products/flux-iwb-holster.webp",
    blurb: "Inside-the-waistband carry built for chassis-equipped pistols. Sourced through our Flux Defense partnership.",
  },
  {
    slug: "flux-defense-owb-holster",
    name: "Flux Defense OWB Holster",
    price: 59.99,
    category: "Holsters & Carry",
    useCase: "Concealed Carry",
    image: "/images/products/flux-owb-holster.webp",
    blurb: "Outside-the-waistband retention holster for range and competition use. Same Flux Defense build quality, open carry fit.",
  },
  {
    slug: "ar15-gas-block-vise-block",
    name: "AR-15 Gas Block Vise Block",
    price: 29.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/gas-block-vise.webp",
    blurb: "A shop tool, not a chassis part. Holds AR-pattern gas blocks steady for pinning and staking without marring the finish.",
  },
  {
    slug: "flared-magwell-extension",
    name: "Flared Magwell Extension",
    price: 23.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/flared-magwell.webp",
    blurb: "Flared magwell for faster reloads under pressure. Drops straight into the factory TX22 frame, no fitting required.",
  },
  {
    slug: "3d-printed-foregrip",
    name: "3D Printed Foregrip",
    price: 19.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/vertical-foregrip.webp",
    blurb: "Lightweight foregrip printed in-house on the same production line as our chassis systems. Multiple color options.",
  },
  {
    slug: "3d-printed-hand-grip",
    name: "3D Printed Hand Grip",
    price: 17.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/hand-grip.png",
    blurb: "Drop-in replacement grip panel for a more aggressive texture and better control under recoil.",
  },
  {
    slug: "killflash-scope-cap-set",
    name: "Killflash & Scope Cap Set",
    price: 21.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/killflash-on-rifle.jpg",
    blurb: "Anti-reflection killflash and matching flip caps for your optic. Keeps glass protected and glare down on the line.",
  },
  {
    slug: "scope-switch",
    name: "The Scope Switch",
    price: 149.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/scope-switch.jpg",
    blurb: "Quick-detach optic mount built to run a full-power scope on the rail and drop back to irons in seconds. No re-zero, no fumbling between stages.",
  },
  {
    slug: "extended-magazine",
    name: "Extended Magazine",
    price: 34.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/extended-magazine.jpg",
    blurb: "Factory-pattern extended magazine for more rounds between reloads. Drops straight into the chassis, no modification required.",
  },
  {
    slug: "pistol-stand",
    name: "The Pistol Stand",
    price: 24.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/pistol-stand.jpg",
    blurb: "Display stand that keeps your build upright and ready on the bench, at the shop, or on the table between strings.",
  },
  {
    slug: "clay-pigeon-holder",
    name: "The Clay Pigeon Holder",
    price: 14.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/clay-pigeon-holder.png",
    blurb: "Compact stand that keeps a stack of clays steady for practice throws. 3D printed in-house like everything else on this bench.",
  },
  {
    slug: "tourniquet",
    name: "The Tourniquet",
    price: 19.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/tourniquet.png",
    blurb: "Molle-mounted tourniquet pouch that keeps a trauma kit essential exactly where you can reach it under stress.",
  },
];

export const categories = ["All", "Chassis & Rifle Kits", "Holsters & Carry", "Parts & Accessories"] as const;
export const useCases = ["All", "Tactical", "Competition", "Concealed Carry"] as const;

export const useCaseImages: Record<UseCase, string> = {
  Tactical: "/images/products/handgrip-detail.jpg",
  Competition: "/images/products/antimatter-optic-rail.jpg",
  "Concealed Carry": "/images/products/chassis-in-hand.jpg",
};
