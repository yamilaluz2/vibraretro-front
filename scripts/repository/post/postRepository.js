function createPost(dataCreatePost, success) {
    const url = "/post/createPost";

    const config = {
        method: "post",
        body:dataCreatePost
    };

    serverFormData(url,config,success) 
}


function getPost (page, pageSize,currenView,success){
    const url = `/post/getPost?currenView=${currenView}&pageNumber=${page}&pageSize=${pageSize}`;

    const config ={
        method: "get"
    };

    serverWhithToken(url,config,success);
}