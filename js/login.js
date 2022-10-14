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

BotonEntrar.addEventListener('click',validacion);