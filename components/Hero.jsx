"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaxPattern from "./WaxPattern";
import Media from "./Media";
import { formatPrice } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const T = 2.8; // attend la fin de l'écran d'ouverture
const lines = ["Le wax", "prend la", "parole."];
const wax = ["#E8432E", "#FFFBF2", "#1B2A6B", "#FFC72C"];
const tags = [
  { label: "Robe Adjoa", price: 45000, cls: "left-[-12%] top-[24%]", delay: T + 0.9 },
  { label: "Chemise Kofi", price: 32000, cls: "right-[-10%] bottom-[16%]", delay: T + 1.1 },
];

export default function Hero() {
  const root = useRef(null);
  const disc = useRef(null);
  const photo = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
      gsap.to(disc.current, { rotate: 160, ease: "none", scrollTrigger: st });
      gsap.to(".hero-copy", { yPercent: -10, ease: "none", scrollTrigger: st });
      gsap.to(photo.current, { yPercent: 10, scale: 1.1, ease: "none", scrollTrigger: st });
    }, root);
    return () => ctx.revert();
  }, [reduce]);

  return (
      <section id="top" ref={root} className="relative min-h-screen overflow-hidden bg-soleil pt-28">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 pb-24 md:px-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="hero-copy">
            <h1 className="font-display text-[clamp(3.6rem,11.5vw,10.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
              {lines.map((l, i) => (
                  <span key={l} className="block overflow-hidden pb-[0.08em]">
                <motion.span className="block" initial={{ y: "108%" }} animate={{ y: 0 }}
                             transition={{ duration: 1, delay: T + 0.15 * i, ease: [0.16, 1, 0.3, 1] }}>{l}</motion.span>
              </span>
              ))}
            </h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: T + 0.7, duration: 0.8 }}
                      className="mt-8 max-w-md text-lg font-medium leading-relaxed">
              Robes, chemises, paréos et accessoires créés par Maureen Ayité dans les tissus du patrimoine africain.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: T + 0.85, duration: 0.8 }}
                        className="mt-8 flex flex-wrap gap-3">
              <a href="#nouveautes" className="rounded-full bg-nuit px-8 py-4 font-bold text-coton transition-transform hover:scale-105">Voir les nouveautés</a>
              <a href="#univers" className="rounded-full border-2 border-nuit px-8 py-4 font-bold transition-colors hover:bg-nuit hover:text-coton">Choisir un univers</a>
            </motion.div>
          </div>

          <div className="relative mx-auto w-[min(78vw,460px)]">
            <motion.div initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 14, delay: T }}
                        className="absolute -right-[26%] -top-[10%] w-[92%]">
              <div ref={disc} className="aspect-square overflow-hidden rounded-full">
                <WaxPattern id="hero" variant={0} colors={wax} scale={2.2} />
              </div>
            </motion.div>
            <div className="absolute -right-[6%] top-[12%] z-10 flex aspect-square w-[24%] items-center justify-center rounded-full bg-black font-display text-[clamp(1.2rem,3.4vw,2.4rem)] font-semibold lowercase text-white">wax</div>

            <motion.div initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: T + 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-[3/4] overflow-hidden rounded-b-[2rem] rounded-t-full shadow-[0_30px_80px_-25px_rgba(27,42,107,0.55)]">
              <div ref={photo} className="h-full w-full">
                <Media id="hero-photo" src="/images/hero.jpg" alt="Collection NANAWAX" variant={2}
                       colors={["#0E7C5A", "#FFC72C", "#FFFBF2", "#E8432E"]} className="h-full w-full" />
              </div>
            </motion.div>

            {tags.map((t) => (
                <motion.div key={t.label} initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1, y: reduce ? 0 : [0, -10, 0] }}
                            transition={{ opacity: { delay: t.delay }, scale: { delay: t.delay, type: "spring" }, y: { delay: t.delay, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                            className={`absolute z-10 ${t.cls} rounded-2xl bg-coton px-4 py-3 shadow-lg`}>
                  <p className="text-sm font-bold">{t.label}</p>
                  <p className="text-sm font-semibold text-piment">{formatPrice(t.price)}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}