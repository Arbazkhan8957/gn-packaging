const fs = require('fs');

const categories = [
  "Corrugated Boxes",
  "Custom & Specialty Boxes",
  "Raw Materials",
  "Heavy Duty & Wooden"
];

const images = {
  "Corrugated Boxes": [
    "images/standard_corrugated.jpg",
    "images/custom_size.jpg"
  ],
  "Custom & Specialty Boxes": [
    "images/die_cut_mailer.jpg",
    "images/fruit_box.jpg",
    "images/shoe_box.jpg",
    "images/white_duplex.jpg",
    "images/handle_box.jpg",
    "images/premium_box.jpg"
  ],
  "Raw Materials": [
    "images/corrugated_sheet.jpg",
    "images/corrugated_roll.jpg",
    "images/honeycomb_board.jpg",
    "images/kraft_paper_reel.jpg",
    "images/angle_board.jpg"
  ],
  "Heavy Duty & Wooden": [
    "images/gallery_delivery_1784384887523.jpg",
    "images/gallery_stacking_1784384876850.jpg",
    "images/gallery_printing_1784384864195.jpg"
  ]
};

const products = [
  // Corrugated Boxes (10)
  { title: "Standard RSC Corrugated Box", category: "Corrugated Boxes", desc: "Reliable regular slotted cartons for everyday shipping and storage needs." },
  { title: "Custom Dimensions Box", category: "Corrugated Boxes", desc: "Tailored dimensions to perfectly fit your unique products and reduce void space." },
  { title: "Heavy Duty Double Wall Box", category: "Corrugated Boxes", desc: "Extra strength double wall construction for heavy or fragile items." },
  { title: "Triple Wall Export Box", category: "Corrugated Boxes", desc: "Maximum durability triple wall boxes designed for international freight." },
  { title: "Master Shipping Carton", category: "Corrugated Boxes", desc: "Large master cartons used to consolidate multiple smaller boxes for palletizing." },
  { title: "Document Archive Box", category: "Corrugated Boxes", desc: "Sturdy archive boxes with hand holes and lids for document storage." },
  { title: "Telescoping Box", category: "Corrugated Boxes", desc: "Two-piece boxes with a separate lid and base, ideal for tall or bulky items." },
  { title: "E-commerce Subscription Box", category: "Corrugated Boxes", desc: "Standardized corrugated boxes optimized for subscription box services." },
  { title: "Flat Garment Box", category: "Corrugated Boxes", desc: "Wide and flat corrugated boxes perfect for shipping folded apparel." },
  { title: "Tall / Long Corrugated Box", category: "Corrugated Boxes", desc: "Elongated boxes specifically designed for items like posters, umbrellas, or pipes." },

  // Custom & Specialty (10)
  { title: "Die-Cut Locking Mailer", category: "Custom & Specialty Boxes", desc: "Self-locking die-cut mailer boxes providing a premium unboxing experience." },
  { title: "Premium Rigid Gift Box", category: "Custom & Specialty Boxes", desc: "High-end luxury rigid boxes with custom textures and foil stamping." },
  { title: "Fresh Produce / Fruit Box", category: "Custom & Specialty Boxes", desc: "Ventilated, moisture-resistant corrugated boxes for agricultural produce." },
  { title: "Retail Shoe Box", category: "Custom & Specialty Boxes", desc: "Standard two-piece folding shoe boxes customizable with your brand logo." },
  { title: "White Duplex Window Box", category: "Custom & Specialty Boxes", desc: "Elegant display boxes with transparent windows for retail shelving." },
  { title: "Corrugated Handle Box", category: "Custom & Specialty Boxes", desc: "Convenient carry boxes integrated with durable plastic or die-cut handles." },
  { title: "Magnetic Closure Box", category: "Custom & Specialty Boxes", desc: "Ultra-premium presentation boxes featuring a hidden magnetic snap closure." },
  { title: "Electronics Packaging Box", category: "Custom & Specialty Boxes", desc: "Anti-static, highly protective custom boxes with inserts for electronics." },
  { title: "Cosmetic Packaging Carton", category: "Custom & Specialty Boxes", desc: "Small, finely printed folding cartons designed for the beauty industry." },
  { title: "Beverage Carrier Box", category: "Custom & Specialty Boxes", desc: "Sturdy multi-compartment carrier boxes for bottles and cans." },

  // Raw Materials (10)
  { title: "Single Wall Corrugated Sheet", category: "Raw Materials", desc: "Standard corrugated sheets used as layer pads or structural dividers." },
  { title: "Double Wall Corrugated Sheet", category: "Raw Materials", desc: "Extra thick corrugated sheets for heavy-duty padding and separation." },
  { title: "2-Ply Corrugated Roll", category: "Raw Materials", desc: "Flexible single-face corrugated rolls for wrapping irregular or fragile items." },
  { title: "Industrial Kraft Paper Reel", category: "Raw Materials", desc: "High GSM brown kraft paper reels for manufacturing and heavy duty wrapping." },
  { title: "L-Shape Edge Angle Board", category: "Raw Materials", desc: "Rigid edge protectors to prevent pallet strapping damage and add stacking strength." },
  { title: "10mm Honeycomb Board", category: "Raw Materials", desc: "Lightweight yet incredibly strong 10mm honeycomb structural boards." },
  { title: "25mm Honeycomb Board", category: "Raw Materials", desc: "Ultra-thick 25mm honeycomb panels used as an eco-friendly wood alternative." },
  { title: "Corrugated Fitments & Inserts", category: "Raw Materials", desc: "Custom cut corrugated inserts to hold products firmly in place inside a box." },
  { title: "Virgin Kraft Paper Roll", category: "Raw Materials", desc: "Premium quality virgin kraft paper for high-end printing and packaging." },
  { title: "U-Profile Edge Protectors", category: "Raw Materials", desc: "U-shaped cardboard profiles designed to protect the edges of doors or panels." },

  // Heavy Duty & Wooden (10)
  { title: "Heavy Duty Pallet Box", category: "Heavy Duty & Wooden", desc: "Massive industrial corrugated boxes designed to fit exactly onto standard pallets." },
  { title: "Standard Euro Pallet", category: "Heavy Duty & Wooden", desc: "Standardized wooden Euro pallets engineered for international logistics." },
  { title: "Custom Size Wooden Pallet", category: "Heavy Duty & Wooden", desc: "Bespoke wooden pallets built to specific dimensions for specialized machinery." },
  { title: "Slatted Wooden Crate", category: "Heavy Duty & Wooden", desc: "Ventilated slatted wooden crates providing rigid protection with airflow." },
  { title: "Solid Plywood Export Crate", category: "Heavy Duty & Wooden", desc: "Fully enclosed plywood crates for maximum security during global sea freight." },
  { title: "ISPM 15 Certified Pallet", category: "Heavy Duty & Wooden", desc: "Heat-treated wooden pallets compliant with international export regulations." },
  { title: "Two-Way Entry Pallet", category: "Heavy Duty & Wooden", desc: "Economical wooden pallets designed for standard two-way forklift access." },
  { title: "Four-Way Entry Pallet", category: "Heavy Duty & Wooden", desc: "Versatile wooden pallets allowing forklift access from all four sides." },
  { title: "Heavy Machinery Wooden Base", category: "Heavy Duty & Wooden", desc: "Reinforced wooden bases specifically constructed for bolting down heavy industrial machines." },
  { title: "Collapsible Wooden Box", category: "Heavy Duty & Wooden", desc: "Space-saving wooden boxes that fold down flat when not in use." }
];

const features = ["High Durability", "Eco-Friendly", "Customizable", "Stackable", "Shock Absorbing", "Moisture Resistant", "Export Ready"];

let finalProducts = [];

products.forEach((prod, index) => {
  const catImages = images[prod.category];
  const imgUrl = catImages[index % catImages.length]; // cycle through available images for that category
  
  // pick 3 random features
  let prodFeatures = [];
  while(prodFeatures.length < 3) {
    let f = features[Math.floor(Math.random() * features.length)];
    if(!prodFeatures.includes(f)) prodFeatures.push(f);
  }

  finalProducts.push({
    id: index + 1,
    title: prod.title,
    category: prod.category,
    desc: prod.desc,
    img: imgUrl,
    features: prodFeatures
  });
});

const fileContent = "export const products = " + JSON.stringify(finalProducts, null, 2) + ";\n";
fs.writeFileSync("src/productsData.js", fileContent);
console.log("Successfully generated 40 products!");
