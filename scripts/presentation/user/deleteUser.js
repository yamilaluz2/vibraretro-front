const form = document.getElementById("form-delete-user");
const inputName = document.getElementById("name")
const inputMail = document.getElementById("mail")
const inputUserName = document.getElementById("userName")
const inputPassword = document.getElementById("password")

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    let name = inputName.value.trim();
    let mail = inputMail.value.trim();
    let userName = inputUserName.value.trim();
    let password = inputPassword.value.trim();

    if (!name || !mail || !userName || !password){

        Swal.fire({
            title: "Faltan datos",
            text: "Completá todos los campos para eliminar tu cuenta.",
            icon: "warning",
            confirmButtonColor: '#f8a700',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    Swal.fire({
        title: "¿Estás seguro?",
        text: "Tu cuenta será eliminada permanentemente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        confirmButtonColor: '#f8a700',
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            
            let dataUser={
                name:name,
                mail:mail,
                userName:userName,
                password:password
            }

            DeleteUser(dataUser, (data)=>{

                if (data.success){
                    
                    Swal.fire({
                        title: "Cuenta eliminada",
                        text: "Gracias por haber sido parte de nuestra comunidad. Esperamos tenerte de nuevo. ¡Hasta pronto!",
                        icon: "success",
                        confirmButtonText: "Aceptar"
                    }).then(() => {
                        window.location.href = "../index.html";
                    });
                }else{
                    Swal.fire({
                        title: "Error",
                        text: data.message,
                        icon: "error",
                        confirmButtonText: "Aceptar"
                    })
                }


            })
            
            
        }
    });
});
