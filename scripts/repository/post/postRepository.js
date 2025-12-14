function createPost(dataCreatePost, success) {
    const url = "/post/createPost";

    const config = {
        method: "post",
        body:dataCreatePost
    };

    serverFormData(url,config,success) 
}


function getPost (userId,page, pageSize,currenView,success){
    const url = `/post/getPost?id=${userId}&currenView=${currenView}&pageNumber=${page}&pageSize=${pageSize}`;

    const config ={
        method: "get"
    };

    serverWhithToken(url,config,success);
}

function ReactionPost(data,success){
    const url = "/reaction/like";

    const config = {
        method: "post",
        body:JSON.stringify(data)
    };

    serverWhithToken(url,config,success)
}


function GetPostId(data,success){
    const url = `/post/getPostId?idPost=${data}`;

    const config = {
        method: "get",
        
    };

    serverWhithToken(url,config,success)
}


function UpdatePost(data,success){
    const url = `/post/Update`;

    const config = {
        method: "put",
        body:data
        
    };

    serverFormData(url,config,success)
}

function DeletePost(idPost,success){
    const url = `/post/${idPost}`;

    const config = {
        method: "Delete",
        
        
    };

    serverWhithToken(url,config,success)
}