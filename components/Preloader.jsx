"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

export default function Preloader() {
    const [n, setN] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const id = setInterval(() => setN((v) => Math.min(100, v + 4)), 45);
        return () => { clearInterval(id); document.body.style.overflow = ""; };
    }, []);

    useEffect(() => {
        if (n < 100) return;
        const t = setTimeout(() => { setDone(true); document.body.style.overflow = ""; }, 250);
        return () => clearTimeout(t);
    }, [n]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-piment text-coton">
                    <Logo className="text-[clamp(3rem,12vw,8rem)]" />
                    <span className="absolute bottom-6 left-6 font-display text-7xl font-extrabold tabular-nums md:text-9xl">{n}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}