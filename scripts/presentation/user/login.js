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
        redirection();
    })
});
