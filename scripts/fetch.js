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
  console.log("➡️ Fetch a:", fullUrl);
  console.log("Config:", config);

  fetch(fullUrl, config)
    .then(async response => {
      console.log("📡 Status:", response.status);
      if (!response.ok) {
        const text = await response.text();
        console.error("❌ Error HTTP:", response.status, text);
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Datos recibidos:", data);
      success(data);
    })
    .catch(error => {
      console.error("🚨 Error en fetch:", error);
    });
}



function server1(url, config, success) {
    fetch(`http://localhost:5029${url}`, config)
        .then(response => {
            if (!response.ok) {
                //throw new Error(`HTTP error ${response.status}`);
                alert("Error ojoo");
                return;
            }
            return response.json();
        })
        .then(data => {
            success(data);
        })
        .catch(error => {
            alert("Error al iniciar sesión eze");
        });
}





