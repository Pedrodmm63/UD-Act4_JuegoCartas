import Partida from "./partida.js";


const partida = new Partida(4, 4);

/*console.table(miBaraja.getBaraja());
console.log(miBaraja.generaCarta());*/

function mostrarTabla() {
    var codigoHTML = "<table border=1>"
    for (var i = 0; i < partida._mazo.length; i++) {
        codigoHTML += "<tr>"
        for (var j = 0; j < partida._mazo[i].length; j++) {
            if (partida._mazo[i][j] == null)
                codigoHTML = "<td></td>"
            else
                codigoHTML += "<td><br>" + partida._mazo[i][j] + "<br></td>";
        }
        codigoHTML += "</tr>"
    }
    codigoHTML += "</table>"
    document.getElementById("mazo").innerHTML = codigoHTML;
}

function pedirCartas() {
    // Pedir carta 1 
    const posicionCarta1 = prompt("Ingresa la posición de la primera carta (fila-columna):");
    const [filaCarta1, columnaCarta1] = posicionCarta1.split("-").map(Number);
    // Voltear carta 1 
    partida.voltea(filaCarta1, columnaCarta1);
    mostrarTabla();
    // Pedir carta 2 
    const posicionCarta2 = prompt("Ingresa la posición de la primera carta (fila-columna):");
    const [filaCarta2, columnaCarta2] = posicionCarta2.split("-").map(Number);    
    // Comprobar acierto 
    if (partida.compruebaAcierto(filaCarta2, columnaCarta2)) {
        console.log("¡Has acertado!");
        partida.aciertos++;
    } else {
        console.log("No coinciden.");
    }

    partida.numeroIntentos++;
    if (partida.haFinalizado()) {
        console.log("PARTIDA FINALIZADA!!");
    }
    else
        setTimeout(pedirCartas(), 5000)
}

pedirCartas();
