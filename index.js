const meriendas = [
    "Café con leche con medialunas",
    "Licuado de banana con tostadas de campo",
    "Mate con bizcochitos de grasa",
    "Yogur con cereales y frutas",
    "Tostado de jamón y queso con jugo de naranja"
];

const contenedor = document.getElementById("contenedor-meriendas");
const btnContar = document.getElementById("btn-contar");
const resultadoConteo = document.getElementById("resultado-conteo");

meriendas.forEach(merienda => {
    const li = document.createElement("li");
    li.textContent = merienda;
    contenedor.appendChild(li);
});

btnContar.addEventListener("click", () => {
    resultadoConteo.textContent = `El menú cuenta actualmente con ${meriendas.length} opciones de meriendas.`;
});