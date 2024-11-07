function copyToClipboard() {
  const text =
    "Jl. Raya Marina City, Tj. Riau, Kec. Sekupang, Kota Batam, Kepulauan Riau 29425";
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Teks berhasil disalin ke clipboard!");
    })
    .catch((err) => {
      console.error("Gagal menyalin teks: ", err);
    });
}

function copyPhoneNumber() {
  const phoneNumber = "081270108778";
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      alert("Nomor telepon berhasil disalin ke clipboard!");
    })
    .catch((err) => {
      console.error("Gagal menyalin nomor telepon: ", err);
    });
}
