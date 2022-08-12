class Producto{
    constructor(id, nombre, valor, stock){
        this.id = id;
        this.nombre = nombre;
        this.importe = precio;
        this.stock = stock;
    }
}

const productos = []

function catalogoDeProductos() {
    productos.push(new Producto(1,"POLERA BLANCA PINK FLOYD",15.990,5));
    productos.push(new Producto(2,"POLERA NEGRA JOY DIVISION",16.990,5));
    productos.push(new Producto(3,"POLERA BLANCA NEW KIDS ON THE BLOCK",15.990,5));
    productos.push(new Producto(4,"POLERA NEGRA I AM HIP HOP",16.990,5));
    productos.push(new Producto(5,"POLERA NEGRA HUNTER X",15.990,7));
    productos.push(new Producto(6,"POLERA NEGRA NARUTO",14.990,10));
    productos.push(new Producto(7,"POLERA NEGRA TOTORO",17.990,10));
    productos.push(new Producto(8,"POLERA BLANCA RANMA",16.990,6));
    productos.push(new Producto(9,"POLERA BLANCA DONKEY KOG",16.990,8));
    productos.push(new Producto(10,"POLERA BLANCA FORNITE",16.990,10));
    productos.push(new Producto(11,"POLERA BLANCA MINECRAFT",16.990,10));
    productos.push(new Producto(12,"POLERA NEGRA FREE FIRE",16.990,12));
    productos.push(new Producto(13,"POLERA NEGRA BLACK MIRROR",16.990,10));
    productos.push(new Producto(14,"POLERA BLANCA BETTER CALL SAUL",15.990,15));
    productos.push(new Producto(15,"POLERA BLANCA BREAKING BAD",16.990,15));
    productos.push(new Producto(16,"POLERA NEGRA GAME OF THRONES",16.990,12));
    productos.push(new Producto(17,"POLERON CANGURO ALIEN X",530,5));
    productos.push(new Producto(18,"POLERON CANGURO ALIEN RIPLEY",32.990,7));
    productos.push(new Producto(19,"POLERON CANGURO AN AMERICAN",32.990,4));
    productos.push(new Producto(20,"POLERON CANGURO APOCALYPSE NOW",32.990,5));
}


catalogoDeProductos()
console.table(productos)
const carro = []

function buscarProducto(){
    let busqueda = prompt("A continuación escriba el nombre del producto que desea llevar:").toUpperCase()
    let buscar = productos.find(el => el.nombre.includes(busqueda))
    carro.push(buscar)
otroProd()
}


function adicionarOtroProducto(){
    let busqueda = prompt("A continuación escriba el nombre del producto adicional que desea llevar:").toUpperCase()
    let buscar = productos.find(el => el.nombre.includes(busqueda))
    carro.push(buscar)
}

function otroProd(){
    let avanzar = confirm("Si desea adicionar mas productos a su pedido aprete aceptar/n ssi desea saber el total a pagar seleccionar cancelar");
    if (avanzar){
        adicionarOtroProducto()
        let total = carro.reduce((acc, el) => acc + el.importe, 0 )
    console.log("El total de su pedido a cancelar es: $", total)
    }else{
        let total = carro.reduce((acc, el) => acc + el.importe, 0 )
    console.log("El total de su pedido a cancelar es: $", total)
    }
}
