const modalEditPost = document.getElementById("modalEditarPost")
const descriptionPost = document.getElementById("description-post-edit")
const imagePost = document.getElementById("image-post-edit")
const formularioEditarPost = document.getElementById("form-editar-post")
const imageInput = document.getElementById("image-input")
const buttonDelete= document.getElementById("button-delete-post")
let idPost= null; 




modalEditPost.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    idPost = button.dataset.postid;
    
    GetPostId(idPost,(post)=>{
        if (post){
        let postModal = new Post(post);

        descriptionPost.textContent = postModal.body;
        imagePost.src = postModal.img;
        }
        
    })
});

imagePost.addEventListener("click",()=>{
    imageInput.click()

})

formularioEditarPost.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const dataPost = new FormData();
    dataPost.append("id", idPost);
    dataPost.append("description", descriptionPost.value.trim(),);
    dataPost.append("postImage", imageInput.files[0]);
    
    UpdatePost(dataPost , (post)=>{
        if(post){
            const article = document.querySelector(`article[data-id="${post.id}"]`);
            if (article) {
            
            article.querySelector(".post-main p").textContent = post.body;
            article.querySelector(".post-main img").src = post.image;
            
            
            const modal = bootstrap.Modal.getInstance(
            modalEditPost)
            modal.hide();
            
        }
    }

    })
})


buttonDelete.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás deshacer esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {

            
            DeletePost(idPost, (data) => {
                if (data.success) {

                   
                    Swal.fire(
                        'Eliminado!',
                        'El post fue eliminado correctamente.',
                        'success'
                    );

                    
                    const postNode = document.querySelector(`article[data-id="${idPost}"]`);
                    if (postNode) {
                        postNode.remove();
                    }

                    
                    const modal = bootstrap.Modal.getInstance(modalEditPost);
                    if (modal) {
                        modal.hide();
                    }
                } else {
                    
                    Swal.fire(
                        'Error',
                        'No se pudo eliminar el post.',
                        'error'
                    );
                }
            });
        }
    });
});








