// src/BadgeSkill.tsx
type Level = 'Pemula' | 'Menengah' | 'Mahir';

type Props = {
  namaSkill: string;
  level: Level;
};

const warnaLevel: Record<Level, { bg: string; text: string; border: string }> = {
  Pemula: { bg: '#FFF3CD', text: '#856404', border: '#FFE08A' },
  Menengah: { bg: '#D1ECF1', text: '#0C5460', border: '#9FD6E0' },
  Mahir: { bg: '#D4EDDA', text: '#155724', border: '#9AD5A7' },
};

function BadgeSkill({ namaSkill, level }: Props) {
  const warna = warnaLevel[level] || {
    bg: '#E1E4E8',
    text: '#333',
    border: '#CCC',
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        backgroundColor: warna.bg,
        color: warna.text,
        border: `1px solid ${warna.border}`,
        borderRadius: '16px',
        fontSize: '13px',
        fontWeight: 'bold',
      }}
    >
      <span>{namaSkill}</span>
      <span style={{ fontWeight: 'normal', fontSize: '11px' }}>• {level}</span>
    </div>
  );
}

export default BadgeSkill;