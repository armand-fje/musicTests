//Funcion de inicio
function init() {  
  try {
    // creamos el contexto de audio
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
    console.log('Web Audio API es sorportado');
  }
  catch(e) {
    console.log('Web Audio API no es soportado por el explorador.');
  }
}

//funciones de control de sonido
function reproducirFrecuencia() {
  // Crear Oscilador
  osc = context.createOscillator();
  osc.frequency.value = 261.63;
  osc.connect(context.destination);
  
  //Inicia la reproduccion de la frecuencia
   osc.start(0);
}

function subirOctava(){
  //subimos una octava
  osc.frequency.value = osc.frequency.value*2; 
}

function bajarOctava(){
  //Bajamos una octava
  osc.frequency.value = osc.frequency.value/2;
}

function detenerFrecuencia(){
  // Detiene la reproduccion de la frecuencia
  osc.stop(0);
}

function triangle(){
     //Onda triangular
     osc.type = 'triangle';
}

function square(){
     //Onda cuadrada
     osc.type = 'square';
}

function sine(){
     //Onda sinusoidal
     osc.type = 'sine';
}

// INI 
var context;
window.addEventListener('load', init, false);
function init() {
  try {
    // crear el contexto de audio
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
 console.log('Web Audio API si es soportado en este navegador');
  }
  catch(e) {
    console.log('Web Audio API no es soportado en este navegador');
  }
}
