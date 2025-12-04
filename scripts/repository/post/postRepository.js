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