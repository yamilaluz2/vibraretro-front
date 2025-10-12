let buttonFriends = document.getElementById("button-friends");

const user = document.createElement("li");
        user.className = "item-follower";
        user.innerHTML = `
            <img src="${this.imgOwner}" alt="Foto de perfil">
            <div class="user-info">
                <a href="#">${this.userName}</a>
                <button type="button" class="button-following">Seguir</button>
            </div>   
        `;
        
buttonFriends.addEventListener("click", () => {

    getAllUsers();

})