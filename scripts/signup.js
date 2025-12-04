let formulario = document.getElementById("form");

function redirection() {
  // desde sign-up.html, el login está un nivel arriba en index.html....
  window.location.href = "../index.html";
}

formulario.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mail = document.getElementById("mail").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validación: en caso q faltan datos
  if (!name || !mail || !userName || !password) {
    Swal.fire({
      title: "Faltan datos",
      text: "Completá todos los campos.",
      icon: "warning",
      confirmButtonText: "Entendido",
    });
    return;
  }

  // Objeto que se manda al back
  const dataUserRegister = {
    name,
    mail,
    userName,
    password,
  };

  // Callback de exito que va al repositorio
  const onSuccess = async function (response) {
    await Swal.fire({
      title: "¡Usuario creado!",
      text: "Tus datos se guardaron correctamente.",
      icon: "success",
      confirmButtonText: "Continuar",
    });

    redirection();
  };

  // Llamada REAL al repositorio, usa serverAPIRest por dentro
  createUser(dataUserRegister, onSuccess);
});