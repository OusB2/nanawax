"use client";
import { useState } from "react";
import Logo from "./Logo";

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="overflow-hidden bg-soleil px-5 pt-20 md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="max-w-md font-display text-4xl font-extrabold leading-tight">Recevez les nouvelles collections en premier.</h2>
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-6 flex max-w-md gap-2">
            <label htmlFor="email" className="sr-only">Votre e-mail</label>
            <input id="email" type="email" required placeholder="Votre e-mail" className="min-w-0 flex-1 rounded-full bg-coton px-5 py-3 font-medium placeholder:text-nuit/60" />
            <button className="rounded-full bg-nuit px-6 py-3 font-bold text-coton">{done ? "Merci !" : "Je m'abonne"}</button>
          </form>
        </div>
        <nav aria-label="Boutique" className="flex flex-col gap-2 font-semibold">
          {["Femme", "Homme", "Beachwear", "Accessoires", "Autres"].map((l) => <a key={l} href="#univers" className="hover:underline">{l}</a>)}
        </nav>
        <nav aria-label="Informations" className="flex flex-col gap-2 font-semibold">
          {["Notre histoire", "Contact", "Livraison", "Paiement en FCFA"].map((l) => <a key={l} href="#" className="hover:underline">{l}</a>)}
        </nav>
      </div>
      <div className="mt-16 text-center text-[clamp(5rem,26vw,24rem)] leading-[0.75] text-black"><Logo className="!font-extrabold" /></div>
      <p className="py-6 text-center text-sm font-semibold">© 2026 NANAWAX. Fondée par Maureen Ayité.</p>
    </footer>
  );
}
