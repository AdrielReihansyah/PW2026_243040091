// src/KartuProfil.tsx
// Komponen functional: menerima data dari luar lewat props.
type Props = {
  nama: string;
  npm: string;
  kelas: string;
  status: string;
  fotoUrl?: string; // tanda "?" = opsional
};

function KartuProfil({ nama, npm, kelas, status, fotoUrl }: Props) {
  // Ambil huruf pertama dari maksimal dua kata, contoh: "Adriel Reihansyah" -> "AR"
  const inisial = nama
    .split(' ')
    .slice(0, 2)
    .map((kata) => kata[0])
    .join('');

  return (
    <div className="profile-card">
      <div className="profile-head">
        {fotoUrl ? (
          <img className="avatar" src={fotoUrl} alt={`Foto ${nama}`} />
        ) : (
          <div className="avatar" aria-hidden="true">
            {inisial}
          </div>
        )}

        <div>
          <h3>{nama}</h3>
          <p className="muted">
            NPM {npm} · Kelas {kelas}
          </p>
        </div>
      </div>

      {/* class tambahan hanya muncul jika statusnya "Aktif" */}
      <p className={status === 'Aktif' ? 'status status-aktif' : 'status'}>
        Status akademik: {status}
      </p>
    </div>
  );
}

export default KartuProfil;