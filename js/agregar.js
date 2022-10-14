import { validadores } from "./Validadores.js"

const BotonMenuAdmin = document.querySelector('[data-boton-mnadmin]');
const BotonAgregar = document.querySelector('[data-boton-agregar]');
const forms = document.querySelectorAll('[data-agregar]');


const validacion = () => {
    forms.forEach(unidad => {
        const TipoFormulario = unidad.dataset.input;
        if (validadores[TipoFormulario]) {
            validadores[TipoFormulario](TipoFormulario);
        }
    }
    )
}

BotonAgregar.addEventListener('click',validacion);

BotonMenuAdmin.addEventListener('click', () => {
    window.open("./galeria-productos.html", "_self");
});