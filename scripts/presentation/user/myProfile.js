const sectionProfile = document.getElementById("profile-container");
const idUserLogged = Number(localStorage.getItem("idUser"));

function getNodeProfile(users) {
    const nodoProfile = document.createElement("article");
    nodoProfile.className = "my-profiile";
    const isOwner = users.id === idUserLogged;
    console.log(users.id)
    console.log(idUserLogged)
    console.log(isOwner)
    nodoProfile.innerHTML = `
        <img src="${users.coverPhoto || '../images/combiProfile.png'}" alt="Foto de portada" class="cover-photo">
        <div class="profile-container-row">
            <img src="${users.avatar || '../images/ulti.png'}" alt="Foto de perfil" class="profile-photo">
            <h2>${users.userName}</h2> 
        </div>
        ${isOwner ? `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditarPerfil">
            Editar Perfil
        </button>` : ""}
    `

    const avatarCreatePost = document.getElementById("avatar-create-post");
    if (avatarCreatePost) {
        avatarCreatePost.src = users.avatar || '../images/ulti.png';
    }
        
    return nodoProfile;
}




function getProfile(idUser) {
    
    getUserProfile(idUser, (user) => {
        if (user){
            const users = new User(user);
            const nodo = getNodeProfile(users);
            sectionProfile.append(nodo);

        }
        
    
});
    
};

