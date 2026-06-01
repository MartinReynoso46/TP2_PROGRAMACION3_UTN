const elementos = [
    { nombre: "God of War Ragnarök", categoria: "Juegos", desc: "La culminación de la saga nórdica." },
    { nombre: "River Plate vs Boca Juniors", categoria: "Deportes", desc: "El superclásico del fútbol argentino." },
    { nombre: "FIFA 26 / EA Sports FC", categoria: "Juegos", desc: "Simulador de fútbol virtual." },
    { nombre: "Torneo de Rugby Sevens", categoria: "Deportes", desc: "Máxima velocidad y destreza física." },
    { nombre: "Elden Ring", categoria: "Juegos", desc: "Desafío extremo en las Tierras Intermedias." },
    { nombre: "Final de la Copa Libertadores", categoria: "Deportes", desc: "La gloria eterna de América." }
];

const contenedor = document.getElementById("contenedor-listado");
const btnTodos = document.getElementById("btn-todos");
const btnJuegos = document.getElementById("btn-juegos");
const btnDeportes = document.getElementById ("btn-deportes");

function mostrarElementos(lista) {
    contenedor.innerHTML = "";
    
    lista.forEach(item => {
        const bloque = document.createElement("div");
        bloque.classList.add("tarjeta"); 
        
        bloque.innerHTML = `
            <h3>${item.nombre}</h3>
            <p style="color: #7f8c8d; font-size: 0.85rem; margin-bottom: 5px;">Categoría: ${item.categoria}</p>
            <p>${item.desc}</p>
        `;
        contenedor.appendChild(bloque);
    });
}

mostrarElementos(elementos);

btnTodos.addEventListener("click", () => {
    mostrarElementos(elementos);
});

btnJuegos.addEventListener("click", () => {
    const filtrados = elementos.filter(item => item.categoria === "Juegos");
    mostrarElementos(filtrados);
});

btnDeportes.addEventListener("click", () => {
    const filtrados = elementos.filter(item => item.categoria === "Deportes");
    mostrarElementos(filtrados);
});