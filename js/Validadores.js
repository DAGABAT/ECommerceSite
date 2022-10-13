export { validadores }

const validadores ={
    nombre: elemento => ValidandoNombre(elemento),
    mensaje: elemento => ValidandoMensaje(elemento),
}


function ValidandoNombre (element) {
    
    const IdForm = document.querySelector(`[data-input=${element}]`);
    const spanMsj = document.querySelector(`[data-span=${element}]`);
    
    if (IdForm.textContent == 0 && IdForm.value == 0) {
        console.log('El campo no puede estar vacio');
        spanMsj.innerHTML = 'El campo de nombre no puede estar vacio';
        spanMsj.classList.add ('alerta');
    } else 
    if (IdForm.validity.tooShort == true && IdForm.validity.patternMismatch == false) {
        console.log('El nombre debe ser mayor a 3 caracteres');
        spanMsj.innerHTML = 'El nombre debe ser mayor a 3 caracteres';
        spanMsj.classList.add ('alerta');
    } else 
    if(IdForm.validity.patternMismatch == true) {
        console.log('El nombre debe contener unicamente texto');
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
        console.log('El campo no puede estar vacio');
        spanMsj.innerHTML = 'El campo del mensaje no puede estar vacio';
        spanMsj.classList.add ('alerta');
    }else{
        spanMsj.innerHTML = '';
        spanMsj.classList.remove ('alerta');
         }
}