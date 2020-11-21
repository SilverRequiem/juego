window.addEventListener('load', init);


const nivel = {
  facil: 5,
  medio: 3,
  dificil: 1
};

const nivelActual = nivel.medio;

let tiempo = nivelActual;
let puntuacion = 0;
let enJuego;

const palabraIntroducida = document.querySelector('#palabra-introducida');
const palabraActual = document.querySelector('#palabra-actual');
const puntuacionM = document.querySelector('#puntuacion');
const tiempoM = document.querySelector('#tiempo');
const mensaje = document.querySelector('#mensaje');
const segundos = document.querySelector('#segundos');
const mostrarPuntuacionAlta = document.querySelector('#puntuacion-alta');


const palabras = [
    'Pedro',
    'Hola',
    'Adios',
    'saludo',
    'asno'
];


// Initialize Game
function init(){
    segundos.innerHTML = nivelActual;

    mostrarPalabras(palabras);

    palabraIntroducida.addEventListener('input', elegirPalabra);

    setInterval(cuentaAtras, 1000);

    setInterval(revisarStatus, 50);

}
 
function elegirPalabra(){
    if (compararPalabra()) {
        enJuego = true;
        tiempo = nivelActual + 1;
        mostrarPalabras(palabras);
        palabraIntroducida.value = '';
        puntuacion++;
    }
  if (typeof sessionStorage['puntuacion-alta'] === 'undefined' || puntuacion > sessionStorage['puntuacion-alta']) {
      sessionStorage['puntuacion-alta'] = puntuacion; 
  } else {
      sessionStorage['puntaucion-alta'] = sessionStorage['puntuacion-alta']
  }

if(sessionStorage['puntuacion-alta'] >= 0) {
        mostrarPuntuacionAlta.innerHTML = sessionStorage['puntuacion-alta'];
    }
 
  // si la puntuacion es -1 mostrar 0
    if(puntuacion === -1){
        puntuacionM.innerHTML = 0;
    } else {
        puntuacionM.innerHTML = puntuacion;
    }
}


function compararPalabra(){
    if (palabraIntroducida.value === palabraActual.innerHTML) {
        mensaje.innerHTML = 'Correcto';
        return true;
    } else {
        mensaje.innerHTML = '';
        return false;
    }
}  

function mostrarPalabras(palabras){
    const randIndex = Math.floor(Math.random() * palabras.length);
    palabraActual.innerHTML = palabras[randIndex];
}

function cuentaAtras(){
      if (tiempo > 0){
        tiempo--;
      } else if (tiempo === 0){
          enJuego = false;
      }
      tiempoM.innerHTML = tiempo;
  }



function revisarStatus() {
    if (!enJuego && tiempo === 0) {
        mensaje.innerHTML = 'Juego terminado';
        puntuacion = -1;
    }
}
