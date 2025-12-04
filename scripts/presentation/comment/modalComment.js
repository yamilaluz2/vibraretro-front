const modalComentarios = document.getElementById("modalComentarios");
const titlePostModal = document.getElementById("modalComentariosLabel");
const avatarPostModal = document.getElementById("avatar-modal-post");
const descriptionPostModal = document.getElementById("description-post-modal");
const imagePostModal = document.getElementById("image-post-modal");
const heartPostModal = document.getElementById("icon-heart");
const angryPostModal = document.getElementById("icon-angry");
const listCommentModal = document.getElementById("list-comment-modal");
const btnLoadMore = document.getElementById("btn-load-more-comments");
const formCreateCommentModal = document.getElementById("form-crear-comment-modal")

let pageNumberComment = 1;
const pageSizeComment = 1;
let currentPostId = null;

function getNodeComment(comment1) {
    const commentNodo = document.createElement("li");
    commentNodo.className = "d-flex mb-3 shadow-lg";
    commentNodo.innerHTML = `
        <img src="${comment1.imgOwner}" alt="Foto de perfil" class="rounded-circle me-2 width-user">
        <div>
            <h4 class="mb-1">${comment1.nameOwner}</h4>
            <p class="mb-0">${comment1.body}</p>
        </div>`;
    return commentNodo;
}


modalComentarios.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const idPost = button.dataset.postid;

    currentPostId = idPost;
    pageNumberComment = 1;
    listCommentModal.innerHTML = "";   
    btnLoadMore.style.display = "block"; 

    GetPostModal(idPost);
    loadComments();   
});


function loadComments() {
    GetComment(currentPostId, pageNumberComment, pageSizeComment, (comments) => {

        
        if (comments.length === 0) {
            btnLoadMore.style.display = "none";
            return;
        }

        
        for (const jsonComment of comments) {
            const comment1 = new Comment(jsonComment);
            const nodo = getNodeComment(comment1);
            listCommentModal.append(nodo);
        }

        
        pageNumberComment++;
    });
}


btnLoadMore.addEventListener("click", () => {
    loadComments();
});


function GetPostModal(idPost) {
    GetPostId(idPost, (post) => {
        postModal = new Post(post);

        titlePostModal.textContent = postModal.nameOwner;
        avatarPostModal.src = postModal.imgOwner;
        descriptionPostModal.textContent = postModal.body;
        imagePostModal.src = postModal.img;
        heartPostModal.textContent = postModal.countLove;
        angryPostModal.textContent = postModal.countAngry;
    });
}

heartPostModal.addEventListener("click",()=>{
    reaction(currentPostId,"like")
})

angryPostModal.addEventListener("click",()=>{
    reaction(currentPostId,"Angry")
})


function reaction (postId,tipo){
    
    const bodyData = {
        idPost: postId,
        reactionType: tipo
    };

    ReactionPost(bodyData,(data)=>{
        
        const heartIcon = heartPostModal;
        const angryIcon = angryPostModal;

        
        heartIcon.textContent = data.countLove;
        angryIcon.textContent = data.countAngry;

        
        heartIcon.classList.remove("active");
        angryIcon.classList.remove("active");

        
        if (data.userHasReacted) {
            if (data.reactionType.toLowerCase() === "like") {
                heartIcon.classList.add("active");
            } else if (data.reactionType.toLowerCase() === "angry") {
                angryIcon.classList.add("active");
            }
        }
    });
}


formCreateCommentModal.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    const textarea = formCreateCommentModal.querySelector("textarea"); 
        const description = textarea.value.trim();

        let commentModal= {
            idPost: currentPostId,
            description:description  
        };

        CreateComment(commentModal, (comment)=>{
            textarea.value = "";
            const commentInstance = new Comment(comment);
            const nodo = getNodeComment(commentInstance);
            listCommentModal.prepend(nodo);

            
        })
})