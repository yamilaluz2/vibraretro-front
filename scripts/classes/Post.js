class Post {
    constructor(jsonPost) {
        this.idOwner = jsonPost.idOwner;
        this.imgOwner = jsonPost.nameOwner;
        this.nameOwner =jsonPost.imgOwner ;/*cambiar orden en el backend*/
        this.body = jsonPost.body;
        this.img = jsonPost.image;
        this.countLove = jsonPost.countLove;
        this.countAngry = jsonPost.countAngry;
        this.countComments = jsonPost.countComments;
        this.id = jsonPost.id;
    }

}