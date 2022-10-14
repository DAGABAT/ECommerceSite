export const validadores ={
    nombre: elemento => ValidandoNombre(elemento),
    mensaje: elemento => ValidandoMensaje(elemento),
    correo: elemento => ValidandoCorreo(elemento),
    contrasena: elemento => ValidandoContrasena(elemento),
    imagen: elemento => ValidandoImagen(elemento),
    categoria: elemento => ValidandoCategoria(elemento),
    nombreProducto: elemento => ValidandoNombreProducto(elemento),
    precio: elemento => ValidandoPrecio (elemento),
    descripcion: elemento => ValidandoDescripcion (elemento)
}


function ValidandoNombre (element) {
    
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'El campo de nombre no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else 
    if (IdForm.validity.tooShort == true && IdForm.validity.patternMismatch == false) {
        spanMsj.innerHTML = 'El nombre debe ser mayor a 3 caracteres';
        spanMsj.classList.add ('alerta');
    } else 
    if(IdForm.validity.patternMismatch == true) {
        spanMsj.innerHTML = 'El nombre no puede contener numeros o simbolos';
        spanMsj.classList.add ('alerta');
    }
    else{
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }

}
 
function ValidandoMensaje (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);

    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'El campo del mensaje no puede estar vacio';
        spanMsj.classList.add ('alerta');
    }else{
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}

function ValidandoCorreo (element){
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);

    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else 
    if(IdForm.validity.patternMismatch == true) {
        spanMsj.innerHTML = 'Ingrese una direccion de correo valida';
        spanMsj.classList.add ('alerta');
    }
    else{
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}

function ValidandoContrasena (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);

    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else 
    if(IdForm.validity.patternMismatch == true) {
        
        spanMsj.innerHTML = 'Debe tener por lo menos 8 caracteres y debe incluir al menos 1 letra mayuscula, 1 numero y 1 simbolo';
        spanMsj.classList.add ('alerta');
    }
    else{
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}

function ValidandoImagen (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else {
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }}

function ValidandoCategoria (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else {
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}

function ValidandoNombreProducto (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else {
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}

function ValidandoPrecio (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else {
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}

function ValidandoDescripcion (element) {
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        spanMsj.innerHTML = 'Este campo no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else {
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}