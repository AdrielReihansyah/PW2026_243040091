// src/App.tsx
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import './App.css';

// Ganti dengan akun asli kamu sebelum dipublikasikan.
const tautan = [
  { label: 'Email', href: 'mailto:adriel.reihansyah@example.com' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

const daftarSkill = [
  { id: 1, namaSkill: 'React JS', level: 'Menengah' },
  { id: 2, namaSkill: 'TypeScript', level: 'Pemula' },
  { id: 3, namaSkill: 'HTML & CSS', level: 'Mahir' },
  { id: 4, namaSkill: 'PostgreSQL', level: 'Menengah' },
  { id: 5, namaSkill: 'Laravel', level: 'Pemula' },
  { id: 6, namaSkill: 'Git', level: 'Menengah' },
] as const;

const daftarProyek = [
  {
    id: 201,
    judul: 'Portofolio Mini',
    deskripsi:
      'Halaman yang sedang kamu lihat ini: dibangun dengan React 19, TypeScript, dan Vite, memakai komponen kartu profil dan badge skill yang reusable serta tema terang/gelap otomatis.',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 202,
    judul: 'Sistem Informasi Praktikum',
    deskripsi:
      'Aplikasi pengelolaan jadwal dan nilai praktikum: autentikasi multi-role untuk asisten dan mahasiswa, CRUD jadwal, serta rekap nilai per kelas.',
    tech: ['Laravel', 'PostgreSQL', 'Blade'],
  },
  {
    id: 203,
    judul: 'Dashboard Inventaris Lab',
    deskripsi:
      'Papan ringkasan stok alat laboratorium dengan filter kategori, pencarian, dan penanda alat yang perlu diadakan kembali.',
    tech: ['React', 'PostgreSQL', 'REST API'],
  },
  {
    id: 204,
    judul: 'REST API Perpustakaan',
    deskripsi:
      'Endpoint peminjaman dan pengembalian buku dengan validasi request, pencatatan denda keterlambatan, dan dokumentasi OpenAPI.',
    tech: ['Laravel', 'PostgreSQL', 'OpenAPI'],
  },
];

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <strong>adriel.dev</strong>
        <div className="nav-links">
          <a href="#tentang">Tentang</a>
          <a href="#skill">Skill</a>
          <a href="#proyek">Proyek</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      <header className="hero">
        <div>
          <p className="eyebrow">Mahasiswa Informatika · Kelas E</p>
          <h1>Adriel Reihansyah Setiawan</h1>
          <p className="lead">
            Saya membangun antarmuka web yang rapi dan mudah dipakai dengan React
            &amp; TypeScript, lalu menyambungkannya ke backend Laravel dan
            PostgreSQL.
          </p>
          <div className="actions">
            <a className="btn" href="#proyek">
              Lihat Proyek
            </a>
            <a className="btn btn-ghost" href="#kontak">
              Hubungi Saya
            </a>
          </div>
        </div>

        <div>
          <KartuProfil
            nama="Adriel Reihansyah Setiawan"
            npm="233040091"
            kelas="E"
            status="Aktif"
          />
        </div>
      </header>

      <section id="tentang" className="section">
        <h2>Tentang Saya</h2>
        <p className="lead">
          Mahasiswa program studi Informatika yang sedang mendalami rekayasa web:
          dari menyusun komponen antarmuka, mengelola data relasional, sampai
          merilis aplikasi. Terbiasa bekerja dengan struktur proyek React + Vite
          dan Laravel, serta senang merapikan detail kecil seperti aksesibilitas
          dan konsistensi tampilan.
        </p>

        <dl className="facts">
          <div>
            <dt>NPM</dt>
            <dd>233040091</dd>
          </div>
          <div>
            <dt>Kelas</dt>
            <dd>E</dd>
          </div>
          <div>
            <dt>Fokus</dt>
            <dd>Frontend &amp; Web App</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Aktif</dd>
          </div>
        </dl>
      </section>

      <section id="skill" className="section">
        <h2>Skill &amp; Tools</h2>
        <p>Teknologi yang saya pakai sehari-hari di perkuliahan dan proyek pribadi.</p>
        <div className="badges">
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section id="proyek" className="section">
        <h2>Proyek Pilihan</h2>
        <p>Kumpulan proyek perkuliahan dan eksplorasi mandiri.</p>
        <div className="grid">
          {daftarProyek.map((proyek) => (
            <article key={proyek.id} className="card">
              <h3>{proyek.judul}</h3>
              <p>{proyek.deskripsi}</p>
              <div className="tags">
                {proyek.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="kontak" className="section">
        <h2>Mari Berkolaborasi</h2>
        <p className="lead">
          Terbuka untuk proyek kecil, tugas kelompok, atau diskusi seputar web
          development. Balasan paling cepat lewat email.
        </p>
        <div className="actions">
          {tautan.map((t) => (
            <a key={t.label} className="btn btn-ghost" href={t.href}>
              {t.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Adriel Reihansyah Setiawan</span>
        <span>Dibangun dengan React + Vite</span>
      </footer>
    </div>
  );
}

export default App;