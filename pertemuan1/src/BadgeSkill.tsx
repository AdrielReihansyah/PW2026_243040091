// src/BadgeSkill.tsx
// Level hanya boleh salah satu dari tiga nilai ini (union type).
type Level = 'Pemula' | 'Menengah' | 'Mahir';

type Props = {
  namaSkill: string;
  level: Level;
};

function BadgeSkill({ namaSkill, level }: Props) {
  return (
    <span className="badge">
      {/* warna titik: .dot-pemula / .dot-menengah / .dot-mahir */}
      <span className={`dot dot-${level.toLowerCase()}`} aria-hidden="true" />
      {namaSkill} <small>{level}</small>
    </span>
  );
}

export default BadgeSkill;