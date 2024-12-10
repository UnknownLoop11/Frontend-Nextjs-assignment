export const tabs = [
  "Art de la table",
  "Mobilier",
  "Nappage",
  "Matériel de salle",
  "Cuisine",
  "Barbecue",
  "Tente",
  "Chauffage",
  "Podium - Piste de danse",
  "Son et lumière",
  "Packs",
  "Consommables",
];

export const productImages = [
  "/product.png",
  "/product-placeholder.png",
  "/product.png",
  "/product-placeholder.png",
];

import ProductCard from "../components/UI/ProductCard";
let products = [];

// Similar Products List (sample data)
for (let i = 0; i < 20; i++) {
  products.push(<ProductCard key={i} width={280} height={420} />);
}
export const similarProducts = products;

// Personalized Products List (sample data)
products = [];
for (let i = 0; i < 20; i++) {
  products.push(<ProductCard key={i} width={380} height={520} />);
}
export const personalizedProducts = products;

// Quick Links {Category: [Links]}
export const quickLinks = {
  "INFOS PRATIQUES": [
    "À propos",
    "Livraisons & Reprises",
    "Mode d’emploi",
    "F.A.Q",
  ],
  LÉGAL: ["Mentions légales", "CGU", "CGV", "Politique de confidentialité"],
  "MON COMPTE": [
    "Accéder à mon compte",
    "Ma liste d’envie",
    "Créer un compte",
    "Mot de passe oublié",
  ],
};

// Social Media Links
export const socialMediaLinks = [
  { src: "/icons/twitter.svg", alt: "twitter" },
  { src: "/icons/instagram.svg", alt: "Instagram" },
  { src: "/icons/linkedin.svg", alt: "Linkedin" },
];

// Search Suggestions Sample Products data
export const searchSuggestions = [
  { name: "Produit Simple", price: 7, img: "/product-placeholder.png" },
  { name: "Produit Gamme", price: "2,20", img: "/product.png" },
  { name: "Jewel Grand Couteau", price: 7, img: "/product-placeholder.png" },
  { name: "Piranha Fourchette à Zakouski", price: "2,20", img: "/product.png" },
];
