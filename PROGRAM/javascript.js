//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    //display:block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
      $("nav img.hitam").show();
      $("nav img.putih").hide();
    } else {
      $("nav").removeClass("putih");
      $("nav img.hitam").hide();
      $("nav img.putih").show();
    }
  });
});
function submitForm() {
<<<<<<< HEAD
  var name = document.getElementById('name').value;
  var visitDate = document.getElementById('visitDate').value;
  var purpose = document.getElementById('purpose').value;
  var jumlahAnggota = document.getElementById('jumlahAnggota').value;
  var rencanaKegiatan = document.getElementById('rencanaKegiatan').value;
  var prestasiCapaian = document.getElementById('prestasiCapaian').value;
  var perkembanganKeterampilan = document.getElementById('perkembanganKeterampilan').value;
  var kendalaTantangan = document.getElementById('kendalaTantangan').value;
  var dokumentasi = document.getElementById('dokumentasi').value;

  if (!name || !visitDate || !purpose || !jumlahAnggota || !rencanaKegiatan || !prestasiCapaian || !perkembanganKeterampilan || !kendalaTantangan || !dokumentasi) {
    alert('Silakan isi semua input.');
    return;
  }

  var submitButton = document.querySelector('.submit-button');
  submitButton.innerHTML = 'being processed';
  submitButton.disabled = true;

  var url = 'https://script.google.com/macros/s/AKfycbw-lf4ptaPa7nJyqUY5dTdYqcTuN8U7e8WM84tS3gr5rit6yQE2omygLn2a4D05D1_d/exec';
  var formData = new FormData();
  formData.append('Nama Pembina', name);
  formData.append('Tanggal Pelaporan', visitDate);
  formData.append('Nama Ekstrakulikuler', purpose);
  formData.append('Jumlah Anggota', jumlahAnggota);
  formData.append('Rencana Kegiatan', rencanaKegiatan);
  formData.append('Prestasi dan Capaian', prestasiCapaian);
  formData.append('Perkembangan Keterampilan', perkembanganKeterampilan);
  formData.append('Kendala dan Tantangan', kendalaTantangan);
  formData.append('Dokumentasi', dokumentasi);

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Terjadi kesalahan saat mengirim formulir');
    }
    return response.text();
  })
  .then(data => {
    alert('Formulir berhasil dikirim!');
    showCheckmark();
    resetForm();
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
    alert('Terjadi kesalahan saat mengirim formulir.');
  });
}

