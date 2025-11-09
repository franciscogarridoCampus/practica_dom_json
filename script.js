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
const container = document.getElementById('card-container'); 

const card = document.createElement('div');
card.className = 'card';
card.style.width = '18rem';

const cardBody = document.createElement('div');
cardBody.className = 'card-body';

const title = document.createElement('h5');
title.className = 'card-title';
title.textContent = 'Título de la tarjeta';

const text = document.createElement('p');
text.className = 'card-text';
text.textContent = 'Hola desde la tarjeta.';

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.textContent = 'Botón';

cardBody.appendChild(title);
cardBody.appendChild(text);
cardBody.appendChild(button);

card.appendChild(cardBody);
container.appendChild(card);

//Ejercicio 10
const listaEj10 = document.getElementById('lista-ej10');


const item1 = document.createElement('li');
item1.className = 'list-group-item';
item1.textContent = 'Elemento al final';

const item2 = document.createElement('li');
item2.className = 'list-group-item';
item2.textContent = 'Elemento al inicio';

const fueraAntes = document.createElement('p');
fueraAntes.textContent = 'Esto va antes de la lista';

const fueraDespues = document.createElement('p');
fueraDespues.textContent = 'Esto va después de la lista';

// Añadir al final
listaEj10.append(item1);

// Añadir al inicio
listaEj10.prepend(item2);

// Añadir fuera de la lista
listaEj10.before(fueraAntes);
listaEj10.after(fueraDespues);

//Ejercicio 11

const parrafoeliminar = document.getElementById('borrador');
const botondeEliminar = document.getElementById('borrarParrafo');
const botondeReemplazar = document.getElementById('reemplazar');


botondeEliminar.addEventListener('click', () => {
    parrafoeliminar.remove();
    console.log('El párrafo  eliminado');
});


botondeReemplazar.addEventListener('click', () => {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es el nuevo párrafo que lo ha reemplazado';

    parrafoeliminar.replaceWith(nuevoParrafo);
    console.log('El párrafo  reemplazado');
});

//Ejercicio 12,
const btnClonarTarjeta = document.getElementById("clonar-tarjeta");
const contenedorEj12 = document.getElementById("ej12-container");
const tarjetaOriginal = document.getElementById("tarjeta-original");

btnClonarTarjeta.addEventListener("click", () => {
    // Clonamos la tarjeta
    const clon = tarjetaOriginal.cloneNode(true);

    // Cambiamos el texto del clon
    clon.querySelector(".card-title").textContent = "Tarjeta Clonada";
    clon.querySelector(".card-text").textContent = "Este es el clon de la tarjeta original.";

    // Insertamos el clon antes del botón
    contenedorEj12.insertBefore(clon, btnClonarTarjeta);
});
//Ejercicio 13
botonEj13.textContent = 'Agregar elemento';
botonEj13.className = 'btn btn-success mt-2'; // Bootstrap para estilo
document.body.appendChild(botonEj13); // Lo añadimos al body

// Contador para numerar los elementos
let contador = listaEj13.children.length + 1;

// Evento click del botón
botonEj13.addEventListener('click', () => {
    // Crear un nuevo <li>
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = `Elemento ${contador}`;
    
    // Añadir el <li> a la lista
   listaEj13.appendChild(nuevoLi);
    
    // Incrementar contador
    contador++;
    });
//Ejercicio 14
const botonEliminar=document.getElementById('eliminarElemento');
botonEliminar.addEventListener('click', () => {
    if (listaEj13.lastElementChild) {
        listaEj13.lastElementChild.remove();
        console.log('Último elemento eliminado');
    } else {
        console.log('No hay elementos para eliminar');
    }
});

//Ejercicio 15
const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
    item.textContent = `Elemento ${index + 1}`;
});

//Ejercicio 16
const imagenes = [
    { titulo: "Montaña", url: "https://concepto.de/wp-content/uploads/2018/08/Picos-de-montana.jpg" },
    { titulo: "Lago", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Llao_Llao_Peninsula.jpg/1200px-Llao_Llao_Peninsula.jpg" },
    { titulo: "Bosque", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Grib_skov.jpg/1200px-Grib_skov.jpg" }
];

const galeria = document.getElementById("galeria");

imagenes.forEach(img => {
    galeria.innerHTML += `
        <div class="card col-3">
            <img src="${img.url}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${img.titulo}</h5>
            </div>
        </div>`;
});

//Ejercicio 17

//Ejercicio 18


//Ejercicio 19


//Ejercicio 20
