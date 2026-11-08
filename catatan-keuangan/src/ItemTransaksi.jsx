// src/ItemTransaksi.jsx
function ItemTransaksi({ transaksi, onHapus }) {
  const adalahPemasukan = transaksi.jenis === 'pemasukan';

  return (
    <li className="item">
      <span>{transaksi.keterangan}</span>
      {/* className dinamis: hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={`nominal ${adalahPemasukan ? 'pemasukan' : 'pengeluaran'}`}>
        {adalahPemasukan ? '+' : '-'} Rp {transaksi.nominal.toLocaleString('id-ID')}
      </span>
      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;