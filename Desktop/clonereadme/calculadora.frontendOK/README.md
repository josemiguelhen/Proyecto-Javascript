Calculadora básica con JavaScript:

Instrucciones:

Descarge el archivo .rar.
Extraiga la carpeta en el escritorio u otro lugar a su elección.
Abra la carpeta con Visual Studio Code.
Idealmente abrir la página con la extensión live server de VSC.
Se abrirá el navegador con el servidor que mostrará la calculadora.
Opere la calculadora como si fuera una calculadora estándar; aplicando las operaciones básicas y sus resultados.



Dentro del siguiente proyecto, se realiza una calculadora basada en lenguajes Javascript, HTML y CSS. Esta calculadora permite ejecutar cuatro operaciones básicas, sumar restar, multiplicar, dividir

HTML

Este se segmenta básicamente en dos partes, la pantalla donde muestra resultado y el teclado. 
En la etiqueta body se agrega el atribuo onload="init()" para indicarle que una vez que acabe de cargar la página mande llamar el método init que declararemos en el código javascript.

CSS

En el css simplemente se agrega estilo y diseño a nuestra calculadora.

JavaScript

- Primero se declaran variables que van a permitir realizar las operaciones posteriormente
- Luego, se crcea la función init(), donde se guardan los elementos html por medio de su id en variables
- Dentro de la misma función init nos encargaremos de programar los eventos de click sobre todos los elementos tipo button que son números, operaciones, punto, igual y reset
- Para los eventos de suma, resta, multiplicación y división, se guardarán dentro de la variable operandoa lo que tiene el contenedor resultado y la operación que se desea realizar
- Se crean tres funciones, borrar, limpiar y resetear:
	Borrar: esta permitirá borrar el último digito ingresado
	Limpiar: que vaciará el contenedor
	Resetear: la cual va a resetear las vriables operandoa, operandob y operación
- Para el botón de igual almacenamos en operandob lo que hay en el contenedor de resultado y se llama a el metodo resolver 
- Finalmente se crea la función resolver, de acuerdo a los valores ingresado se realiza la operación necesaria y se muestra el resultado en el contenedor de resultado.

Link repositorio calculadora:

Integrantes grupo 1: Marcos Barcia, Jocelyn Reyes, José Henríquez, Tomás Stuardo


