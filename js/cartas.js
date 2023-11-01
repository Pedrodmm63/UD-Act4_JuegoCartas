export default class Carta {
    constructor(palo, nombre) {
        this._palo = palo; 
        this._nombre = nombre;
    }

    get palo() {
        return this._palo;
    }

    set palo(palo){
        this._palo = palo;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    toString() {
        return this._nombre + "-" + this._palo;
    }
}