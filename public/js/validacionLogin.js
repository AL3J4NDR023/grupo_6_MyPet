
window.addEventListener("load", function(){
    
    const formulario= document.getElementById("formulario");
    
    formulario.onsubmit=(e)=>{
       
        const errores=[];
        const nombre= document.getElementById("email");
       const password= document.getElementById("password")
        if(nombre.value=="" || password.value==""){
            errores.push("Debes de ingresar todos los campos");
        }else if(password.value.length<4){
            errores.push("El contraseña debe tener mas de 3 caracteres")
        }

        if(errores.length >0){
            e.preventDefault();
            const divErrores= document.getElementById('ulErrores')
        console.log(divErrores)
        for (let i = 0; i < errores.length; i++) {
            
            divErrores.innerHTML= `<li class="alert alert-danger">${errores[i]}</li>`
            
        }
        
        }

        
    }

})