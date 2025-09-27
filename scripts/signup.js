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
    const url = "http://localhost:5029/user/register";

    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosUsuario)
        };

    const callback = redirection;

    server(url,config,callback)
});