function showCheckmark() {
  var submitButton = document.querySelector('.submit-button');
  submitButton.innerHTML = 'Success \u2713';
  submitButton.classList.add('success');

=======
>>>>>>> 075557334f6112b3c2d1e456091c7d1fe4237e0d
  var name = document.getElementById("name").value;
  var visitDate = document.getElementById("visitDate").value;
  var NamaEkstrakulikuler = document.getElementById(
    "NamaEkstrakulikuler"
  ).value;
  var jumlahAnggota = document.getElementById("jumlahAnggota").value;
  var rencanaKegiatan = document.getElementById("rencanaKegiatan").value;
  var prestasiCapaian = document.getElementById("prestasiCapaian").value;
  var perkembanganKeterampilan = document.getElementById(
    "perkembanganKeterampilan"
  ).value;
  var kendalaTantangan = document.getElementById("kendalaTantangan").value;
  var dokumentasi = document.getElementById("dokumentasi").value;

  if (
    !name ||
    !visitDate ||
    !NamaEkstrakulikuler ||
    !jumlahAnggota ||
    !rencanaKegiatan ||
    !prestasiCapaian ||
    !perkembanganKeterampilan ||
    !kendalaTantangan ||
    !dokumentasi
  ) {
    alert("Silakan isi semua input!");
    return;
  }

=======
  // Validate name, purpose, rencanaKegiatan, prestasiCapaian, perkembanganKeterampilan, kendalaTantangan
  var regex = /^[a-zA-Z.,;'"\s]+$/;

  if (
    !regex.test(name) ||
    !regex.test(NamaEkstrakulikuler) ||
    !regex.test(rencanaKegiatan) ||
    !regex.test(prestasiCapaian) ||
    !regex.test(perkembanganKeterampilan) ||
    !regex.test(kendalaTantangan)
  ) {
    alert("Mohon mengisi hanya dengan huruf, titik, koma, atau tanda kutip.");
    return;
  }
>>>>>>> 075557334f6112b3c2d1e456091c7d1fe4237e0d
  var submitButton = document.querySelector(".submit-button");
  submitButton.innerHTML = "being processed";
  submitButton.disabled = true;

  var url =
    "https://script.google.com/macros/s/AKfycbzl5z4_yuUOSwuYsyc9-f0aCSCvfxqRmWDgKx4XkGI1M0x5YaRWRJqaj_bgtGz1XkNU/exec";
  var formData = new FormData();
  formData.append("Nama Pembina", name);
  formData.append("Tanggal Pelaporan", visitDate);
  formData.append("Nama Ekstrakulikuler", NamaEkstrakulikuler);
  formData.append("Jumlah Anggota", jumlahAnggota);
  formData.append("Rencana Kegiatan", rencanaKegiatan);
  formData.append("Prestasi dan Capaian", prestasiCapaian);
  formData.append("Perkembangan Keterampilan", perkembanganKeterampilan);
  formData.append("Kendala dan Tantangan", kendalaTantangan);
  formData.append("Dokumentasi", dokumentasi);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Terjadi kesalahan saat mengirim formulir ini.");
      }
      return response.text();
    })
    .then((data) => {
      alert("Formulir berhasil dikirim!");
      showCheckmark();
      resetForm();
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Terjadi kesalahan saat mengirim formulir.");
    });
}

function showCheckmark() {
  var submitButton = document.querySelector(".submit-button");
  submitButton.innerHTML = "Success \u2713";
  submitButton.classList.add("success");
}

function resetForm() {
  setTimeout(function () {
<<<<<<< HEAD
    var submitButton = document.querySelector('.submit-button');
    submitButton.innerHTML = 'Submit';
    submitButton.classList.remove('success');
    submitButton.disabled = false;

    // Reset other form fields if needed
    document.getElementById('name').value = '';
    document.getElementById('visitDate').value = '';
    document.getElementById('purpose').value = '';
    document.getElementById('jumlahAnggota').value = '';
    document.getElementById('rencanaKegiatan').value = '';
    document.getElementById('prestasiCapaian').value = '';
    document.getElementById('perkembanganKeterampilan').value = '';
    document.getElementById('kendalaTantangan').value = '';
    document.getElementById('dokumentasi').value = '';


=======
>>>>>>> 075557334f6112b3c2d1e456091c7d1fe4237e0d
    var submitButton = document.querySelector(".submit-button");
    submitButton.innerHTML = "Submit";
    submitButton.classList.remove("success");
    submitButton.disabled = false;

    // Reset other form fields if needed
    document.getElementById("name").value = "";
    document.getElementById("visitDate").value = "";
    document.getElementById("NamaEkstrakulikuler").value = "";
    document.getElementById("jumlahAnggota").value = "";
    document.getElementById("rencanaKegiatan").value = "";
    document.getElementById("prestasiCapaian").value = "";
    document.getElementById("perkembanganKeterampilan").value = "";
    document.getElementById("kendalaTantangan").value = "";
    document.getElementById("dokumentasi").value = "";
  }, 2000);
}

function previewImage() {
<<<<<<< HEAD
  var input = document.getElementById('dokumentasi');
  var preview = document.getElementById('preview');
=======
>>>>>>> 075557334f6112b3c2d1e456091c7d1fe4237e0d
  var input = document.getElementById("dokumentasi");
  var preview = document.getElementById("preview");

  preview.src = input.value;
}

<<<<<<< HEAD

=======
document.getElementById("dokumentasi").addEventListener("change", previewImage);
>>>>>>> 075557334f6112b3c2d1e456091c7d1fe4237e0d
