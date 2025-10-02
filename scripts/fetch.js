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
