// src/FormTugas.jsx
import { useState } from 'react';

function FormTugas({ onTambah }) {
  const [teks, setTeks] = useState('');

  // Validasi: tidak boleh kosong dan maksimal 50 karakter
  const terlaluPanjang = teks.length > 50;
  const tidakValid = teks.trim() === '' || terlaluPanjang;

  const tanganiKirim = (event) => {
    event.preventDefault();      // cegah halaman reload
    if (tidakValid) return;      // hentikan jika tidak valid
    onTambah(teks.trim());       // "melapor" ke komponen induk
    setTeks('');                 // kosongkan input
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Contoh: Kerjakan laporan Modul 2"
          value={teks}
          onChange={(event) => setTeks(event.target.value)}
        />
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>
      {terlaluPanjang && <p className="galat">Judul tugas maksimal 50 karakter.</p>}
    </form>
  );
}

export default FormTugas;