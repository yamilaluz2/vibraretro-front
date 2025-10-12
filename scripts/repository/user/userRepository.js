function createUser(dataUserRegister, success) {
    const url = "/user";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUserRegister)
    };

    serverAPIRest(url, config, success);
}

function getAllUsers(success) {
    const url = "/follower/getUser";

    const config = {
        method: "GET",
    };
    
    serverAPIRest(url, config, success);

}