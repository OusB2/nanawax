/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import WaxPattern from "./WaxPattern";

// Affiche la photo si elle existe, sinon le motif wax.
export default function Media({ src, alt, id, variant = 0, colors, scale = 1.3, className = "" }) {
    const ref = useRef(null);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
        const i = ref.current;
        if (i && i.complete && i.naturalWidth === 0) setFailed(true);
    }, []);
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0"><WaxPattern id={id} variant={variant} colors={colors} scale={scale} /></div>
            {!failed && (
                <img ref={ref} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)}
                     className="absolute inset-0 h-full w-full object-cover" />
            )}
        </div>
    );
}