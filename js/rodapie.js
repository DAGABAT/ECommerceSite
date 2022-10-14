import { validadores } from "./Validadores.js";

const BotonHableConNosotros = document.querySelector('[data-boton-rodapie]');
const forms = document.querySelectorAll('[data-rodapie]');



const validacion = () => {
    console.log(forms);
    forms.forEach(unidad => {
        const TipoFormulario = unidad.dataset.input;
        if (validadores[TipoFormulario]) {
            validadores[TipoFormulario](TipoFormulario);
        }
    }
    )
}

BotonHableConNosotros.addEventListener('click', validacion);