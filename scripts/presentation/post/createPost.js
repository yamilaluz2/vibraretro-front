const formulario = document.getElementById("formulario-create-post");

function redirection() {
    window.location.href = "/pages/wall.html";
}


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const dataCreatePost = new FormData();
    dataCreatePost.append("description", document.getElementById("description").value);
    dataCreatePost.append("postImage", document.getElementById("photo").files[0]);
     
    
    
    createPost(dataCreatePost, (data) => {
        redirection();
    })
});
