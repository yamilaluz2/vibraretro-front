const containerPosts = document.getElementById("posts_collection");

containerPosts.addEventListener("click", (e) => {
    
    const icon = e.target.closest("i"); 
    if (!icon) return;
    
    
    const article = e.target.closest("article"); 
    const postId = article.dataset.id; 
    

    if (icon.classList.contains("reaction-heart")) {
        darLike(postId,"like",article);
    }else if (icon.classList.contains("reaction-angry")) {
        darLike(postId,"angry", article);
    }
});


function darLike(postId, tipo, article) {
    const bodyData = {
        idPost: postId,
        reactionType: tipo
    };

    ReactionPost(bodyData, (data) => {
        
        const heartIcon = article.querySelector(".reaction-heart");
        const angryIcon = article.querySelector(".reaction-angry");

       
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



