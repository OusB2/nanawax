"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const links = ["Femme", "Homme", "Beachwear", "Accessoires", "Autres"];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const h = (e) => setCount(e.detail);
        window.addEventListener("cart", h);
        return () => window.removeEventListener("cart", h);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
                <a href="#top" aria-label="NANAWAX, accueil" className="text-2xl text-black"><Logo /></a>
                <nav className="hidden items-center gap-1 rounded-full bg-coton/90 p-1.5 shadow-sm backdrop-blur md:flex" aria-label="Catégories">
                    {links.map((l) => (
                        <a key={l} href="#univers" className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-nuit hover:text-coton">{l}</a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <button className="rounded-full bg-nuit px-5 py-2.5 text-sm font-bold text-coton transition-transform hover:scale-105">
                        Panier ({count})
                    </button>
                    <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"
                            className="rounded-full bg-coton px-4 py-2.5 text-sm font-bold md:hidden">{open ? "Fermer" : "Menu"}</button>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ clipPath: "circle(0% at 90% 0%)" }} animate={{ clipPath: "circle(150% at 90% 0%)" }}
                                exit={{ clipPath: "circle(0% at 90% 0%)" }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                                className="fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-piment px-6 text-coton md:hidden">
                        {links.map((l) => (
                            <a key={l} href="#univers" onClick={() => setOpen(false)} className="font-display text-6xl font-extrabold">{l}</a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}