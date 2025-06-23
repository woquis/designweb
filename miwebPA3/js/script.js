//dato d elos prodcutos
const productos = [
    { id: 1, nombre: "Poncho andino", precio: 280 },
    { id: 2, nombre: "Pantalón andino", precio: 95 },
    { id: 3, nombre: "Sandalias andinas", precio: 35 },
    { id: 4, nombre: "Sombrero andino", precio: 180 },
    { id: 5, nombre: "Montera andino", precio: 150 },
    { id: 6, nombre: "Pollera andino", precio: 500 },
    { id: 7, nombre: "Manta andino", precio: 220 }
];

let carrito = [];

// cargar productos a lista en pantalla
window.onload = () => {
    const contenedor = document.getElementById("productos");
    productos.forEach(p => {
        const div = document.createElement("div");
        
        div.className = "producto";
        div.innerHTML = `
            <h3>${p.nombre}</h3>
            <p>S/ ${p.precio}</p>
            <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
};

// agregar proctuctos al carrtio
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Actualizar vista previa del carrito
function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const totalSpan = document.getElementById("totalCarrito");
    const contador = document.getElementById("contadorCarrito");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} x ${item.cantidad} - S/${item.precio * item.cantidad}`;
        lista.appendChild(li);
        total += item.precio * item.cantidad;
    });

    totalSpan.textContent = total.toFixed(2);
    contador.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
}

// mostra u ocultar carrito - con clik en carrito
document.getElementById("verCarrito").addEventListener("click", () => {
    const carritoSection = document.getElementById("carrito");
    carritoSection.style.display = carritoSection.style.display === "none" ? "block" : "none";
});

// vacias carrtio
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}