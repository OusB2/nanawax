"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "./Media";
import { products, formatPrice } from "@/lib/data";

const tabs = ["Tous", "Femme", "Homme", "Beachwear", "Accessoires"];

export default function Products() {
  const [tab, setTab] = useState("Tous");
  const [cart, setCart] = useState({});
  const list = products.filter((p) => tab === "Tous" || p.group === tab);

  const add = (id) => {
    const next = { ...cart, [id]: true };
    setCart(next);
    window.dispatchEvent(new CustomEvent("cart", { detail: Object.keys(next).length }));
  };

  return (
      <section id="nouveautes" className="bg-white py-24">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">Les nouveautés</h2>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par catégorie">
            {tabs.map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
                        className={`rounded-full border-2 border-nuit px-5 py-2 text-sm font-bold transition-colors ${tab === t ? "bg-nuit text-coton" : "hover:bg-soleil"}`}>{t}</button>
            ))}
          </div>
          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                  <motion.article key={p.id} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.4 }} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                      <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
                        <Media id={`p-${p.id}`} src={p.img} alt={p.name} variant={p.variant} colors={p.colors} className="h-full w-full" />
                      </div>
                      <span className="absolute left-4 top-4 rounded-full bg-coton px-3 py-1 text-xs font-bold">Nouveau</span>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                        <p className="text-sm font-medium opacity-70">{p.cat}</p>
                        <p className="mt-1 font-bold text-piment">{formatPrice(p.price)}</p>
                      </div>
                      <button onClick={() => add(p.id)}
                              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${cart[p.id] ? "bg-palmier text-coton" : "bg-nuit text-coton hover:bg-piment"}`}>
                        {cart[p.id] ? "Ajouté" : "Ajouter"}
                      </button>
                    </div>
                  </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
  );
}