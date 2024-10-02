// Function declaration untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// Arrow function untuk menghitung luas lingkaran
const hitungLuasLingkaran = (jariJari) => Math.PI * Math.pow(jariJari, 2);

// Fungsi untuk menangani perhitungan luas persegi panjang dari input
function hitungPersegiPanjang() {
  // Ambil nilai dari input pengguna
  const panjang = document.getElementById("panjang").value;
  const lebar = document.getElementById("lebar").value;

  // Pastikan input tidak kosong atau 0
  if (panjang && lebar) {
    const luas = hitungLuasPersegiPanjang(panjang, lebar);
    document.getElementById(
      "hasilPersegiPanjang"
    ).innerText = `Luas Persegi Panjang: ${luas}`;
  } else {
    document.getElementById("hasilPersegiPanjang").innerText =
      "Harap masukkan panjang dan lebar yang valid!";
  }
}

// Fungsi untuk menangani perhitungan luas lingkaran dari input
function hitungLingkaran() {
  // Ambil nilai dari input pengguna
  const jariJari = document.getElementById("jariJari").value;

  // Pastikan input tidak kosong atau 0
  if (jariJari) {
    const luas = hitungLuasLingkaran(jariJari);
    document.getElementById(
      "hasilLingkaran"
    ).innerText = `Luas Lingkaran: ${luas.toFixed(2)}`;
  } else {
    document.getElementById("hasilLingkaran").innerText =
      "Harap masukkan jari-jari yang valid!";
  }
}
