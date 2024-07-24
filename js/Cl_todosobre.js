export default class Cl_todosobre{
    constructor(){
        this.acumMontos=0
    }
    procesarsobre(so){
        this.acumMontos+=so.calcToDi()
    }
    devolveracummontos(){ return this.acumMontos}

}