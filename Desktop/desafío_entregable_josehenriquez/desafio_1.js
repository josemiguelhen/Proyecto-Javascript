//debugger

function ingreseNombre () {
    let entrada = alert ("Hola!Bienvenido a Sushilocura");
    let nombre = prompt ("Ingrese su nombre por favor");
    while(nombre===""||nombre === null){
        nombre = prompt ("ingrese su nombre");
    }
}

function mostrarProductos() {
    let producto;
    do {
      producto = prompt(" Que tipo de sushi desea llevar? \n1)urakami \n2)maki \n3)nigiri \n4)temaki \n5)gunkan");
    } while (producto != 1 && producto != 2 && producto != 3 && producto != 4 && producto != 5);
  
    switch (producto) {
      case "1":
        return "urakami";
      case "2":
        return "maki";
      case "3":
        return "nigiri";
      case "4":
        return "temaki";
      case "5":
        return "gunkan";
     
    }
}
  
  function validarPrecio(producto) {
    if (producto === "urakami") {
      return 15
    } else if (producto === "maki") {
      return 20;
    } else if (producto === "nigiri"){
      return 25;
    } else if (producto === "temaki"){
      return 27;
    } else if (producto === "temaki"){
      return 30;
    } else if (producto === "gunkan"){
      return 35;
    }
  }
  
  function cobrar(producto, precio){
    alert(
        "Usted lleva la siguiente promocion de sushi :" +
          producto.toUpperCase() +
          "\nPrecio $" +
          precio
      );
  }

  function mostrarMediosPago() {
        let medio;
        do {
          medio = prompt("Con que medio de pago va a cancelar su pedido? \n1)visa \n2)cuenta bancaria \n3)aplicación web \n4)efecivo");
        } while (medio != 1 && medio != 2 && medio != 3 && medio != 4);
        alert("Gracias por preferirnos. Su pedido esta listo");
      
        switch (medio) {
          case "1":
            return "visa";
          case "2":
            return "cuenta bancaria";
          case "3":
            return "aplicacion web";
          case "4":
            return "efectivo";
          default:
            return "elegir entre la opcion de pago 1 y 4";
        }
       }

  
  ingreseNombre();
  let productoSeleccionado = mostrarProductos();
  let precioProd = validarPrecio(productoSeleccionado);
  cobrar(productoSeleccionado, precioProd);
  let medioPago = mostrarMediosPago ();

 
  
  
  


