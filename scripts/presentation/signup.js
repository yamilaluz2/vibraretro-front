let formulario = document.getElementById("form");

function redirection() {
    window.location.href = "/index.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const datosUsuario = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value
    };
    
    //LLAMADA ASINCRÓNICA
    createUser(datosUsuario, (data) => {
        redirection();
    })
});
