// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';

function App() {
  // State utama: ambil dari localStorage, jika kosong mulai dari array kosong
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    return dataTersimpan ? JSON.parse(dataTersimpan) : [];
  });

  // useEffect: simpan ke localStorage setiap daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // Tambah transaksi (immutable: spread)
  const tambahTransaksi = (data) => {
    const transaksiBaru = { id: Date.now(), ...data };
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  // Hapus transaksi (immutable: filter)
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  // Saldo = nilai turunan, dihitung otomatis dari state (bukan state baru)
  const saldo = daftarTransaksi.reduce((total, t) => {
    return t.jenis === 'pemasukan' ? total + t.nominal : total - t.nominal;
  }, 0);

  return (
    <div className="wadah">
      <header className="hero">
        <h1>Catatan Keuangan Mini</h1>
        <p>Modul 2: React Lanjutan - Tugas 3</p>
        <div className="identitas">
          <span>👤 Adriel Reihansyah Setiawan</span>
          <span>🎓 NPM: 243040091</span>
        </div>
      </header>

      <section className="kartu saldo-kartu">
        <h2>Total Saldo</h2>
        <p className={`saldo ${saldo >= 0 ? 'pemasukan' : 'pengeluaran'}`}>
          Rp {saldo.toLocaleString('id-ID')}
        </p>
      </section>

      <section className="kartu">
        <h2>Tambah Transaksi</h2>
        <FormTransaksi onTambah={tambahTransaksi} />
      </section>

      <section className="kartu">
        <h2>Daftar Transaksi</h2>
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi. Yuk catat transaksi pertamamu!</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((t) => (
              <ItemTransaksi key={t.id} transaksi={t} onHapus={hapusTransaksi} />
            ))}
          </ul>
        )}
      </section>

      <footer className="footer">
        © 2026 Adriel Reihansyah Setiawan · NPM 243040091
      </footer>
    </div>
  );
}

export default App;