let formulario = document.getElementById("form");

function redirection() {
    window.location.href = "/pages/wall.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const datosUsuario = new FormData();
    datosUsuario.append("name", document.getElementById("name").value);
    datosUsuario.append("mail", document.getElementById("mail").value);
    datosUsuario.append("userName", document.getElementById("user").value);
    datosUsuario.append("password", document.getElementById("password").value);
    datosUsuario.append("avatar", document.getElementById("profile-pic").files[0]);
    datosUsuario.append("coverPhoto", document.getElementById("cover-pic").files[0]); 
    datosUsuario.append("id", 30);

    const url = "http://localhost:5029/user/Update";

    const config = {
        method: "put",
        body:datosUsuario
        };

    const callback = redirection;

    server(url,config,callback)
});

