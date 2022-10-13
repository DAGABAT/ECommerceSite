const BtnLoginIndex = document.querySelector('[data-index-login]');
const BtnConsolasIndex = document.querySelector('[data-index-consolas]');
const BotonHableConNosotros = document.querySelector('[data-boton-rodapie]');


const formsRodapie = document.querySelectorAll('[data-input-rodapie]');


/*formsRodapie.forEach ( elemento =>{

}  )*/

const validacion = () => {
    console.log(formsRodapie);
    formsRodapie.forEach(elemento => {
        console.log(elemento);
        if (elemento.value = '') {
            console.log('elemento vacio');
        }
    });
}

BtnLoginIndex.addEventListener('click', () => {
    window.open("./login.html", "_self");
});

BtnConsolasIndex.addEventListener('click', () => {
    window.open("./detalle-producto.html", "_self");
});

BotonHableConNosotros.addEventListener('click', validacion);
