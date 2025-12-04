

    getNode = () => {
        const post = document.createElement("article");
        post.className = "post";
        post.innerHTML = `
            <div class="post-header">
                <div class="post-header-user">
                    <img class="user-post" src="${this.imgOwner}" alt="Foto de perfil">
                    <h3 id="title-post">${this.nameOwner}</h3>
                </div>    
            </div>
            <div class="post-main">
                <p>${this.body}</p>
                <img src="${this.img}" alt="Imagen del post">
            </div>
            <div class="post-reaction">
                <button type="button"><i class="bi bi-heart-fill reaction-heart">${this.countLove}</i></button>
                <button type="button"><i class="bi bi-emoji-angry-fill reaction-angry">${this.countAngry}</i></button>
                <button type="submit" class="btn btn-link p-0" data-bs-toggle="modal" data-bs-target="#modalComentarios"><i class="bi bi-chat-square-fill reaction-comment">${this.countComments}</i></button>
            </div>    
        `;

        const form = document.createElement("form");
        form.className = "form-comment";
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            //código a enviar al backend.
            console.log(this.id); // y lo que capturemos del input comentario
            console.log(evt.srcElement[0].value);
        });

        form.innerHTML = `
            <textarea name="comment" placeholder="Comentar">${this.comment}</textarea>
            <button type="submit">${this.buttonComment}</i></button>
        `;

        post.append(form);

        return post;    
    }
}