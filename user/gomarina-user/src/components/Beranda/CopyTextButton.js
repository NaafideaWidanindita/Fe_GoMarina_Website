import React from "react";

function CopyTextButton() {
  const copyText = () => {
    const textToCopy = "Go Marina";
    navigator.clipboard.writeText(textToCopy).then(
      () => alert("Nama aplikasi disalin: " + textToCopy),
      (err) => console.error("Gagal menyalin: ", err)
    );
  };

  return <button onClick={copyText}>Copy Text</button>;
}

export default CopyTextButton;
