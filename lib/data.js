export const formatPrice = (n) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f")} FCFA`;

const P = {
  soleil: "#FFC72C", nuit: "#1B2A6B", piment: "#E8432E",
  palmier: "#0E7C5A", hibiscus: "#F26BA8", coton: "#FFFBF2",
};

export const categories = [
  { name: "Femme", img: "/images/femme.jpg", subs: ["Robes", "Jupes", "Pantalons", "Ensembles", "Tops"], variant: 0, colors: [P.piment, P.soleil, P.coton, P.nuit] },
  { name: "Homme", img: "/images/homme.jpg", subs: ["Chemises", "Ensembles", "Vestes", "Tuniques"], variant: 3, colors: [P.nuit, P.soleil, P.coton, P.piment] },
  { name: "Beachwear", img: "/images/beachwear.jpg", subs: ["Maillots", "Paréos", "Tenues de plage"], variant: 4, colors: [P.palmier, P.coton, P.soleil, P.hibiscus] },
  { name: "Accessoires", img: "/images/accessoires.jpg", subs: ["Sacs", "Bijoux", "Ceintures", "Pochettes"], variant: 2, colors: [P.hibiscus, P.nuit, P.coton, P.soleil] },
  { name: "Autres", img: "/images/autres.jpg", subs: ["Trousses", "Tabliers", "Articles textiles"], variant: 5, colors: [P.soleil, P.palmier, P.coton, P.piment] },
];

export const products = [
  { id: "robe-adjoa", name: "Robe Adjoa", group: "Femme", cat: "Femme · Robes", price: 45000, img: "/images/robe-adjoa.jpg", variant: 2, colors: [P.palmier, P.soleil, P.coton, P.piment] },
  { id: "chemise-kofi", name: "Chemise Kofi", group: "Homme", cat: "Homme · Chemises", price: 32000, img: "/images/chemise-kofi.jpg", variant: 3, colors: [P.piment, P.coton, P.nuit, P.soleil] },
  { id: "pareo-akissi", name: "Paréo Akissi", group: "Beachwear", cat: "Beachwear · Paréos", price: 18500, img: "/images/pareo-akissi.jpg", variant: 4, colors: [P.nuit, P.hibiscus, P.coton, P.soleil] },
  { id: "pochette-yaa", name: "Pochette Yaa", group: "Accessoires", cat: "Accessoires · Pochettes", price: 12000, img: "/images/pochette-yaa.jpg", variant: 0, colors: [P.hibiscus, P.coton, P.palmier, P.nuit] },
  { id: "ensemble-awa", name: "Ensemble Awa", group: "Femme", cat: "Femme · Ensembles", price: 68000, img: "/images/ensemble-awa.jpg", variant: 5, colors: [P.soleil, P.nuit, P.coton, P.piment] },
  { id: "veste-sekou", name: "Veste Sékou", group: "Homme", cat: "Homme · Vestes", price: 54000, img: "/images/veste-sekou.jpg", variant: 1, colors: [P.palmier, P.soleil, P.coton, P.nuit] },
  { id: "maillot-binta", name: "Maillot Binta", group: "Beachwear", cat: "Beachwear · Maillots", price: 22000, img: "/images/maillot-binta.jpg", variant: 2, colors: [P.piment, P.hibiscus, P.coton, P.nuit] },
  { id: "sac-zena", name: "Sac Zéna", group: "Accessoires", cat: "Accessoires · Sacs", price: 28500, img: "/images/sac-zena.jpg", variant: 3, colors: [P.nuit, P.hibiscus, P.coton, P.soleil] },
];

export const looks = [
  { img: "/images/look-1.jpg", title: "Matin de marché", variant: 0, colors: [P.piment, P.soleil, P.coton, P.nuit] },
  { img: "/images/look-2.jpg", title: "Soirée à Cocody", variant: 3, colors: [P.nuit, P.hibiscus, P.coton, P.soleil] },
  { img: "/images/look-3.jpg", title: "Plage de Grand-Bassam", variant: 4, colors: [P.palmier, P.soleil, P.coton, P.piment] },
  { img: "/images/look-4.jpg", title: "Bureau, version wax", variant: 2, colors: [P.soleil, P.nuit, P.coton, P.piment] },
];