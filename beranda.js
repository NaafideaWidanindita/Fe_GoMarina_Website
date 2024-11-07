function toggleDescription(icon) {
  const description = icon.nextElementSibling; // Mendapatkan elemen deskripsi berikutnya
  const isExpanded = description.classList.toggle("expanded"); // Toggle class 'expanded'

  // Mengubah ikon berdasarkan status
  icon.innerHTML = isExpanded ? "&#11206;" : "&#11208;"; // Ubah ikon
}

function copyText() {
  const textToCopy = "Go Marina"; // Teks yang ingin disalin
  navigator.clipboard.writeText(textToCopy).then(
    () => {
      alert("Nama aplikasi disalin: " + textToCopy); // Notifikasi setelah disalin
    },
    (err) => {
      console.error("Gagal menyalin: ", err);
    }
  );
}
