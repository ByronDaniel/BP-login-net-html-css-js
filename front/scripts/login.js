window.addEventListener("DOMContentLoaded",()=>{
    const API_URL = "https://localhost:7111/api/Usuario";
    const BOTON_INICIAR_SESION = document.querySelector("#botonIniciarSesion");
    const INPUT_USUARIO = document.querySelector("#inputUsuario");
    const INPUT_CONTRASENA = document.querySelector("#inputContrasena");
    const ALERT_USUARIO = document.querySelector("#alertUsuario");
    const ALERT_CONTRASENA = document.querySelector("#alertContrasena");
    let existeUsuario = false;
    let contrasenaCorrecta = false;
    let cumpleLoginUsuario = false;
    let cumpleLoginContrasena = false;
    //Validar Existencia Usuario
    async function validarExistenciaUsuario(usuario){
        let response = await fetch(`${API_URL}/${usuario}`);
        let json = await response.json();
        return json;
    }

    //Validar Usuario Contraseña
    async function ValidarUsuarioContraseña(usuario, contrasena){
        let response = await fetch(`${API_URL}/${usuario}/${contrasena}`);
        let json = await response.json();
        return json;
    }
    //Validar Existencia Usuario
    INPUT_USUARIO.addEventListener("keyup",()=>{
        let usuarioValor = INPUT_USUARIO.value;
        validarExistenciaUsuario(usuarioValor).then(res=>{
            existeUsuario = res;
            if(existeUsuario){
                ALERT_USUARIO.innerHTML = ""
                cumpleLoginUsuario = true;
            }else{
                ALERT_USUARIO.innerHTML = 
                `<i class="fa-solid fa-circle-exclamation"></i> El Usuario no existe en el sistema`
                cumpleLoginUsuario = false;
            }
        }).catch(err=>{
            console.log(err);
        })
    })

    INPUT_CONTRASENA.addEventListener("focus",()=>{
        ALERT_CONTRASENA.innerHTML = "";
        cumpleLoginContrasena = false;
    })

    BOTON_INICIAR_SESION.addEventListener("click",(e)=>{
        cumpleLoginContrasena = false;
        e.preventDefault();
        let usuarioValor = INPUT_USUARIO.value;
        let contrasenaValor = INPUT_CONTRASENA.value;
        if(usuarioValor == null || usuarioValor == ""){
            ALERT_USUARIO.innerHTML = 
                    `<i class="fa-solid fa-circle-exclamation"></i> Usuario es Requerido`
        }
        if(contrasenaValor == null || contrasenaValor == ""){
            ALERT_CONTRASENA.innerHTML = 
                    `<i class="fa-solid fa-circle-exclamation"></i> Contraseña es Requerida`
        }
        if((usuarioValor != null && usuarioValor != "") && (contrasenaValor != null && contrasenaValor != "") ){
            ValidarUsuarioContraseña(usuarioValor, contrasenaValor).then(res=>{
                contrasenaCorrecta = res;
                if(contrasenaCorrecta){
                    ALERT_CONTRASENA.innerHTML = ""
                    cumpleLoginContrasena = true;
                    if(cumpleLoginUsuario == true && cumpleLoginContrasena == true){
                        localStorage.setItem("sesion",{usuarioValor})
                        window.location.href = "pages/usuarios.html";
                    }
                }else{
                    ALERT_CONTRASENA.innerHTML = 
                    `<i class="fa-solid fa-circle-exclamation"></i> Contraseña incorrecta`
                    cumpleLoginContrasena = false;
                }
            }).catch(err=>{
                console.log(err);
            }) 
        }
    });
})