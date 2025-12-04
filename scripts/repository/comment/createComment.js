function CreateComment (comment,success){
    const url = "/comment/createComment";

    const config = {
        method: "POST",
        body: JSON.stringify(comment)
    };

    serverWhithToken(url,config,success);
}

function GetComment (data,pageNumber,pageSize,success){
    const url = `/comment/getComment?idPost=${data}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

    const config = {
        method: "get"
        
    };

    serverWhithToken(url,config,success);
}