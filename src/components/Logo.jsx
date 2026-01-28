export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold">
        <span className="font-serif text-xl">WS</span>
      </div>
      <div>
        <p className="font-serif text-xl font-semibold text-navy">WealthStem</p>
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Rooted in growth</p>
      </div>
    </div>
  );
}
