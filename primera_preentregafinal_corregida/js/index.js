class Producto{
    constructor(id, nombre, valor, stock){
        this.id = id
        this.nombre = nombre
        this.valor = valor
        this.stock = stock
    }
    calcularIva(){
        return this.valor * 1.21
    }
}

const productos = []

    productos.push(new Producto(1,"POLERA BLANCA PINK FLOYD",15990,5))
    productos.push(new Producto(2,"POLERA NEGRA JOY DIVISION",16990,5))
    productos.push(new Producto(3,"POLERA BLANCA NEW KIDS ON THE BLOCK",15990,5))
    productos.push(new Producto(4,"POLERA NEGRA I AM HIP HOP",16990,5))
    productos.push(new Producto(5,"POLERA NEGRA HUNTER X",15990,7))
    productos.push(new Producto(6,"POLERA NEGRA NARUTO",14990,10))
    productos.push(new Producto(7,"POLERA NEGRA TOTORO",17990,10))
    productos.push(new Producto(8,"POLERA BLANCA RANMA",16990,6))
    productos.push(new Producto(9,"POLERA BLANCA DONKEY KOG",16990,8))
    productos.push(new Producto(10,"POLERA BLANCA FORNITE",16990,10))
    productos.push(new Producto(11,"POLERA BLANCA MINECRAFT",16990,10))
    productos.push(new Producto(12,"POLERA NEGRA FREE FIRE",16990,12))
    productos.push(new Producto(13,"POLERA NEGRA BLACK MIRROR",16990,10))
    productos.push(new Producto(14,"POLERA BLANCA BETTER CALL SAUL",15990,15))
    productos.push(new Producto(15,"POLERA BLANCA BREAKING BAD",16990,15))
    productos.push(new Producto(16,"POLERA NEGRA GAME OF THRONES",16990,12))
    productos.push(new Producto(17,"POLERON CANGURO ALIEN X",32990,5))
    productos.push(new Producto(18,"POLERON CANGURO ALIEN RIPLEY",32990,7))
    productos.push(new Producto(19,"POLERON CANGURO AN AMERICAN",32990,4))
    productos.push(new Producto(20,"POLERON CANGURO APOCALYPSE NOW",32990,5))


console.table(productos)
const carro = []

function pedirDato(){
    let busqueda = prompt ("A continuación escriba el nombre del producto que desea llevar:").toUpperCase()
    return busqueda
}

alert ("Bienvenido a Estampados con Onda. Estos son nuestros productos: POLERA NEGRA PINK FLOYD - POLERA NEGRA JOY DIVISION - POLERA BLANCA NEW KID ON THE BLOCK - POLERA NEGRA I AM HIP HOP - POLERA NEGRA HUNTER X - POLERA NEGRA NARUTO - POLERA NEGRA TOTORO - POLERA BLANCA RANMA - POLERA BLANCA DONKEY KONG - POLERA BLANCA FORNITE - POLERA BLANCA MINECRAFT - POLERA NEGRA FREE FIRE - POLERA NEGRA BLACK MIRROR - POLERA BLANCA BETTER CALL SAUL")
function buscarProducto(productoBuscado){
    let buscar = productos.find(producto => producto.nombre === productoBuscado)
    carro.push(buscar)
    otroProd()
}


function adicionarOtroProducto(){
    let busqueda = prompt("A continuación escriba el nombre del producto adicional que desea llevar:").toUpperCase()
    let buscar = productos.find(el => el.nombre.includes(busqueda))
    carro.push(buscar)
}

function otroProd(){
let avanzar = confirm("Si desea adicionar mas productos a su pedido aprete aceptar, si desea saber el total a pagar seleccionar cancelar");
    if (avanzar){
        adicionarOtroProducto()
        let total = carro.reduce((acumulador, producto) => acumulador + producto.valor, 0)
        console.log("El total de su pedido a cancelar es: $", total)
    }else{
        let total = carro.reduce((acumulador, producto) => acumulador + producto.valor, 0)
        console.log("El total de su pedido a cancelar es: $", total)
    }
}

buscarProducto (pedirDato())
