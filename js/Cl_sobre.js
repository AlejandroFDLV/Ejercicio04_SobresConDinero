export default class Cl_sobre{
    constructor(n,vb,c){
        this.numero=n
        this.valorb=vb
        this.cont=c
    }
    set numero(n){this._numero=+n}
    set valorb(vb){this._valorb=+vb}
    set cont(c){this._cont=+c}

    get numero(){return this._numero}
    get valorb(){return this._valorb}
    get cont(){return this._cont}

    calcToDi(){return (this.valorb*this.cont)}
}