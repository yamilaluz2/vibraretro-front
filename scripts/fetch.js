function serverAPIRest(url, config, success) {
    config.headers = { "Content-Type": "application/json" };

    server(url, config, success)
}

function serverFormData(url, config, success) {
    config.headers = { "Content-Type": "application/json" };

    server(url, config, success)
}

function server(url, config, success) {
    fetch(`http://localhost:5029${url}`, config)
        .then(response => {
            if (!response.ok) {
                //throw new Error(`HTTP error ${response.status}`);
                alert("Error");
                return;
            }
            return response.json();
        })
        .then(data => {
            success(data);
        })
        .catch(error => {
            alert("Error al iniciar sesión");
        });
}
function server(url, config, success) {
    fetch(url, config)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            success();
        })
        .catch(error => {
            alert("Error al iniciar sesión");
        });
}




