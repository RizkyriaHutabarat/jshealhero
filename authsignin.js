import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkLoginStatus = () => {
  // Mendapatkan nilai cookie dengan nama "token" menggunakan fungsi getCookie
  const token = getCookie("token");

  // Mendapatkan URL sebelumnya dari local storage (jika ada)
  const previousPageURL = localStorage.getItem("previousPageURL");

  // Jika ada token, kembalikan ke halaman sebelumnya
  if (token && previousPageURL) {
    Swal.fire({
      icon: "info",
      title: "Information",
      text: "You're logged in. Return to previous page.",
      confirmButtonText: "OK",
    }).then(() => {
      // Redirect ke halaman sebelumnya
      window.location.href = previousPageURL;
    });
  }
};

document.addEventListener("DOMContentLoaded", checkLoginStatus);