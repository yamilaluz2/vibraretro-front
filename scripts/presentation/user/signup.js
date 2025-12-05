let formulario = document.getElementById("form");

function redirection() {
    window.location.href = "/index.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const userName = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !mail || !userName || !password) {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "TODOS los campos son obligatorios"
        });
        return;
    }

    const dataUserRegister = {
        name: name,
        mail: mail,
        userName: userName,
        password: password
    };

    
    createUser(dataUserRegister, (data) => {
        
        if (data.success) {
            Swal.fire({
                icon: "success",
                title: "¡Registro exitoso!",
                text: data.message,
                timer: 1500,
                showConfirmButton: false
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
