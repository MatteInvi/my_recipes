// Array delle ricette DA AGGIORNARNE DA QUI
const ricette = [
    {
        id: 1,
        nome: 'Torta al cioccolato',
        linkImmagine: "https://www.giallozafferano.it/images/242-24248/Torta-tenerina_600x500.jpg",
        ingredienti: [{
            nome: "farina",
            quantità: "200 g"
        },
        {
            nome: "uova",
            quantità: "2"
        },
        {
            nome: "latte",
            quantità: "200 ml"
        }]


    },
    {
        id: 1,
        nome: 'Torta al cioccolato',
        linkImmagine: "https://www.giallozafferano.it/images/242-24248/Torta-tenerina_600x500.jpg",
        ingredienti: [{
            nome: "farina",
            quantità: "200 g"
        },
        {
            nome: "uova",
            quantità: "2"
        },
        {
            nome: "latte",
            quantità: "200 ml"
        }]


    },
    {
        id: 1,
        nome: 'Torta al cioccolato',
        linkImmagine: "https://www.giallozafferano.it/images/242-24248/Torta-tenerina_600x500.jpg",
        ingredienti: [{
            nome: "farina",
            quantità: "200 g"
        },
        {
            nome: "uova",
            quantità: "2"
        },
        {
            nome: "latte",
            quantità: "200 ml"
        }]


    },
    {
        id: 1,
        nome: 'Torta al cioccolato',
        linkImmagine: "https://www.giallozafferano.it/images/242-24248/Torta-tenerina_600x500.jpg",
        ingredienti: [{
            nome: "farina",
            quantità: "200 g"
        },
        {
            nome: "uova",
            quantità: "2"
        },
        {
            nome: "latte",
            quantità: "200 ml"
        }]


    },
    {
        id: 2,
        nome: 'Torta al cioccolato',
        linkImmagine: "https://www.giallozafferano.it/images/242-24248/Torta-tenerina_600x500.jpg",
        ingredienti: [{
            nome: "farina",
            quantità: "200 g"
        },
        {
            nome: "uova",
            quantità: "2"
        },
        {
            nome: "latte",
            quantità: "200 ml"
        }]
    }
];


// Apertura modale ingredienti
function apriModaleIngredienti(idRicetta) {
    const modale = document.getElementById('modale-ingredienti');
    const chiudiModale = document.getElementById('chiudi-modale-ingredienti');
    const ricetta = ricette.find(r => r.id === idRicetta);
    const contenutoTabella = document.getElementById('contenuto-tabella');

    modale.style.display = "flex";

    // Chiusura tramite tasto X
    chiudiModale.onclick = function () {
        modale.style.display = "none";
        contenutoTabella.innerHTML = '';
    }

    // Chiusura tramite click al di fuori della modale
    window.onclick = function (event) {
        const modale = document.getElementById('modale-ingredienti');

        if (event.target === modale) {
            modale.style.display = "none";
            contenutoTabella.innerHTML = "";
        }
    }

    // Ciclo for each per caricamento ingredienti
    ricetta.ingredienti.forEach(ingrediente => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <tr>
            <td class="ingrediente">${ingrediente.nome}</td>
            <td class="quantità" >${ingrediente.quantità}</td>
        </tr>
        `;
        contenutoTabella.appendChild(row);
    });
}

// Ricerca ricetta
const cardsRicetteDOM = document.getElementById('cards-container');
const inputRicerca = document.getElementById('input-ricerca-ricetta');
const btnRicerca = document.getElementById('btn-ricerca');


// Funzione per mostrare le ricette
function mostraRicette(listaDaMostrare) {
    cardsRicetteDOM.innerHTML = "";

    // Se non ci sono ricette mostra messaggio
    if (listaDaMostrare.length === 0) {
        cardsRicetteDOM.innerHTML = "<p>Nessuna ricetta trovata.</p>";
        return;
    }
    // Ciclo for each per mostrare le ricette
    listaDaMostrare.forEach(ricetta => {
        cardsRicetteDOM.innerHTML += `                
        <div onclick="apriModaleIngredienti(${ricetta.id})" class="card">
            <img class="img-ricetta" src="${ricetta.linkImmagine}" alt="${ricetta.nome}">
            <h2 class="nome-ricetta">${ricetta.nome}</h2>
        </div>`;
    });
}

// Funzione di ricerca
function eseguiRicerca() {
    const termineRicerca = inputRicerca.value.toLowerCase();

    const risultatiFiltrati = ricette.filter(ricetta => {

        return ricetta.nome.toLowerCase().includes(termineRicerca);
    });

    mostraRicette(risultatiFiltrati);
}



// Azioni da eseguire per la ricerca
btnRicerca.addEventListener('click', eseguiRicerca);
inputRicerca.addEventListener('input', eseguiRicerca);

// Caricamento di tutte le ricette in caso non ci sia una ricerca
mostraRicette(ricette);



