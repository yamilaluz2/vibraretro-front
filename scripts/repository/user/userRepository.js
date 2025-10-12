function createUser(dataUserRegister, success) {
    const url = "/user/register";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUserRegister)
    };

    serverAPIRest(url, config, success);
}


function getUsers(success){
    const url = "/Follower/getUser";

    const config ={
        method: "get"
    };

    serverWhithToken(url,config,success);
}

function updateUser(dataUserUpdate,success){
    const url = "/user/Update";

   const config = {
        method: "put",
        body:dataUserUpdate
    };

    serverFormData(url,config,success)    
}