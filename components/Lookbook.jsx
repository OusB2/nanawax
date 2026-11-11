"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Media from "./Media";
import { looks } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const shapes = ["rounded-t-full rounded-b-[2rem]", "rounded-[2rem]", "rounded-full", "rounded-[2rem] rounded-tr-[8rem]"];

export default function Lookbook() {
    const root = useRef(null);
    const track = useRef(null);
    const reduce = useReducedMotion();

    useEffect(() => {
        if (reduce) return;
        const ctx = gsap.context(() => {
            const dist = () => track.current.scrollWidth - window.innerWidth;
            gsap.to(track.current, {
                x: () => -dist(), ease: "none",
                scrollTrigger: { trigger: root.current, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
            });
        }, root);
        return () => ctx.revert();
    }, [reduce]);

    return (
        <section ref={root} className={`bg-palmier text-coton ${reduce ? "" : "overflow-hidden"}`}>
            <div ref={track} className={`flex h-screen items-center gap-8 px-5 md:gap-14 md:px-10 ${reduce ? "overflow-x-auto" : "w-max"}`}>
                <div className="w-[80vw] shrink-0 md:w-[32vw]">
                    <h2 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight md:text-8xl">Lookbook</h2>
                    <p className="mt-6 max-w-xs text-lg font-medium">Quatre façons de porter le wax, de la plage au bureau.</p>
                </div>
                {looks.map((l, i) => (
                    <figure key={l.title} className="shrink-0">
                        <div className={`aspect-[4/5] h-[62vh] overflow-hidden ${shapes[i % shapes.length]}`}>
                            <Media id={`look-${i}`} src={l.img} alt={l.title} variant={l.variant} colors={l.colors} className="h-full w-full" />
                        </div>
                        <figcaption className="mt-4 font-display text-2xl font-bold">{l.title}</figcaption>
                    </figure>
                ))}
                <div className="w-[10vw] shrink-0" />
            </div>
        </section>
    );
}