const productos = [
    {id:1 , nombre:"POLERA BLANCA PINK FLOYD" , precio:15990, img:'Images/musica1.jpg'},
    {id:2 , nombre:"POLERA NEGRA JOY DIVISION" , precio:16990, img:'Images/musica2.jpg'},
    {id:3 , nombre:"POLERA BLANCA NEW KIDS ON THE BLOCK", precio:15990, img:'Images/musica3.jpg'},
    {id:4 , nombre:"POLERA NEGRA I AM HIP HOP" , precio:16990, img:'Images/musica4.jpg'},
    {id:5 , nombre:"POLERA NEGRA HUNTER X" , precio:15990, img:'Images/anime11.jpg'},
    {id:6 , nombre:"POLERA NEGRA NARUTO" , precio:14990, img:'Images/anime2.jpg'},
    {id:7 , nombre:"POLERA NEGRA TOTORO" , precio:17990, img:'Images/anime3.jpg'},
    {id:8 , nombre:"POLERA BLANCA RANMA" , precio:16990, img:'Images/anime 4.jpg'},
    {id:9 , nombre:"POLERA BLANCA DONKEY KONG" , precio:16990, img:'Images/juegos1.jpg'},
    {id:10 , nombre:"POLERA BLANCA FORNITE" , precio:16990, img:'Images/juegos2.jpg'},
    {id:11 , nombre:"POLERA BLANCA MINECRAFT" , precio:16990, img:'Images/juegos3.jpg'},
    {id:12 , nombre:"POLERA NEGRA FREE FIRE" , precio:16990, img:'Images/juegos4.jpg'},
    {id:13 , nombre:"POLERA NEGRA BLACK MIRROR" , precio:16990, img:'Images/series1.jpg'},
    {id:14 , nombre:"POLERA BLANCA BETTER CALL SAUL" , precio:15990, img:'Images/series2.jpg'},
    {id:15 , nombre:"POLERA BLANCA BREAKING BAD" , precio:16990, img:'Images/series3.jpg'},
    {id:16 , nombre:"POLERA NEGRA GAME OF THRONES" , precio:16990, img:'Images/series4.jpg'},
    {id:17 , nombre:"POLERON CANGURO ALIEN X" , precio:32990, img:'Images/poleroncanguro1.jpg'},
    {id:18 , nombre:"POLERON CANGURO ALIEN RIPLEY" , precio:32990, img:'Images/polerocanguro2.jpg'},
    {id:19 , nombre:"POLERON CANGURO AN AMERICAN" , precio:32990, img:'Images/polerocanguro3.jpg'},
    {id:20 , nombre:"POLERON CANGURO APOCALYPSE NOW" , precio:32990, img:'Images/poleroncanguro4.jpg'}

]

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
        <button class="btnCarrito btn-primary" id="btn-agregar${prod.id}">Agregar</button>
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
  toastSwal("El producto ha sido agregado al carrito!",'info',"green")
}

function renderizarCarrito() {
  carritoDiv.innerHTML = "";
  carrito.forEach((prod) => {
    carritoDiv.innerHTML += `<div style="padding: 20px; background-color: #42B881; border: 2px solid black;">
        <h3>${prod.nombre}</h3>
        <h3>CANTIDAD: ${prod.cantidad}</h3>
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


