let formularioUpdate = document.getElementById("form");


formularioUpdate.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const name = document.getElementById("name").value.trim();
    const userName = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();
    const passwordConfirm = document.getElementById("password-confirmation").value.trim();
    const avatar = document.getElementById("profile-pic").files[0];
    const coverPhoto = document.getElementById("cover-pic").files[0];

    
    if (!name && !userName && !password && !passwordConfirm && !avatar && !coverPhoto) {
        alert("Debes completar al menos un campo para actualizar tu perfil");
        return;
    }

    
    if (password || passwordConfirm) {
        if (password !== passwordConfirm) {
            alert("Las contraseñas no coinciden");
            return;
        }
    }

    const dataUser = new FormData();
    dataUser.append("name", name);
    dataUser.append("userName", userName);
    dataUser.append("password", password);
    dataUser.append("avatar", avatar);
    dataUser.append("coverPhoto", coverPhoto);

    

    updateUser(dataUser,(user)=>{
        if (user){
            const users = new User(user);
            const nodo = getNodeProfile(users);
            sectionProfile.innerHTML = "";
            sectionProfile.append(nodo);

            const modal = bootstrap.Modal.getInstance(
            document.getElementById("modalEditarPerfil")
            );
            modal.hide();
            formularioUpdate.reset();
            alert("Perfil actualizado correctamente");

        }
    });
});

