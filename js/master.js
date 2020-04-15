  window.onload = function(){
    let body = document.querySelector('body');
    let caballo1 = document.querySelector('#caballo1');    
    let caballo2 = document.querySelector('#caballo2');
    let caballo3 = document.querySelector('#caballo3');
    let caballo4 = document.querySelector('#caballo4');
    let nombreCaballo1 = document.querySelector('.nombreCaballo1');
    let nombreCaballo2 = document.querySelector('.nombreCaballo2');
    let nombreCaballo3 = document.querySelector('.nombreCaballo3');
    let nombreCaballo4 = document.querySelector('.nombreCaballo4');
    let carrera = document.querySelector('.carrera');
    let cantidadJugadores = 0;
    let avance = 0;  //Representa la velocidad de carrera del caballo Aleatorio
    let margenIzquierdo1 = 1;
    let margenIzquierdo2 = 0;
    let margenIzquierdo3 = 0;
    let margenIzquierdo4 = 0;
    let continuar = "";



    let inciar = document.getElementById('iniciar');
  
    let reanudar = document.getElementById('reanudar');   
    while (cantidadJugadores==0) {
        cantidadJugadores = parseInt(prompt("Cantidad de Jugadores (Entre 2 y 4)"));
        if(cantidadJugadores < 2 || cantidadJugadores >4){
            alert("Deben ser entre 2 a 4 jugadores")
            continue;
        }
        
    }
    
    let nombreJugador = [];
    let posicion = 0;
    for(let i = 1; i <= cantidadJugadores;i++){
        
        nombre= prompt("Nombre del Jugador Nro. "+i);
        if(nombre === ""){
            alert("El jugador debe tener un nombre...");
            i--;
            continue;
        }
        nombreJugador.push(nombre);
    }
    let anchoContenedor = document.querySelector('.container').offsetWidth;
    //console.log(anchoContenedor);
    
    inciar.addEventListener('click',function(){
        carrera.style.display = 'block';
        
        if(cantidadJugadores==2){
          caballo1.classList.add('caballoActivo');
          caballo2.classList.add('caballoActivo');
          nombreCaballo1.innerHTML =  "Jugador "+ nombreJugador[0];
          nombreCaballo2.innerHTML =  "Jugador "+ nombreJugador[1];
  
        }else if(cantidadJugadores ===3) {
          caballo1.classList.add('caballoActivo');
          caballo2.classList.add('caballoActivo');
          caballo3.classList.add('caballoActivo');
          nombreCaballo1.innerHTML =  "Jugador "+ nombreJugador[0];
          nombreCaballo2.innerHTML =  "Jugador "+ nombreJugador[1];
          nombreCaballo3.innerHTML =  "Jugador "+ nombreJugador[2];
  
        }else if (cantidadJugadores==4){
          caballo1.classList.add('caballoActivo');
          caballo2.classList.add('caballoActivo');
          caballo3.classList.add('caballoActivo');
          caballo4.classList.add('caballoActivo');
          nombreCaballo1.innerHTML =  "Jugador "+ nombreJugador[0];
          nombreCaballo2.innerHTML =  "Jugador "+ nombreJugador[1];
          nombreCaballo3.innerHTML =  "Jugador "+ nombreJugador[2];
          nombreCaballo4.innerHTML =  "Jugador "+ nombreJugador[3];
  
        }

        if(cantidadJugadores==2){
          let intervalCaballo1 = setInterval(() => {
            margenIzquierdo1 += calcularAvance();

            if (margenIzquierdo1 >= anchoContenedor) {
              // Si el margen supera el ancho del contenedor, se detiene el intervalo
              clearInterval(intervalCaballo1);
              if (margenIzquierdo1 > margenIzquierdo2) {
                // Si el margen del 1 es mayor que el 2, el 1 es el ganador
                ganador(nombreCaballo1.innerHTML);
                clearInterval(intervalCaballo2);
              }
            } else {
              // Si no se cumple el if se suma el margen
              caballo1.style.left = margenIzquierdo1 + "px";
            }
          }, 20);
          let intervalCaballo2 = setInterval(() => {
            margenIzquierdo2 += calcularAvance();

            if (margenIzquierdo2 >= anchoContenedor) {
              clearInterval(intervalCaballo2);
              if (margenIzquierdo2 > margenIzquierdo1) {
                ganador(nombreCaballo2.innerHTML);
                clearInterval(intervalCaballo1);
              }
            } else {
              caballo2.style.left = margenIzquierdo2 + "px";
            }
          }, 20);

            
        } else if(cantidadJugadores ===3) {
          let intervalCaballo1 = setInterval(() => {
            margenIzquierdo1 += calcularAvance();

            if (margenIzquierdo1 >= anchoContenedor) {
              // Si el margen supera el ancho del contenedor, se detiene el intervalo
              clearInterval(intervalCaballo1);
              if (margenIzquierdo1 > margenIzquierdo2 && margenIzquierdo1 > margenIzquierdo3) {
                ganador(nombreCaballo1.innerHTML);
                clearInterval(intervalCaballo2);
                clearInterval(intervalCaballo3)
              }
            } else {
              caballo1.style.left = margenIzquierdo1 + "px";
            }
          }, 20);
          let intervalCaballo2 = setInterval(() => {
            margenIzquierdo2 += calcularAvance();

            if (margenIzquierdo2 >= anchoContenedor) {
              clearInterval(intervalCaballo2);
              if (margenIzquierdo2 > margenIzquierdo1 && margenIzquierdo2 > margenIzquierdo3) {
                ganador(nombreCaballo2.innerHTML);
                clearInterval(intervalCaballo1);
                clearInterval(intervalCaballo3);
              }
            } else {
              caballo2.style.left = margenIzquierdo2 + "px";
            }
          }, 20);
          let intervalCaballo3 = setInterval(() => {
            margenIzquierdo3 += calcularAvance();

            if (margenIzquierdo3 >= anchoContenedor) {
              clearInterval(intervalCaballo3);
              if (margenIzquierdo3 > margenIzquierdo2 && margenIzquierdo3 > margenIzquierdo1 ) {
                ganador(nombreCaballo3.innerHTML);
                clearInterval(intervalCaballo1);
                clearInterval(intervalCaballo2);
              }
            } else {
              caballo3.style.left = margenIzquierdo3 + "px";
            }
          }, 20);

        }else if (cantidadJugadores ===4){
          let intervalCaballo1 = setInterval(() => {
            margenIzquierdo1 += calcularAvance();

            if (margenIzquierdo1 >= anchoContenedor) {
              // Si el margen supera el ancho del contenedor, se detiene el intervalo
              clearInterval(intervalCaballo1);
              if (margenIzquierdo1 > margenIzquierdo2 && margenIzquierdo1 > margenIzquierdo3 && margenIzquierdo1 > margenIzquierdo4) {
                // Si el margen del 1 es mayor que el 2, el 1 es el ganador
                ganador(nombreCaballo1.innerHTML);
                clearInterval(intervalCaballo2);
                clearInterval(intervalCaballo3);
                clearInterval(intervalCaballo4);
              }
            } else {
              // Si no se cumple el if se suma el margen
              caballo1.style.left = margenIzquierdo1 + "px";
            }
          }, 20);
          let intervalCaballo2 = setInterval(() => {
            margenIzquierdo2 += calcularAvance();

            if (margenIzquierdo2 >= anchoContenedor) {
              clearInterval(intervalCaballo2);
              if (margenIzquierdo2 > margenIzquierdo1 && margenIzquierdo2 > margenIzquierdo3 && margenIzquierdo2 > margenIzquierdo4) {
                ganador(nombreCaballo2.innerHTML);
                clearInterval(intervalCaballo1);
                clearInterval(intervalCaballo3);
                clearInterval(intervalCaballo4);
              }
            } else {
              caballo2.style.left = margenIzquierdo2 + "px";
            }
          }, 20);
        
          let intervalCaballo3 = setInterval(() => {
            margenIzquierdo3 += calcularAvance();

            if (margenIzquierdo3 >= anchoContenedor) {
              clearInterval(intervalCaballo3);
              if (margenIzquierdo3 > margenIzquierdo2 && margenIzquierdo3 > margenIzquierdo1 && margenIzquierdo3 > margenIzquierdo4 ) {
                ganador(nombreCaballo3.innerHTML);
                clearInterval(intervalCaballo1);
                clearInterval(intervalCaballo2);
                clearInterval(intervalCaballo4);
              }
            } else {
              caballo3.style.left = margenIzquierdo3 + "px";
            }
          }, 20);
          let intervalCaballo4 = setInterval(() => {
            margenIzquierdo4 += calcularAvance();

            if (margenIzquierdo4 >= anchoContenedor) {
              clearInterval(intervalCaballo4);
              if (margenIzquierdo4 > margenIzquierdo2 && margenIzquierdo4 > margenIzquierdo3 && margenIzquierdo4 > margenIzquierdo1 ) {
                ganador(nombreCaballo4.innerHTML);
                clearInterval(intervalCaballo1);
                clearInterval(intervalCaballo2);
                clearInterval(intervalCaballo3);
              }
            } else {
              caballo4.style.left = margenIzquierdo4 + "px";
            }
          }, 20);

        }    
    })
    //Aquí calculo el avance del caballo   
    function calcularAvance(){
        return Math.floor(Math.random()*3);
    }
    //Se anuncia al ganador, le quite el Swalert2 ya que me doy problemas en equipos moviles
    function ganador(ganador){
        //Swal.fire(
        //    ' !! Felicitaciones !! ',
        //    `La carrera fue ganada por el ${ganador}`,
        //    'success'
        //  )
        alert(`Felicitaciones ${ganador}. Ganaste la Carrera`);
        carrera.style.display = 'none';
          
    }   
    //Funcion para reanudar el juego
    reanudar.addEventListener('click',function(){
      window.location.href = "index.html";
    })   

    
}