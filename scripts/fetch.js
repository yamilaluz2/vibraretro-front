/*function server(url, config, success) {
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
*/

function server(url, config, success) {
  fetch(url, config)
    .then(async response => {
      if (!response.ok) {
        let errorMessage = `HTTP error ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          // El cuerpo no era JSON, mantenemos el mensaje por defecto
        }
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .then(data => {
      success(data); // solo si todo salió bien
    })
    .catch(error => {
      console.error("Error en login:", error);
      alert(`Error: ${error.message}`);
    });
}
