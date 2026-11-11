"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Media from "./Media";
import { categories } from "@/lib/data";

export default function Categories() {
    const [active, setActive] = useState(0);
    return (
        <section id="univers" className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
            <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                Cinq univers, un même tissu de fierté.
            </h2>
            <div className="mt-12 flex h-[760px] flex-col gap-3 md:h-[640px] md:flex-row">
                {categories.map((c, i) => {
                    const on = active === i;
                    return (
                        <motion.div key={c.name} role="button" tabIndex={0} aria-pressed={on} initial={false}
                                    animate={{ flexGrow: on ? 4 : 1 }} transition={{ type: "spring", stiffness: 140, damping: 22 }}
                                    onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                                    className="relative min-h-[64px] basis-0 cursor-pointer overflow-hidden rounded-[2rem]">
                            <div className={`absolute inset-0 transition-transform duration-1000 ${on ? "scale-105" : "scale-100"}`}>
                                <Media id={`cat-${i}`} src={c.img} alt={c.name} variant={c.variant} colors={c.colors} className="h-full w-full" />
                            </div>
                            <div className="absolute bottom-3 left-3 rounded-2xl bg-coton p-4 md:p-5">
                                <h3 className={`font-display font-extrabold ${on ? "text-4xl" : "text-xl md:text-2xl md:[writing-mode:vertical-rl]"}`}>{c.name}</h3>
                                {on && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                                        <p className="mt-2 max-w-[18rem] text-sm font-medium">{c.subs.join(", ")}</p>
                                        <a href="#nouveautes" className="mt-4 inline-block rounded-full bg-nuit px-5 py-2 text-sm font-bold text-coton">Explorer {c.name}</a>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}