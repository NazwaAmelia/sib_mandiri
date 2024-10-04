// Data siswa
let s1 = { nama: "Asland", Nilai: 80 };
let s2 = { nama: "Leassa", Nilai: 90 };
let s3 = { nama: "Keshi", Nilai: 70 };
let s4 = { nama: "Ali", Nilai: 45 };
let s5 = { nama: "Eka", Nilai: 20 };

let siswa = [s1, s2, s3, s4, s5]; // Daftar siswa

// Fungsi untuk mendapatkan keterangan lulus atau tidak
function getKeterangan(nilai) {
  return nilai > 60 ? "Lulus" : "Tidak Lulus";
}

// Fungsi untuk mendapatkan grade
function getGrade(nilai) {
  if (nilai >= 85 && nilai <= 100) {
    return "A";
  } else if (nilai >= 75 && nilai < 85) {
    return "B";
  } else if (nilai >= 60 && nilai < 75) {
    return "C";
  } else if (nilai >= 30 && nilai < 60) {
    return "D";
  } else {
    return "E";
  }
}

// Fungsi untuk mendapatkan predikat berdasarkan grade
function getPredikat(grade) {
  switch (grade) {
    case "A":
      return "Sangat Baik";
    case "B":
      return "Baik";
    case "C":
      return "Cukup";
    case "D":
      return "Kurang";
    case "E":
      return "Sangat Kurang";
    default:
      return "";
  }
}

// Fungsi untuk mengisi data tabel
function populateTable() {
  const tableBody = document.getElementById("dataSiswa");
  siswa.forEach((s, index) => {
    const grade = getGrade(s.Nilai);
    const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${s.nama}</td>
                <td>${s.Nilai}</td>
                <td>${getKeterangan(s.Nilai)}</td>
                <td>${grade}</td>
                <td>${getPredikat(grade)}</td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

// Memanggil fungsi untuk mengisi tabel saat halaman dimuat
populateTable();
