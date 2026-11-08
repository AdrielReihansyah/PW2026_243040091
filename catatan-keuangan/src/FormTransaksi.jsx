// src/FormTransaksi.jsx
import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');

  // Valid jika keterangan terisi dan nominal lebih dari 0
  const tidakValid = keterangan.trim() === '' || Number(nominal) <= 0;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;
    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal), // input selalu teks, ubah ke angka
      jenis: jenis,
    });
    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="baris" style={{ marginBottom: '8px' }}>
        <input
          className="input"
          type="text"
          placeholder="Keterangan (contoh: Gaji, Makan siang)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>
      <div className="baris">
        <input
          className="input"
          type="number"
          placeholder="Nominal"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <select
          className="pilih"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>
    </form>
  );
}

export default FormTransaksi;