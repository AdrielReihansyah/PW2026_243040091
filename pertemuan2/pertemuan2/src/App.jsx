// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';

function App() {
  // 1. State utama: ambil dari localStorage, jika kosong pakai data contoh
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan); // teks JSON -> array
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  // State untuk Tugas 1: pilihan filter ('semua' | 'belum' | 'selesai')
  const [filter, setFilter] = useState('semua');

  // Efek A: dijalankan SEKALI saat App pertama kali tampil
  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  // Efek B: ubah judul tab setiap daftarTugas berubah
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan ke localStorage setiap daftarTugas berubah
  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // 2. Tambah tugas: array BARU berisi tugas lama + tugas baru
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // 3. Ubah status: salin tugas yang dicentang, biarkan yang lain
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  // 4. Hapus tugas: ambil semua KECUALI yang id-nya sama
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Tugas 2: hapus semua tugas yang sudah selesai
  const hapusSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // 5. Nilai turunan (dihitung dari state, bukan state baru)
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // Tugas 1: saring daftar sesuai filter SEBELUM di-map
  const tugasTampil = daftarTugas.filter((tugas) => {
    if (filter === 'selesai') return tugas.selesai;
    if (filter === 'belum') return !tugas.selesai;
    return true; // 'semua'
  });

  // Fungsi kecil: tombol aktif = biru, tidak aktif = abu-abu
  const kelasFilter = (nama) =>
    filter === nama ? 'tombol tombol-kecil' : 'tombol tombol-kecil tombol-abu';

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Tugas 1: tombol filter dengan className dinamis */}
        <div className="baris" style={{ marginBottom: '12px' }}>
          <button className={kelasFilter('semua')} onClick={() => setFilter('semua')}>Semua</button>
          <button className={kelasFilter('belum')} onClick={() => setFilter('belum')}>Belum Selesai</button>
          <button className={kelasFilter('selesai')} onClick={() => setFilter('selesai')}>Selesai</button>
        </div>

        {/* Ternary: pesan jika tidak ada tugas yang ditampilkan */}
        {tugasTampil.length === 0 ? (
          <p className="kosong">
            {daftarTugas.length === 0
              ? 'Belum ada tugas. Yuk tambahkan tugas pertamamu!'
              : 'Tidak ada tugas pada filter ini.'}
          </p>
        ) : (
          <ul className="daftar">
            {tugasTampil.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}

        {/* Tugas 2: tombol hanya muncul jika ada minimal 1 tugas selesai */}
        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah tombol-kecil"
            style={{ marginTop: '12px' }}
            onClick={hapusSelesai}
          >
            Hapus Semua yang Selesai
          </button>
        )}
      </Kartu>
    </div>
  );
}

export default App;