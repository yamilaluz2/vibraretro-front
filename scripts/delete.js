const form = document.querySelector(".form-signup-delete");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const name = form.querySelector('[name="name"]').value.trim();
  const mail = form.querySelector('[name="mail"]').value.trim();
  const user = form.querySelector('[name="user"]').value.trim();
  const password = form.querySelector('[name="password"]').value.trim();

  if (!name || !mail || !user || !password) {
    Swal.fire({
      title: "Faltan datos",
      text: "Completá todos los campos para eliminar tu cuenta.",
      icon: "warning",
      confirmButtonText: "Entendido"
    });
    return;
  }

  Swal.fire({
    title: "¿Estás seguro?",
    text: "Tu cuenta será eliminada permanentemente.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cuenta eliminada",
        text: "Gracias por haber sido parte de nuestra comunidad. Esperamos tenerte de nuevo. ¡Hasta pronto!",
        icon: "success",
        confirmButtonText: "Aceptar"
      }).then(() => {
        window.location.href = "../index.html";
      });
    }
  });
});