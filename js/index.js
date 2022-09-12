const seccion = document.querySelector("section#contenido")
const loader = document.querySelector("section.loader")
const URL = "/js/carritoproductos.json"
let tf = []
let contenidoHTML=""

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");
let numeroCarrito = document.querySelector(".numero")
let totalCarrito = document.querySelector(".total")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function crearCards() {
productos.forEach((prod) => {
  containerDiv.innerHTML += `<div style="padding: 20px; background-color: aquamarine; border: 2px solid black;">
  <h3>${prod.nombre}</h3>
  <h3>$${prod.precio}</h3>
  <img class="card-img" src="${prod.img}" />
  <button class="btnCarrito btn-primary button" id="btn-agregar${prod.id}">Agregar</button>
  </div>`;
});
agregarFuncionalidad();
}

//FETCH

const retornoContenido = () => {
  return '<div class = "card">
  <img class = "poster" id = "" src= "${contenido.poster}" alt = "${contenido titulo}" title = "${contenido.titulo}">
    </div>'
}

const retornoCardError = () => {
  return '<div class="error-contenido">
  <p>Parece que hubo un error:(</p>
  <p>Intenta nuevamente en unos segundos...</p>
  </div>'
  }

function agregarFuncionalidad() {
productos.forEach((prod) => {
  document
    .querySelector(`#btn-agregar${prod.id}`)
    .addEventListener("click", () => {
    agregarAlCarrito(prod);
    });
});
}

function agregarAlCarrito(prod) {
let existe = carrito.some((productoSome) => productoSome.id === prod.id);
if (existe === false) {
  prod.cantidad = 1;
  carrito.push(prod);
} else {
  let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
  prodFind.cantidad++;
}
renderizarCarrito();
toastSwal("El producto ha sido agregado al carrito!",'info',"green")
}

function renderizarCarrito() {
carritoDiv.innerHTML = "";
carrito.forEach((prod) => {
  carritoDiv.innerHTML += `<div style="padding: 20px; background-color: #42B881; border: 2px solid black;">
      <h3>${prod.nombre}</h3>
      <h3>CANTidAD: ${prod.cantidad}</h3>
      <img class="card-img" src="${prod.img}" />
      <button class="btnCarrito btn-dark" id="btn-borrar${prod.id}">Borrar</button>
      <button class="btnCarrito btn-dark" id="btn-menos${prod.id}">-</button>
      </div>`;
});
localStorage.setItem("carrito", JSON.stringify(carrito));
borrarProducto();
calcularTotal ();
}

function borrarProducto() {
carrito.forEach((prod) => {
  document
    .querySelector(`#btn-borrar${prod.id}`)
    .addEventListener("click", () => {
      carrito = carrito.filter(
        (productoFilter) => productoFilter.id !== prod.id
      );
      renderizarCarrito();
      toastSwal("El producto ha sido eliminado del carrito!",'info',"red")
    });
});
}

function calcularTotal() {
let total = carrito.reduce((acc, prod) => (acc + (prod.precio*prod.cantidad)),0);
totalCarrito.innerHTML = total
}

crearCards();
renderizarCarrito();

const toastSwal = (mensaje, icono, bgcolor)=>{
Swal.fire({
  toast: true,
  position: 'top end',
  text: mensaje,
  icon: icono,
  showConfirmButton: false,
  timer:4000,
  background: bgcolor,
  color:'white'
})
}

//FETCH

const cargarContenido = async () => {
  await fetch('js/carritoproductos.json')
    .then((response) => response.json())
    .then((data) => {
      tf = data
      tf.forEach(contenido => {
        contenidoHTML += retornoCardContenido(contenido)
      });
      seccion.innerHTML = contenidoHTML
    })
    .catch((error) => {
      seccion.innerHTML = retornoCardError()
    })
    .finally(() => loader.innerHTML = "")
}
cargarcontenido()


