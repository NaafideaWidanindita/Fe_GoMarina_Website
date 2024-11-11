export function toggleDescription(icon) {
  const description = icon.nextElementSibling;
  const isExpanded = description.classList.toggle("expanded");

  icon.innerHTML = isExpanded ? "&#11206;" : "&#11208;";
}

export function copyText() {
  const textToCopy = "Go Marina";
  navigator.clipboard.writeText(textToCopy).then(
    () => {
      alert("Nama aplikasi disalin: " + textToCopy);
    },
    (err) => {
      console.error("Gagal menyalin: ", err);
    }
  );
}
