const formulario = document.getElementById("formulario-create-post");


formulario.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const description = document.getElementById("description").value.trim();
    const photo = document.getElementById("photo").files[0];

    const dataCreatePost = new FormData();
    dataCreatePost.append("description", description);
    dataCreatePost.append("postImage", photo);
     
    
    
    createPost(dataCreatePost, (post) => {
        const postInstance = new Post(post);
        const nodo = getNode(postInstance);
        sectionPosts.prepend(nodo);
        formulario.reset();
    })

});
