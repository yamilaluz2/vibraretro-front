let formulario = document.getElementById("form-login");

function redirection() {
    window.location.href = "/pages/wall.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const dataUserLogin = {
        mail: document.getElementById("mail").value,
        password: document.getElementById("password").value
    };

    authentication(dataUserLogin, (data)=>{
        if (data.success) {

            Swal.fire({
                icon: "success",
                title: "¡Bienvenido!",
                text: "Login exitoso",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                redirection();
            });

        } else {

            Swal.fire({
                icon: "error",
                title: "Error",
                text: data.message
            });
        }
    });
});
