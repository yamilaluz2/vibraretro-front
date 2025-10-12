let formulario = document.getElementById("form");

function redirection() {
    window.location.href = "/pages/wall.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const dataUser = new FormData();
    dataUser.append("name", document.getElementById("name").value);
    dataUser.append("mail", document.getElementById("mail").value);
    dataUser.append("userName", document.getElementById("user").value);
    dataUser.append("password", document.getElementById("password").value);
    dataUser.append("avatar", document.getElementById("profile-pic").files[0]);
    dataUser.append("coverPhoto", document.getElementById("cover-pic").files[0]); 

    updateUser(dataUser,()=>{
        redirection();
    });
});

