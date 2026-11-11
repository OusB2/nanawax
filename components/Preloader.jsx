"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import WaxPattern from "./WaxPattern";

const wax = ["#E8432E", "#FFFBF2", "#1B2A6B", "#FFC72C"];
const rings = [
    { size: "74%", color: "#FFFBF2" },
    { size: "52%", color: "#1B2A6B" },
    { size: "34%", color: "#FFC72C" },
    { size: "24%", color: "#000000" },
];

export default function Preloader() {
    const reduce = useReducedMotion();
    const [flood, setFlood] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (reduce) { setDone(true); return; }
        document.body.style.overflow = "hidden";
        const t1 = setTimeout(() => setFlood(true), 1900);
        const t2 = setTimeout(() => { setDone(true); document.body.style.overflow = ""; }, 2900);
        return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = ""; };
    }, [reduce]);

    if (done) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-coton" aria-hidden="true">
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="relative aspect-square w-[min(64vw,340px)]"
                    animate={flood ? { rotate: 120, scale: 0.6 } : {}}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 14 }}
                        className="absolute inset-0 overflow-hidden rounded-full"
                    >
                        <motion.div className="h-full w-full" animate={{ rotate: 360 }}
                                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}>
                            <WaxPattern id="pre" variant={0} colors={wax} scale={1.2} />
                        </motion.div>
                    </motion.div>

                    {rings.map((r, i) => (
                        <motion.div key={r.size} initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 130, damping: 11, delay: 0.25 + i * 0.2 }}
                                    className="absolute inset-0 m-auto rounded-full"
                                    style={{ width: r.size, height: r.size, background: r.color }} />
                    ))}

                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.15, duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center font-display text-[clamp(1rem,3.6vw,1.5rem)] font-semibold lowercase text-white"
                    >wax</motion.span>
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                className="absolute inset-x-0 bottom-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-nuit"
            >Mode africaine</motion.p>

            <motion.div
                initial={false}
                animate={{ clipPath: flood ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)" }}
                transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-soleil"
            />
        </div>
    );
}