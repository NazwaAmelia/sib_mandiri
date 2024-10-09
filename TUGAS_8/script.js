// Fungsi untuk menghitung total nilai
const hitungTotal = (nama, ...nilai) => {
  // Menggabungkan array nilai dengan array tambahan menggunakan spread operator
  const nilaiTambahan = [3, 7];
  const nilaiGabungan = [...nilai, ...nilaiTambahan];

  // Menghitung total nilai dari array nilaiGabungan
  const totalNilai = nilaiGabungan.reduce((total, num) => total + num, 0);

  // Menampilkan hasil di console menggunakan template literals
  console.log(`Nama: ${nama}, Total Nilai: ${totalNilai}`);
};

// Contoh penggunaan fungsi
hitungTotal("Ali", 10, 20, 30);
hitungTotal("Budi", 15, 25, 35, 40);
