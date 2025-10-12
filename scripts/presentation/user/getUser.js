const listUser = document.getElementById("list-users")



function renderUser(user1){
    const user = document.createElement("li");
    user.className = "item-follower";
    user.innerHTML = `
                    <img src="${user1.avatar}" alt="Foto de perfil">
                    <div class="user-info">
                        <a href="#">${user1.userName}</a>
                        <button type="button" class="button-following">Seguir</button>
                    </div>`;                
    return user
};

document.addEventListener("DOMContentLoaded", ()=>{
    listUser.innerHTML = "";
    getUsers((users)=>{
        for(const jsonUser of users){
            const user1 = new User(jsonUser);
            const nodo = renderUser(user1);
            listUser.append(nodo);
        }

    })
});

