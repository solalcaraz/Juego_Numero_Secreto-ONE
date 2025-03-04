/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10";
*/

let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    // alert('Click desde el botón');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario))
    console.log(numeroDeUsuario == numeroSecreto);*/

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);

    //Si ya sorteamos todos los numeros
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el numero generado esta incluido en la lista
        if(numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar caja
    limpiarCaja();

    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero intentos
    condicionesIniciales();

    // Deshabilitar boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

// -----------------------------------------------------------------------------------------------------------

// Ejercicios de desafio: FUNCIONES
/*
// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    console.log("¡Hola Mundo!");
}
saludo();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoPersonal(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludoPersonal("Sol");

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble(numero) {
    return numero*2;
}
let resultadoDoble = numeroDoble(5);
console.log(resultadoDoble);

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(n1, n2, n3){
    return (n1 + n2 + n3)/3;
}
let resultadoPromedio = promedio(1, 2, 3);
console.log(resultadoPromedio);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a, b) {
    return a > b ? a : b;
}  
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroMultiplicado(numero) {
    return numero * numero;
}
let resultado = numeroMultiplicado(3);
console.log(resultado);
*/

// -----------------------------------------------------------------------------------------------------------

// Ejercicios de desafio: REINICIANDO EL JUEGO
/*
// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function masaCorporal(altura, peso) {
    return peso / (altura * altura);
}
let imc = masaCorporal(1.7, 67);
console.log(imc);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(num) {
    let resultado = 1;
    for (let i = num; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}
let resultadoFactorial = factorial(5);
console.log(resultadoFactorial);

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function cotizacion(dolar) {
    return (dolar * 4.80);
}
let valor = cotizacion(100);
console.log(valor);

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaPerimetroRectangulo(altura, ancho) {
    let area = altura * ancho;
    let perimetro = 2 * (altura + ancho);
    console.log(area);
    console.log(perimetro);
}
calcularAreaPerimetroRectangulo(3, 5);

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaPerimetroCircular(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log(area);
    console.log(perimetro);
}
calcularAreaPerimetroCircular(3);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
tablaDeMultiplicar(7);
*/

// -----------------------------------------------------------------------------------------------------------

// Ejercicios de desafio: LISTAS
/*
// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(lista) {
    console.log(lista.toString());
}
mostrarElementos(lenguagesDeProgramacion);

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElmentosInverso(lista) {
    console.log(lista.reverse().toString());
}
mostrarElmentosInverso(lenguagesDeProgramacion);

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioElementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}
let listaNumeros = [10, 20, 30, 40, 50];
console.log(promedioElementos(listaNumeros));

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function maximoMinimo(lista) {
    let maximo = lista[0];
    let minimo = lista[0];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i];
        }
        if (lista[i] < minimo) {
            minimo = lista[i];
        }        
    }
    console.log(maximo);
    console.log(minimo);
}
maximoMinimo(listaNumeros);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}
console.log(sumaElementos(listaNumeros));

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElementos(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1;
}
console.log(lenguagesDeProgramacion.reverse())
console.log(encontrarIndiceElementos(lenguagesDeProgramacion, 'Java'));

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function nuevaLista(lista1, lista2) {
    let nuevaLista = [];
    let suma = 0;
    for (let i = 0; i < lista1.length && i < lista2.length; i++) {
        suma = lista1[i] + lista2[i];
        nuevaLista.push(suma);
    }
    return nuevaLista;
}
let listaNum2 = [1, 2, 3, 4, 5];
console.log(nuevaLista(listaNumeros, listaNum2));

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    let nuevaLista = [];
    let cuadrado = 0;
    for (let i = 0; i < lista.length; i++) {
        cuadrado = lista[i] * lista[i];
        nuevaLista.push(cuadrado);
    }
    return nuevaLista;
}
console.log(cuadradoLista(listaNum2));
*/