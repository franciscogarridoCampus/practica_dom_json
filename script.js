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

//Ejercicio 4
let botones=document.querySelectorAll('.btn-dom');

botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        boton.textContent = 'DOM listo';
    });
});

//Ejercicio 5
let vivos= document.getElementsByTagName('li');
let estaticos=document.querySelectorAll('li');
console.log("Vivos:"+vivos.length);
console.log("Estaticos:"+estaticos.length);

//Creamos nuevo apartado en la lista y la incluimos con appenchild y al hacerlo aumenta los vivos y no los estaticos porque no se añadio directamente en el html
let nuevo = document.createElement('li');
nuevo.textContent = "Buenas";
document.getElementById('lista').appendChild(nuevo);
console.log("Vivos despues de agregar un elemento nuevo con appenchild:"+vivos.length);
console.log("Estaticos despues de agregar un elemento nuevo con appenchild:"+estaticos.length);

//Ejercicio 6
let dinamico= document.createElement('p');
dinamico.textContent='Creado dinamicamente';
document.body.appendChild(dinamico);

//Ejercicio 7
let contenedor = document.getElementById('contenedor');
let textNodo = document.createTextNode('Texto con createTextNode()');
contenedor.appendChild(textNodo);

//Ejercicio 8
let imagen = document.createElement('img'); 

imagen.setAttribute('src', 'https://images.ctfassets.net/denf86kkcx7r/2KGI03JSLCerDS7RD20OZP/b85317da255ed7119430759308414a49/perros_de_pastor_y_boyeros_-_1.jpg?fm=webp&w=612'); 

document.body.appendChild(imagen);
//Ejercicio 9

//Ejercicio 10

//Ejercicio 11

//Ejercicio 12, No podemos hacerlo porque no dimos ese comando

//Ejercicio 13

//Ejercicio 14

//Ejercicio 15

//Ejercicio 16

//Ejercicio 17

//Ejercicio 18

//Ejercicio 19

//Ejercicio 20