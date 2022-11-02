
const btnAgregar = document.querySelector('[data-btn-agregarP]');


btnAgregar.addEventListener('click', (accion)=>{
    accion.preventDefault();
    window.open("./agregar-productos.html", "_self");
})


