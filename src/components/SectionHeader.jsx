export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold text-navy lg:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base text-slate-600">{description}</p> : null}
    </div>
  );
}
