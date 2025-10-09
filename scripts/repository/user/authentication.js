function setToken(token){
    localStorage.setItem("token",token);
}

function getToken(){
    return localStorage.getItem("token");
}

function deleteToken(){
    localStorage.removeItem("token");
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
        success();
    })
}