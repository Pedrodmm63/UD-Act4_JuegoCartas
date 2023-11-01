import Carta from "./cartas.js";

export default class Baraja {
    constructor() {
        this._barajas = [];
        this.iniciarBaraja();
    }

    iniciarBaraja() {
        const palos = ["picas", "trebol", "corazones", "diamante"];
        const numeros = ["AS", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

        for (let i = 0; i < palos.length; i++) {
            this._barajas[i] = new Array(13);
            for (let j = 0; j < numeros.length; j++) {
                this._barajas[i][j] = new Carta(palos[i], numeros[j]).toString();
            }
        }
    }

    generaCarta() {
        const paloRandom = Math.floor(Math.random() * this._barajas.length);
        const nombreRandom = Math.floor(Math.random() * this._barajas[paloRandom].length);
        const cartaAleatoria = this._barajas[paloRandom][nombreRandom];
        return cartaAleatoria;
        }
    getBaraja() {
        return this._barajas;
    }
}