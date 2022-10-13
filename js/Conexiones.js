import { validadores } from "./Validadores.js";

const BtnLoginIndex = document.querySelector('[data-index-login]');
const BtnConsolasIndex = document.querySelector('[data-index-consolas]');
const BotonHableConNosotros = document.querySelector('[data-boton-rodapie]');


const formsRodapie = document.querySelectorAll('[data-input]');


const validacion = () => {
    console.log(formsRodapie);
    formsRodapie.forEach(unidad => {
        const TipoFormulario = unidad.dataset.input;
        if (validadores[TipoFormulario]) {
            validadores[TipoFormulario](TipoFormulario);
        }
    }

    )
}

//Abre la ventana de login
BtnLoginIndex.addEventListener('click', () => {
    window.open("./login.html", "_self");
});
//Abre la ventana detalle de producto
BtnConsolasIndex.addEventListener('click', () => {
    window.open("./detalle-producto.html", "_self");
});

BotonHableConNosotros.addEventListener('click', validacion);
