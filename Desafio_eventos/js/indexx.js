const productos = [
    {id:1 , nombre:"POLERA BLANCA PINK FLOYD" , precio:15990},
    {id:2 , nombre:"POLERA NEGRA JOY DIVISION" , precio:16990},
    {id:3 , nombre:"POLERA BLANCA NEW KIDS ON THE BLOCK", precio:15990},
    {id:4 , nombre:"POLERA NEGRA I AM HIP HOP" , precio:16990},
    {id:5 , nombre:"POLERA NEGRA HUNTER X" , precio:15990},
    {id:6 , nombre:"POLERA NEGRA NARUTO" , precio:14990},
    {id:7 , nombre:"POLERA NEGRA TOTORO" , precio:17990},
    {id:8 , nombre:"POLERA BLANCA RANMA" , precio:16990},
    {id:9 , nombre:"POLERA BLANCA DONKEY KONG" , precio:16990},
    {id:10 , nombre:"POLERA BLANCA FORNITE" , precio:16990},
    {id:11 , nombre:"POLERA BLANCA MINECRAFT" , precio:16990},
    {id:12 , nombre:"POLERA NEGRA FREE FIRE" , precio:16990},
    {id:13 , nombre:"POLERA NEGRA BLACK MIRROR" , precio:16990},
    {id:14 , nombre:"POLERA BLANCA BETTER CALL SAUL" , precio:15990},
    {id:15 , nombre:"POLERA BLANCA BREAKING BAD" , precio:16990},
    {id:16 , nombre:"POLERA NEGRA GAME OF THRONES" , precio:16990},
    {id:17 , nombre:"POLERON CANGURO ALIEN X" , precio:32990},
    {id:18 , nombre:"POLERON CANGURO ALIEN RIPLEY" , precio:32990},
    {id:19 , nombre:"POLERON CANGURO AN AMERICAN" , precio:32990},
    {id:20 , nombre:"POLERON CANGURO APOCALYPSE NOW" , precio:32990}

]

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function crearCards() {
  productos.forEach((prod) => {
    containerDiv.innerHTML += `<div style="padding: 20px; background-color: aquamarine; border: 2px solid black;">
        <h4>${prod.nombre}</h4>
        <p>$${prod.precio}</p>
        <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
        </div>`;
  });
  agregarFuncionalidad();
}

function agregarFuncionalidad() {
  productos.forEach((prod) => {
    document
      .querySelector(`#btn-agregar${prod.id}`)
      .addEventListener("click", () => {
        console.log(prod);
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
  console.log(carrito);
  renderizarCarrito();
}

function renderizarCarrito() {
  carritoDiv.innerHTML = "";
  carrito.forEach((prod) => {
    carritoDiv.innerHTML += `<div style="padding: 20px; background-color: #42B881; border: 2px solid black;">
        <h4>${prod.nombre}</h4>
        <p>CANTIDAD: ${prod.cantidad}</p>
        <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
        <button class="btnCarrito" id="btn-menos${prod.id}">-</button>
        </div>`;
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  borrarProducto();
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
      });
  });
}

crearCards();
renderizarCarrito();



