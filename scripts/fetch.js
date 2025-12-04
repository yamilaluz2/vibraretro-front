function serverAPIRest(url, config, success) {

    config.headers = { "Content-Type": "application/json" };

    server(url, config, success)
}


function serverFormData(url, config, success) {
    const token = getToken();
    config.headers = {"Authorization": `Bearer ${token}`};    
    server(url, config, success)

}


function serverWhithToken(url, config, success){
    const token = getToken();
    
    
    config.headers ={ "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
  };

    server(url, config, success);

};




function server(url, config, success) {
  const fullUrl = `http://localhost:5029${url}`;
  
  fetch(fullUrl, config)
    .then(async response => {
      const data = await response.json();
      if (!response.ok) {
        success({ ...data, success: false });
        return;
      }

      success(data);
    })
    .catch(error => {
      console.error("Error en fetch:", error);
      success({ success: false, message: "Error de conexión con el servidor" });
    });
}


