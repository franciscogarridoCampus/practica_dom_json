//Ejercicio1

let titulo= document.getElementById('Titulo');
let parrafo= document.getElementsByTagName('p')[0]; //El 0 es indicar que es el primer parrafo, ya que si no lo pongo indica que no esta definido
//Cambio de tamaño al h1 y al parrafo de color
titulo.style.fontSize=70;
parrafo.style.color='#f10000ff';

//Ejercicio2
let clase_texto= document.getElementsByClassName('texto');
for(let i=0;i < clase_texto.length;i++){
    clase_texto[i].style.backgroundColor = 'gray';
}

//Ejercicio3
let caja=document.querySelector('.caja');
caja.style.border= '3px solid black';
caja.style.backgroundColor='#1ce615ff';