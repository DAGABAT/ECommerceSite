const BtnLoginIndex = document.querySelector('[data-index-login]');
const BtnConsolasIndex = document.querySelector('[data-index-consolas]');

//Abre la ventana de login
BtnLoginIndex.addEventListener('click', () => {
    window.open("./login.html", "_self");
});
//Abre la ventana detalle de producto
BtnConsolasIndex.addEventListener('click', () => {
    window.open("./detalle-producto.html", "_self");
});

