// src/App.tsx
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import './App.css';

// ---------- 1. Data ----------
// Dipisah dari tampilan: kalau mau ganti isi, cukup ubah di sini.
const tautan = [
  { label: 'Email', href: 'mailto:adriel.243040091@unpas.ac.id' },
  { label: 'GitHub', href: 'https://github.com/AdrielReihansyah' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adriel-reihansyah-setiawan-132883352/',
  },
];

// "as const" membuat nilai tidak bisa diubah & level dibaca sebagai tipe khusus
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
      'Halaman yang sedang kamu lihat: React 19, TypeScript, dan Vite, dengan komponen kartu profil dan badge skill yang reusable.',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 202,
    judul: 'Sistem Informasi Praktikum',
    deskripsi:
      'Pengelolaan jadwal dan nilai praktikum: login multi-role, CRUD jadwal, dan rekap nilai per kelas.',
    tech: ['Laravel', 'PostgreSQL', 'Blade'],
  },
  {
    id: 203,
    judul: 'Dashboard Inventaris Lab',
    deskripsi:
      'Ringkasan stok alat laboratorium dengan filter kategori, pencarian, dan penanda alat yang harus diadakan.',
    tech: ['React', 'PostgreSQL', 'REST API'],
  },
  {
    id: 204,
    judul: 'REST API Perpustakaan',
    deskripsi:
      'Endpoint peminjaman dan pengembalian buku: validasi request, denda keterlambatan, dan dokumentasi OpenAPI.',
    tech: ['Laravel', 'PostgreSQL', 'OpenAPI'],
  },
];

// ---------- 2. Tampilan ----------
function App() {
  return (
    <div className="app">
      {/* Navigasi */}
      <nav className="nav">
        <span className="brand">adriel.dev</span>
        <div className="nav-links">
          <a href="#tentang">Tentang</a>
          <a href="#skill">Skill</a>
          <a href="#proyek">Proyek</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      {/* Hero: perkenalan + komponen KartuProfil */}
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

        <KartuProfil
          nama="Adriel Reihansyah Setiawan"
          npm="233040091"
          kelas="E"
          status="Aktif"
        />
      </header>

      {/* Tentang */}
      <section id="tentang" className="section">
        <h2>Tentang Saya</h2>
        <p className="lead">
          Mahasiswa Informatika yang sedang mendalami rekayasa web: dari menyusun
          komponen antarmuka, mengelola data relasional, sampai merilis aplikasi.
          Terbiasa dengan struktur React + Vite dan Laravel, serta senang merapikan
          detail kecil seperti aksesibilitas dan konsistensi tampilan.
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

      {/* Skill: map data -> komponen BadgeSkill */}
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

      {/* Proyek: map data -> kartu */}
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

      {/* Kontak: map data -> tombol */}
      <section id="kontak" className="section">
        <h2>Mari Berkolaborasi</h2>
        <p className="lead">
          Terbuka untuk proyek kecil, tugas kelompok, atau diskusi seputar web
          development. Balasan paling cepat lewat email.
        </p>
        <div className="actions">
          {/* tautan http dibuka di tab baru, mailto tetap di tab ini */}
          {tautan.map((t) => (
            <a
              key={t.label}
              className="btn btn-ghost"
              href={t.href}
              target={t.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
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