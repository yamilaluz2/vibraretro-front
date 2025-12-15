const butonLogout = document.getElementById("logout");

butonLogout.addEventListener("click", ()=>{
   
    LogoutUser((data)=>{
        
        if(data.success){
            deleteToken();
            deleteIdUser();
            window.location.href = "/index.html";
        }

    })  
     
})