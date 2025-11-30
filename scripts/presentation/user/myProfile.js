const sectionProfile = document.getElementById("profile-container");

function getNodeProfile(users) {
    const nodoProfile = document.createElement("article");
    nodoProfile.className = "my-profiile";
    nodoProfile.innerHTML = `
        <img src=${users.coverPhoto} alt="Foto de portada" class="cover-photo">
        <div class="profile-container-row">
            <img src=${users.avatar} alt="Foto de perfil" class="profile-photo">
            <h2>${users.userName}</h2> 
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditarPerfil">Editar Perfil</button>
    `
        
    return nodoProfile;
}

let idUserLogin =  getIdUser();


window.addEventListener("DOMContentLoaded", () => {
    
    getUserProfile(idUserLogin, (user) => {
        if (user){
            const users = new User(user);
            const nodo = getNodeProfile(users);
            sectionProfile.append(nodo);

        }
        
    
});
    
});