// Pendekatan if-else
function hitungGajiIfElse() {
  var golongan = document.getElementById("golongan").value;
  var status = document.getElementById("status").value;

  var gaji = 0;
  var tunjangan = 0;

  // Logika if-else untuk menentukan gaji
  if (golongan == 1) {
    gaji = 10000000;
  } else if (golongan == 2) {
    gaji = 15000000;
    if (status === "Menikah") {
      tunjangan = 2000000;
    }
  } else if (golongan == 3) {
    gaji = 20000000;
  } else {
    document.getElementById("hasil").innerHTML = "Golongan tidak valid.";
    return;
  }

  var gajiBersih = gaji + tunjangan;
  document.getElementById(
    "hasil"
  ).innerHTML = `Gaji Bersih (if-else): Rp ${gajiBersih}`;
}

// Pendekatan switch-case
function hitungGajiSwitchCase() {
  var golongan = parseInt(document.getElementById("golongan").value);
  var status = document.getElementById("status").value;

  var gaji = 0;
  var tunjangan = 0;

  // Logika switch-case untuk menentukan gaji
  switch (golongan) {
    case 1:
      gaji = 10000000;
      break;
    case 2:
      gaji = 15000000;
      if (status === "Menikah") {
        tunjangan = 2000000;
      }
      break;
    case 3:
      gaji = 20000000;
      break;
    default:
      document.getElementById("hasil").innerHTML = "Golongan tidak valid.";
      return;
  }

  var gajiBersih = gaji + tunjangan;
  document.getElementById(
    "hasil"
  ).innerHTML = `Gaji Bersih (switch-case): Rp ${gajiBersih}`;
}
