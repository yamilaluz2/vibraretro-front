function createUser(dataUserRegister, success) {
    const url = "/user/register";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUserRegister)
    };

    serverAPIRest(url, config, success);
}


/*function getUsers(success){
    const url = "/Follower/getUser";

    const config ={
        method: "get"
    };

    serverWhithToken(url,config,success);
}*/

function updateUser(dataUserUpdate,success){
    const url = "/user/Update";

   const config = {
        method: "put",
        body:dataUserUpdate
    };

    serverFormData(url,config,success)    
}

function followUser(dataUserFollow,success){
    const url = "/Follower/follow";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUserFollow)
    };

    serverWhithToken(url,config,success);
}

function searchUser(data, filtro,pageNumber, pageSize, success){

    const url = `/Follower/BuscarUserName?userName=${data}&filtro=${filtro}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

    const config = {
        method: "get"
    };

    serverWhithToken(url,config,success);
}



function getUserProfile(data , success){
    const url = `/user/miProfile?data=${data}`;
    const config = {
        method: "get"
    };

    serverWhithToken(url,config,success);
}