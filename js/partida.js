import Baraja from "./Baraja.js";
import Carta from "./cartas.js";

export default class Partida {
    constructor(filas, columnas) {
        this._filas = filas;
        this._columnas = columnas;
        this._baraja = new Baraja();
        this._cartasSeleccionadas = [];
        this._mazo = [];
        this._cartaVolteada = null;
        this._aciertos = 0;
        this._numeroIntentos = 0;
        this.iniciarPartida();
    }

    iniciarPartida() {
        if (this._filas * this._columnas % 2 !== 0) {
            console.log('El número de filas y columnas debe ser par para emparejar cartas.');
        }

        if (this._filas * this._columnas > this._baraja.length) {
            console.log('No hay suficientes cartas en la baraja para el tablero seleccionado.');
        }
        this.selecciona();
        this.baraja();
        this.reparte();
    }

    selecciona() {
        this._cartasSeleccionadas = [];
        const totalCartas = (this.filas * this.columnas) / 2;

        while (this._cartasSeleccionadas.length < totalCartas) {
            const cartaAleatoria = this._baraja.generaCarta();

            if (!this._cartaEnMazo(cartaAleatoria)) {
                this._cartasSeleccionadas.push(cartaAleatoria);
            }
        }
    }

    baraja() {
        this._cartasSeleccionadas = this._cartasSeleccionadas.sort(() => Math.random() - 0.5);
    }

    reparte() {
        for (let i = 0; i < this._filas; i++) {
            this._mazo[i] = [];
            for (let j = 0; j < this._columnas; j++) {
                const carta = this._cartasSeleccionadas.pop();
                this._mazo[i][j] = carta;
            }
        }
    }

    voltea(fila, columna) {
        if (!this._mazo[fila][columna]._cartaVolteada) {
            this._mazo[fila][columna]._cartaVolteada = true;

            if (this._cartaVolteada === null) {
                this._cartaVolteada = { fila, columna };
            } else {
                const carta1 = this._mazo[this._cartaVolteada.fila][this._cartaVolteada.columna];
                const carta2 = this._mazo[fila][columna];

                if (carta1.palo === carta2.palo && carta1.nombre === carta2.nombre) {
                    this._aciertos++;
                }

                this._cartaVolteada = null;
                this._numeroIntentos++;
            }
        }
    }
    compruebaAcierto(fila, columna) {
        return this._mazo[fila][columna].volteada;
    }

    haFinalizado() {
        return this._aciertos === this._filas * this._columnas / 2;
    }

    _cartaEnMazo(carta) {
        for (let i = 0; i < this._cartasSeleccionadas.length; i++) {
            const cartaSeleccionada = this._cartasSeleccionadas[i];
            if (cartaSeleccionada.palo === carta.palo && cartaSeleccionada.nombre === carta.nombre) {
                return true;
            }
        }
        return false;
    }
}