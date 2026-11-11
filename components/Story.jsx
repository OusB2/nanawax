"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import Media from "./Media";

gsap.registerPlugin(ScrollTrigger);

const text =
    "Maureen Ayité a fondé NANAWAX pour que le wax ne reste pas dans les souvenirs de famille. Chaque pièce part d'un tissu africain, passe par une coupe moderne et devient un vêtement à porter aujourd'hui, par les femmes comme par les hommes.";

export default function Story() {
  const root = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".w", { opacity: 0.18 }, {
        opacity: 1, stagger: 0.08, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: true },
      });
      gsap.fromTo(".story-photo", { yPercent: 8 }, {
        yPercent: -8, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [reduce]);

  return (
      <section ref={root} className="overflow-hidden bg-hibiscus px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1300px] items-center gap-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              {text.split(" ").map((w, i) => (<span key={i} className="w inline-block pr-[0.28em]">{w}</span>))}
            </p>
            <a href="#" className="mt-12 inline-block rounded-full bg-nuit px-8 py-4 font-bold text-coton transition-transform hover:scale-105">Découvrir l'histoire de la marque</a>
          </div>
          <figure className="story-photo mx-auto w-full max-w-sm">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2rem]">
              <Media id="maureen" src="/images/MaurreenAyite.jpeg" alt="Maureen Ayité, fondatrice de NANAWAX" variant={1}
                     colors={["#1B2A6B", "#FFC72C", "#FFFBF2", "#E8432E"]} className="h-full w-full" />
            </div>
            <figcaption className="mt-4 text-center font-display text-xl font-bold">Maureen Ayité, fondatrice</figcaption>
          </figure>
        </div>
      </section>
  );
}