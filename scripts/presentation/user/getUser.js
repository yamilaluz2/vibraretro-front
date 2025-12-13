const listUser = document.getElementById("list-users");
const searchUserName = document.getElementById("search");
const filterUser = document.getElementById("filter-user");


const scrollInfinite = document.createElement('div');
scrollInfinite.id = 'scroll-infinite';
listUser.appendChild(scrollInfinite);

function limpiarLista() {
    const usuarios = listUser.querySelectorAll('.item-follower');
    usuarios.forEach(u => u.remove());
}

let pageNumber = 1;
let pageSize = 10;
let modoBusqueda = false;
let cargando = false;
let hayMas = true;

function renderUser(user1){
    const user = document.createElement("li");
    user.className = "item-follower";

    const buttonClass = user1.isFollowing ? "button-delete-following" : "button-following";
    const buttonText = user1.isFollowing ? "dejar de Seguir" : "Seguir";

    user.innerHTML = `
        <img src="${user1.avatar}" alt="Foto de perfil">
        <div class="user-info">
            <a class="profile-link" href="profileUser.html?id=${user1.id}">${user1.userName}</a>
            <button type="button" class="${buttonClass} button" data-user-id="${user1.id}">${buttonText}</button>
        </div>`;
    
    const profileLink = user.querySelector(".profile-link");

    if (profileLink) {
        profileLink.addEventListener("click", (e) => {
            if (!user1.isFollowing) {
                e.preventDefault();

                Swal.fire({
                    icon: "warning",
                    title: "No puedes acceder",
                    text: "Debes seguir a este usuario para poder ver su perfil",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Aceptar"
                });
            }
        });
    }
        
    const button = user.querySelector(".button");
    button.addEventListener("click", (evt) => {
        const dataUser = { id: evt.target.dataset.userId };
        followUser(dataUser, (data) => {
            if (data.userId == dataUser.id) {

                button.textContent = data.isFollowing ? "Dejar de seguir" : "Seguir";
                
                if (data.isFollowing) {
                button.classList.remove("button-following");
                button.classList.add("button-delete-following");
                user1.isFollowing = true;
                } else {
                button.classList.remove("button-delete-following");
                button.classList.add("button-following");
                user1.isFollowing = false;
                }
            }
        });
    });

    return user;
}


function cargarUsuariosFiltrados({ filter = "", reset = false, userName = ""} = {}) {
    
    if (cargando) return;
    if (!modoBusqueda && !hayMas) return;

    cargando = true;

    if (reset) {
        limpiarLista();
        pageNumber = 1;
        hayMas = true;
    }

    
    const procesarUsuarios = (users) => {
        
        if (!modoBusqueda && users.length < pageSize) {
            hayMas = false;
        }

        
        for (const jsonUser of users) {
            const user1 = new User(jsonUser);
            const nodo = renderUser(user1);
            listUser.insertBefore(nodo, scrollInfinite);
        }

        
        if (!modoBusqueda) pageNumber++;

        cargando = false;
        
    };

    if (modoBusqueda) {
        
        searchUser(userName, filter,pageNumber,pageSize, (users) => {
            
            procesarUsuarios(users);
        });
    } else {
        
        searchUser(userName,filter, pageNumber, pageSize, (users) => {
            procesarUsuarios(users);
        });
    }
}


const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    
    if (modoBusqueda || cargando || !hayMas) return;

   
    cargarUsuariosFiltrados({ filter: filterUser.value, reset: false });
}, { root: null, rootMargin: '0px', threshold: 1.0 });

observer.observe(scrollInfinite);


window.addEventListener("DOMContentLoaded", () => {
    modoBusqueda = false;
    pageNumber = 1;
    hayMas = true;
    pageSize = 10;
    cargarUsuariosFiltrados({ filter: filterUser.value, reset: true });
});


filterUser.addEventListener("change", (evt) => {
    modoBusqueda = false;
    pageNumber = 1;
    hayMas = true;
    cargarUsuariosFiltrados({ filter: evt.target.value, reset: true });
});


searchUserName.addEventListener("input", (evt) => {
    const userName = evt.target.value.trim();
    const filter = filterUser.value;

    if (!userName) {
        modoBusqueda = false;
        pageNumber = 1;
        hayMas = true;
        cargarUsuariosFiltrados({ filter, reset: true });
        return;
    }

    modoBusqueda = true;
    
    cargarUsuariosFiltrados({userName, filter, reset: true});
});












