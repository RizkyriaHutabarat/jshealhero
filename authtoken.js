import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("token");

  // Jika tidak ada token, kembalikan ke halaman signIn.html
  if (!token) {
    Swal.fire({
      icon: "info",
      title: "Information",
      text: "You're not logged in yet. Please log in first.",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman sign in
      window.location.href = "../signin.html";
    });
  }
};

document.addEventListener("DOMContentLoaded", checkTokenAndRedirect);