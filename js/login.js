import { validadores } from "./Validadores.js"

const BotonEntrar = document.querySelector('[data-boton-entrar]');
const forms = document.querySelectorAll('[data-entrar]');


const validacion = () => {
    forms.forEach(unidad => {
        const TipoFormulario = unidad.dataset.input;
        if (validadores[TipoFormulario]) {
            validadores[TipoFormulario](TipoFormulario);
        }
    }
    )
}

BotonEntrar.addEventListener('click', (accion) => {
    accion.preventDefault();
    validacion();
    const signal = document.querySelectorAll('[data-entrar]');
    let sum = 0;
    signal.forEach((elemento) => {
       if (elemento.dataset.id==1){
        sum++;
       }});
    if(sum==2){
        window.open("./agregar-productos.html", "_self");
    }
});