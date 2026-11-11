const words = ["Femme", "Homme", "Beachwear", "Accessoires", "Autres"];

export default function Marquee() {
  const row = (k) => (
    <div key={k} className="flex items-center" aria-hidden={k === 1}>
      {words.map((w) => (
        <span key={w + k} className="flex items-center">
          <span className="px-8 font-display text-4xl font-bold md:text-6xl">{w}</span>
          <span className="h-5 w-5 rounded-full border-4 border-soleil md:h-7 md:w-7" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-nuit py-5 text-coton">
      <div className="marquee-track flex">{[0, 1].map(row)}</div>
    </div>
  );
}
