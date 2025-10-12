function createUser(dataUserRegister, success) {
    const url = "/user";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUserRegister)
    };

    serverAPIRest(url, config, success);
}