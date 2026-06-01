const tarjetas = document.querySelectorAll(".tarjeta");
const contadorElemento = document.getElementById("contador");

function actualizarContador() {
    const seleccionadas = document.querySelectorAll(".tarjeta.seleccionada");
    contadorElemento.textContent = seleccionadas.length;
}

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("seleccionada");
        actualizarContador();
    });
});