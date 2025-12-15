function setToken(token){
    localStorage.setItem("token",token);
}

function getToken(){
    return localStorage.getItem("token");
}

function deleteToken(){
    localStorage.removeItem("token");
}

function setIdUser(idUser){
    localStorage.setItem("idUser",idUser);
}

function getIdUser(){
    return localStorage.getItem("idUser");
}

function deleteIdUser(){
    localStorage.removeItem("idUser");
}


function authentication(dataUser,success){
    const url = "/user/login";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUser)
    };

    serverAPIRest(url, config, (data) => {
        if(data.token){
            setToken(data.token);
        }
        if(data.idUser){
            setIdUser(data.idUser);
        }
        success(data);
    })
}

function LogoutUser(success){
    const url = "/user/Logout";

    const config = {
        method: "POST"
    };

    serverWhithToken(url,config,success)
}