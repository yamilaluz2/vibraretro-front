let formulario = document.getElementById("form-login");

function redirection() {
    window.location.href = "/pages/wall.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const datosUsuario = {
        mail: document.getElementById("mail").value,
        password: document.getElementById("password").value
    };
    const url = "http://localhost:5029/user/login";

    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosUsuario)
        };

    const callback = redirection;

    server(url,config,callback)
});
