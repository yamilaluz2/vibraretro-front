function verificarToken() {
  const token = getToken();
  if (!token) {
    window.location.href = "/index.html";
  }
}
verificarToken();