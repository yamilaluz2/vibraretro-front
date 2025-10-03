function createUser(dataUser, success) {
    const url = "/user";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUser)
    };

    //ASINCRÓNICA
    serverAPIRest(url, config, success);
}