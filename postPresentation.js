

const sectionPosts = document.getElementById("posts_collection");

page = 1;
pageSize = 10;
orderBy = "postDate";
direction = "desc";


getPost (page, pageSize, orderBy, direction, (posts) => {
    for(jsonPost of posts) {
        const post = new Post(jsonPost);
        const nodo = post.getNode();
        sectionPosts.append(nodo);
    }
});

//eliminar los article 