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
  /** Longer product-page description (falls back to blurb if omitted). */
  description?: string[];
  /** "Kit includes" style bullet list shown on the product page. */
  highlights?: string[];
  specs?: {
    platform?: string;
    material?: string;
    madeInUsa?: boolean;
  };
  disclaimer?: string;
};

// NOTE: description/highlights/specs/disclaimer below are placeholder copy
// written to fill out the product-page template — swap in real specs, kit
// contents, and materials once Sam confirms them per product.
export const products: Product[] = [
  {
    slug: "tx22-mountain-chassis-frt",
    name: "TX22 Mountain Chassis + FRT",
    price: 139.99,
    category: "Chassis & Rifle Kits",
    useCase: "Tactical",
    image: "/images/products/tx7-mtn2-chassis.jpg",
    blurb: "Our flagship build. A folding brace chassis with forced-reset trigger for the Taurus TX22, built to turn a $300 pistol into a compact range machine.",
    featured: true,
    description: [
      "Buy the Original TX22 MP7 Chassis.",
      "Transform your Taurus TX22 into an MP7 inspired PDW with the MTN2 Chassis Kit, engineered to deliver unmatched stability and modularity. Designed and built for shooters who demand more control and capability from their rimfire platform, this chassis unlocks a whole new level of fun and functionality.",
    ],
    highlights: [
      "TX-7 MTN 2 Chassis",
      "Folding Brace",
      "2 Picatinny Side Rails",
      "Angled Front Magazine Holder",
    ],
    specs: {
      platform: "TX22",
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, and these tiny lines on 3D printed holsters can accelerate wear on firearm finishes.",
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
    description: [
      "Go past pistol-brace territory. The Precision Rifle 22LR Body Kit turns your TX22 into a dedicated rimfire precision platform with a full-length forend, a real cheek weld, and enough rail to run a proper scope instead of a red dot.",
      "Built for the bench and the line — this is the setup for shooters chasing tighter groups at distance, not just a fun-gun build.",
    ],
    highlights: [
      "Full-Length Precision Body",
      "Extended Free-Float Forend",
      "Adjustable Cheek Riser",
      "20 MOA Optic Rail",
    ],
    specs: {
      platform: "TX22",
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "flux-defense-iwb-holster",
    name: "Flux Defense IWB Holster",
    price: 54.99,
    category: "Holsters & Carry",
    useCase: "Concealed Carry",
    image: "/images/products/flux-iwb-holster.webp",
    blurb: "Inside-the-waistband carry built for chassis-equipped pistols. Sourced through our Flux Defense partnership.",
    description: [
      "Molded specifically for chassis-equipped TX22 builds, this IWB holster carries what most off-the-shelf holsters can't fit. Adjustable retention and ride height let you dial in the exact draw you want.",
      "Made by Flux Defense and sold through PDW as part of our carry partnership — same fit-checked quality, no compromises for chassis clearance.",
    ],
    highlights: [
      "Adjustable Retention",
      "Sweat Guard",
      "Reinforced Belt Clip",
      "Molded for Chassis Clearance",
    ],
    specs: {
      platform: "TX22 (chassis-equipped)",
      material: "Kydex",
      madeInUsa: true,
    },
    disclaimer:
      "This holster is manufactured by Flux Defense and sold through Peak Defense Works. Fit is molded for chassis-equipped builds — confirm your exact chassis model before ordering.",
  },
  {
    slug: "flux-defense-owb-holster",
    name: "Flux Defense OWB Holster",
    price: 59.99,
    category: "Holsters & Carry",
    useCase: "Concealed Carry",
    image: "/images/products/flux-owb-holster.webp",
    blurb: "Outside-the-waistband retention holster for range and competition use. Same Flux Defense build quality, open carry fit.",
    description: [
      "Built for the range and the timer, not the waistband. This OWB holster gives chassis-equipped TX22 builds a fast, secure draw with adjustable retention that holds up through a full day of runs.",
      "Made by Flux Defense and sold through PDW as part of our carry partnership.",
    ],
    highlights: [
      "Adjustable Retention",
      "Open-Bottom Muzzle",
      "Paddle & Belt Loop Compatible",
      "Molded for Chassis Clearance",
    ],
    specs: {
      platform: "TX22 (chassis-equipped)",
      material: "Kydex",
      madeInUsa: true,
    },
    disclaimer:
      "This holster is manufactured by Flux Defense and sold through Peak Defense Works. Fit is molded for chassis-equipped builds — confirm your exact chassis model before ordering.",
  },
  {
    slug: "ar15-gas-block-vise-block",
    name: "AR-15 Gas Block Vise Block",
    price: 29.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/gas-block-vise.webp",
    blurb: "A shop tool, not a chassis part. Holds AR-pattern gas blocks steady for pinning and staking without marring the finish.",
    description: [
      "Not everything we build is for the TX22. This vise block seats into standard vise jaws and cradles an AR-pattern gas block so it stays put while you pin and stake, no marred finish, no slipping mid-punch.",
      "A shop tool built the same way we build everything else — solved a problem on our own bench first.",
    ],
    highlights: [
      "Fits Standard AR-15 Gas Blocks",
      "Drops Into Standard Vise Jaws",
      "Prevents Marring During Pinning",
      "Non-Slip Textured Grip",
    ],
    specs: {
      platform: "AR-15",
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "flared-magwell-extension",
    name: "Flared Magwell Extension",
    price: 23.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/flared-magwell.webp",
    blurb: "Flared magwell for faster reloads under pressure. Drops straight into the factory TX22 frame, no fitting required.",
    description: [
      "Widens the mag well opening so a reload under a shot clock actually lands on the first try. Drops straight into the factory TX22 frame with no fitting, filing, or permanent modification.",
      "Built for competition shooters who count reload time in tenths of a second.",
    ],
    highlights: [
      "Drop-In Fit, No Modification",
      "Widened Insertion Opening",
      "Compatible With Factory Magazines",
      "Textured Grip Edge",
    ],
    specs: {
      platform: "TX22",
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "3d-printed-foregrip",
    name: "3D Printed Foregrip",
    price: 19.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/vertical-foregrip.webp",
    blurb: "Lightweight foregrip printed in-house on the same production line as our chassis systems. Multiple color options.",
    description: [
      "A lightweight vertical foregrip that clamps onto any Picatinny rail section for a more stable off-hand grip. Printed in-house on the same line as our chassis systems.",
      "Available in multiple colors to match or contrast your build.",
    ],
    highlights: [
      "Picatinny Rail Mount",
      "Lightweight Design",
      "Textured Grip Surface",
      "Multiple Color Options",
    ],
    specs: {
      platform: "TX22",
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "3d-printed-hand-grip",
    name: "3D Printed Hand Grip",
    price: 17.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/hand-grip.png",
    blurb: "Drop-in replacement grip panel for a more aggressive texture and better control under recoil.",
    description: [
      "Swap the factory grip panel for a more aggressive texture that stays put under recoil, even with sweaty hands. Drop-in fit, no permanent modification to your frame.",
      "Printed in-house on the same line as our chassis systems.",
    ],
    highlights: [
      "Drop-In Replacement Panel",
      "Aggressive Texture Pattern",
      "No Permanent Modification",
      "Multiple Color Options",
    ],
    specs: {
      platform: "TX22",
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "killflash-scope-cap-set",
    name: "Killflash & Scope Cap Set",
    price: 21.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/killflash-on-rifle.jpg",
    blurb: "Anti-reflection killflash and matching flip caps for your optic. Keeps glass protected and glare down on the line.",
    description: [
      "A honeycomb killflash cuts down glare and lens reflection that can give away your position, paired with matching flip-up caps that keep glass protected between strings.",
      "Snug press-fit sizing for common optic tube diameters — no tools required.",
    ],
    highlights: [
      "Honeycomb Anti-Reflection Killflash",
      "Matching Flip-Up Lens Caps",
      "Snug Press-Fit Sizing",
      "No Tools Required",
    ],
    specs: {
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "scope-switch",
    name: "The Scope Switch",
    price: 149.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/scope-switch.jpg",
    blurb: "Quick-detach optic mount built to run a full-power scope on the rail and drop back to irons in seconds. No re-zero, no fumbling between stages.",
    description: [
      "Run a full-power scope for the precision stages and pull it for a speed stage without losing zero. The quick-detach lever returns to the exact same point of impact every time it's remounted.",
      "Built for competitors who shoot both irons and glass in the same match.",
    ],
    highlights: [
      "Quick-Detach Lever Mount",
      "Returns to Zero on Remount",
      "Fits Standard Picatinny Rail",
      "Rated for Rimfire Recoil",
    ],
    specs: {
      platform: "TX22",
      material: "6061 Aluminum with PETG-CF hardware",
      madeInUsa: true,
    },
  },
  {
    slug: "extended-magazine",
    name: "Extended Magazine",
    price: 34.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/extended-magazine.jpg",
    blurb: "Factory-pattern extended magazine for more rounds between reloads. Drops straight into the chassis, no modification required.",
    description: [
      "More rounds between reloads, same reliable factory-pattern feeding. Drops straight into the chassis and the factory mag catch, no modification required.",
      "Built for stages and range sessions where reload count matters as much as accuracy.",
    ],
    highlights: [
      "Extended Round Capacity",
      "Factory-Pattern Feeding",
      "Drop-Free From Chassis",
      "Compatible With Factory Mag Catch",
    ],
    specs: {
      platform: "TX22",
      material: "Polymer body, steel spring and follower",
    },
  },
  {
    slug: "pistol-stand",
    name: "The Pistol Stand",
    price: 24.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/pistol-stand.webp",
    blurb: "Display stand that keeps your build upright and ready on the bench, at the shop, or on the table between strings.",
    description: [
      "A low-profile desk and bench mount that keeps your build upright and ready to grab, whether it's sitting on the workbench, the range table, or on display at home.",
      "Weighted, non-slip base holds steady even with a full-size build mounted.",
    ],
    highlights: [
      "Fits Most Handguns and Chassis Builds",
      "Non-Slip Weighted Base",
      "Desk or Bench Mount",
      "Compact Footprint",
    ],
    specs: {
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "clay-pigeon-holder",
    name: "The Clay Pigeon Holder",
    price: 14.99,
    category: "Parts & Accessories",
    useCase: "Competition",
    image: "/images/products/clay-pigeon-holder.png",
    blurb: "Compact stand that keeps a stack of clays steady for practice throws. 3D printed in-house like everything else on this bench.",
    description: [
      "Keeps a stack of standard clay pigeons steady and ready for hand throws or a trap setup, no more chasing rolling clays across the bench.",
      "3D printed in-house like everything else on this bench.",
    ],
    highlights: [
      "Holds Standard Clay Pigeons",
      "Compact, Stackable Footprint",
      "Weighted Base",
    ],
    specs: {
      material: "Carbon Fiber Reinforced Polymer (PETG-CF)",
      madeInUsa: true,
    },
    disclaimer:
      "This is a 3D printed product, made with the best machines and materials, while keeping costs to you the customer as low as possible. 3D printed products often show layer lines, which is normal and does not affect function.",
  },
  {
    slug: "tourniquet",
    name: "The Tourniquet",
    price: 19.99,
    category: "Parts & Accessories",
    useCase: "Tactical",
    image: "/images/products/tourniquet.png",
    blurb: "Molle-mounted tourniquet pouch that keeps a trauma kit essential exactly where you can reach it under stress.",
    description: [
      "A MOLLE-mounted pouch built to hold a standard CAT-style tourniquet exactly where you can reach it without looking, because that's not the moment to be searching a bag.",
      "Quick-pull design gets the tourniquet out fast, one-handed if it has to be.",
    ],
    highlights: [
      "MOLLE-Compatible Mount",
      "Fits Standard CAT-Style Tourniquets",
      "Quick-Pull Access Tab",
      "Low-Profile Design",
    ],
    specs: {
      material: "1000D nylon webbing",
      madeInUsa: true,
    },
  },
];

export const categories = ["All", "Chassis & Rifle Kits", "Holsters & Carry", "Parts & Accessories"] as const;
export const useCases = ["All", "Tactical", "Competition", "Concealed Carry"] as const;

export const useCaseImages: Record<UseCase, string> = {
  Tactical: "/images/products/handgrip-detail.jpg",
  Competition: "/images/products/antimatter-optic-rail.jpg",
  "Concealed Carry": "/images/products/chassis-in-hand.jpg",
};
