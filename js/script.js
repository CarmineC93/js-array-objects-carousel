/*
[x]Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
[x]Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
[x]Al click dell'utente sulle frecce verso sinistra o destra, 
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/

const games = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(extractElement(games));

//estraiamo e salviamo in una variabile l'elemento della pagina dove inseriremo questi elementi
const itemsContainer = document.querySelector(".items-container")

//inseriamo le immagini-elementi nella pagina attraverso un loop e un template literal
for(let i=0; i<games.length; i++){
const game = games[i];
    const box =    `<div class="item">
                        <img src="${game.image}" alt="${game.title}"> 
                        <span class="infos-game"> 
                            <h2>${game.title}</h2>
                            <p>${game.text}</p>
                        </span>
                    </div>`
    
    itemsContainer.innerHTML += box;
}


//salviamo gli elementi freccia in variabili
const prevArrw = document.querySelector(".prev")
const nextArrw = document.querySelector(".next")

//creiamo una variabile che tenga conto dell'indice attuale, quindi inizialmente di valore 0
let position = 0;

/*avendo tutti gli elementi display:none; in CSS, creo un'altra classe in CSS che abbia display block, in modo 
da rendere visibile l'elemento-immagine che ha quella classe*/
const items = document.getElementsByClassName("item");
//estraiamo più elementi contemporaneamente dalla pagina e li salviamo in una variabile come fosse un array
items[position].classList.add("active");

nextArrw.addEventListener("click", function(){
    //creiamo un controllo che impedisca di reiterare la funzione quando si raggiunga l'indice oltre il quale l'array finisce
    if(position < items.length -1){ //-1 perchè l'incremento va fermato al penultimo elemento, altrimenti ultimo+1 = sforiamo l'array
        //al click rimuoviamo la classe active dall'attuale elemento visibile
        items[position].classList.remove("active"); //essendo comandi comuni sia a if che a else avremmo potuto metterli anche fuori dalla condizione

        //incrementiamo di 1 l'indice per passare al successivo elemento-immagine
        position++;

        //aggiungiamo la classe active al nuovo attuale elemento (con indice maggiorato di 1)
        items[position].classList.add("active"); //essendo comandi comuni sia a if che a else avremmo potuto metterli anche fuori dalla condizione
        
    } //Altrimenti l'array riparte dalla prima immagine
    else { 
        items[position].classList.remove("active");
        
        position = 0;

        items[position].classList.add("active");
        
    }
}) 

prevArrw.addEventListener("click", function(){
    if(position > 0){ //non ">=" perchè il decremento va fermato prima dello zero altrimenti con 0-1 sforiamo l'array.
        items[position].classList.remove("active");

        position--;
        
        items[position].classList.add("active");

    } //altrimenti l'array riparte dall'ultima immagine
        else {
            items[position].classList.remove("active");

            position = items.length-1;
            
            items[position].classList.add("active");

        }
})

// FUNCTION

function extractElement(array){
    let element;
    for(let i = 0; i<array.length; i++){
        element = array[i];
    }
    return element
}
