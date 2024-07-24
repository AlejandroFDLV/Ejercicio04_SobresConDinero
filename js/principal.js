/*Se tienen N sobres con dinero, cada uno con billetes del mismo valor. De cada sobre se
conoce el valor del billete y la cantidad. Se requiere determinar el total de dinero: 
a. en cada sobre, b. entre todos los sobres.
El cliente entrega el siguiente formato para la presentación de la salida:
El sobre No1 tiene $50
El sobre No2 tiene $40
El sobre No3 tiene $400
El sobre No4 tiene $150
El total entre todos los sobres es de $640
Se procesaron para este ejemplo 4 sobres: 
a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y d) 3 de $50*/
import Cl_sobre from "./Cl_sobre.js"
import Cl_todosobre from "./Cl_todosobre.js"

let sobre1=new Cl_sobre(1, 10, 5)
let sobre2=new Cl_sobre(2, 20, 2)
let sobre3=new Cl_sobre(3, 100, 4)
let sobre4=new Cl_sobre(4, 50, 3)

let toso=new Cl_todosobre()
//let so=new Cl_sobre()

toso.procesarsobre(sobre1)
toso.procesarsobre(sobre2)
toso.procesarsobre(sobre3)
toso.procesarsobre(sobre4)

let salida= document.getElementById("salida");
salida.innerHTML=`Sobre 1: ${sobre1.calcToDi()}$<br>Sobre 2: ${sobre2.calcToDi()}$<br>
Sobre 3: ${sobre3.calcToDi()}$<br>Sobre 4: ${sobre4.calcToDi()}$<br>Total de los sobres: ${toso.devolveracummontos()}$`