var attempt =3;

function validate(){


    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if(usuario== "admin" && password=="1234@"){
        alert("Datos Correctos");
        window.location.href ="Form.html";
        return false;

    }

    if(usuario== "cliente1" && password=="123acceso"){
        alert("Datos Correctos");
        window.location.href ="MiPaginaWeb.html";
        return false;

    }else{
        attempt--;
        alert("Datos incorrectos tiene "+attempt+ " intentos")

        if(attempt==0){
            document.getElementById("usuario").disabled= true;
            document.getElementById("password").disabled=true;
            document.getElementById("ingresar").disabled=true;
            return false;

        }
    }



}