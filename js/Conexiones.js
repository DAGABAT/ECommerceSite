const BtnLoginIndex = document.querySelector('[data-index-login]');
const BtnConsolasIndex = document.querySelector('[data-index-consolas]');
const BtnVerTodo = document.querySelector('[data-btn-VerT]');

//Abre la ventana de login
BtnLoginIndex.addEventListener('click', () => {
    window.open("./login.html", "_self");
});
//Abre la ventana detalle de producto
BtnConsolasIndex.addEventListener('click', () => {
    window.open("./detalle-producto.html", "_self");
});


BtnVerTodo.addEventListener('click', (accion)=>{
    accion.preventDefault();
    window.open("./galeria-productos.html", "_self");
})

