const form = document.getElementById("formulario-create-post");
const inputdescription = document.getElementById("description")
const inputImage = document.getElementById("photo")


form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let description = inputdescription.value.trim();
    let image = inputImage.files[0];

    if(!description || !image){
        Swal.fire({
        title: 'Ups!',
        text: "Debes agregar una Descripción y una Image.",
        icon: 'warning',
        confirmButtonColor: '#f8a700',
        confirmButtonText: 'Aceptar',
        
        })
        return
    }

    const dataCreatePost = new FormData();
    dataCreatePost.append("description", description);
    dataCreatePost.append("postImage", image);
     
    
    
    createPost(dataCreatePost, (post) => {
        const postInstance = new Post(post);
        const nodo = getNode(postInstance);
        sectionPosts.prepend(nodo);
        form.reset();
    })

});
