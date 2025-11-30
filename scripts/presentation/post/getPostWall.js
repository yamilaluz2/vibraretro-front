let sectionPosts = document.getElementById("posts_collection");
const currenView = "wall";
let pageNumber = 1;
let pageSize = 2;
let cargando = false;
let hayMas = true;

const scrollInfinite = document.createElement('div');
scrollInfinite.id = 'scroll-infinite';
sectionPosts.appendChild(scrollInfinite);

function getNode(post1) {
    const post = document.createElement("article");
    post.className = "post";
    idUserLogin = Number(getIdUser());
    console.log (idUserLogin);
    const canEdit = idUserLogin === post1.idOwner;
    console.log(post1.idOwner);
    console.log(canEdit);
    post.innerHTML = `
        <div class="post-header">
            <div class="post-header-user">
                <img class="user-post" src="${post1.imgOwner}" alt="Foto de perfil">
                <h3 id="title-post">${post1.nameOwner}</h3>
            </div>
            ${ canEdit 
                ? `<button type="button" data-bs-toggle="modal" data-bs-target="#modalEditarPost">
                        <i class="bi bi-pencil-fill icon-edit-post"></i>
                   </button>`
                : ``
            }    
        </div>
        <div class="post-main">
            <p>${post1.body}</p>
            <img src="${post1.img}" alt="Imagen del post">
        </div>
        <div class="post-reaction">
            <button type="button"><i class="bi bi-heart-fill reaction-heart">${post1.countLove}</i></button>
            <button type="button"><i class="bi bi-emoji-angry-fill reaction-angry">${post1.countAngry}</i></button>
            <button type="submit" class="btn btn-link p-0" data-bs-toggle="modal" data-bs-target="#modalComentarios">
                <i class="bi bi-chat-square-fill reaction-comment">${post1.countComments}</i>
            </button>
        </div>
    `;
    const form = document.createElement("form");
    form.className = "form-comment";
    form.innerHTML = `
        <textarea name="comment" placeholder="Comentar"></textarea>
        <button type="submit">Publicar comentario</button>
    `;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        console.log(post1.id);
        console.log(evt.srcElement[0].value);
    });
    post.append(form);
    return post;
}

function cargarPosts() {
    if (cargando || !hayMas) return;

    cargando = true;

    getPost(pageNumber, pageSize,currenView, (posts) => {
        if (posts.length < pageSize) {
            hayMas = false;
        }

        for (const jsonPost of posts) {
            const post1 = new Post(jsonPost);
            const nodo = getNode(post1);
            sectionPosts.insertBefore(nodo, scrollInfinite);
        }

        pageNumber++;
        cargando = false;
    });
}

const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    if (cargando || !hayMas) return;

    cargarPosts();
}, {
    root: null,
    rootMargin: "200px",
    threshold: 0.5
});

window.addEventListener("DOMContentLoaded", () => {
    cargarPosts();
    observer.observe(scrollInfinite);
});


