function createUser(dataUserRegister, success) {
    const url = "/User/register";

    const config = {
        method: "POST",
        body: JSON.stringify(dataUserRegister)
    };

    serverAPIRest(url, config, success);
}