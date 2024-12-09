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

// Similar Products List
for (let i = 0; i < 20; i++) {
  products.push(<ProductCard key={i} width={260} height={400} />);
}
export const similarProducts = products;

// Personalized Products List
products = [];
for (let i = 0; i < 20; i++) {
  products.push(<ProductCard key={i} width={380} height={520} />);
}
export const personalizedProducts = products;

// Quick Links
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
