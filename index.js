//9.2
let nomUtilisateur = "Alderick";
console.log("Bienvenue " + nomUtilisateur + " à notre agence de voyages");
let textTest = document.getElementById("nom-utilisateur");

//textTest.textContent = nomUtilisateur;

//9.3
//Sélection du bouton à cliquer
let btnAjouterCommentaire = document.getElementById("btn-ajouter-commentaire");

function ajouterUnCommentaire(contenuTexte) {
    let baliseCommentaire = document.createElement("li");
    baliseCommentaire.textContent = contenuTexte;
    baliseCommentaire.className = "list-group-item";
 
    let parentAdoptif = document.getElementById("liste-commentaires");
 
    parentAdoptif.appendChild(baliseCommentaire);
}

ajouterUnCommentaire("Wow! Quel voyage!");

//Ajout des de l'écouteur d'événement (click) sur le bouton
btnAjouterCommentaire.addEventListener("click", () => ajouterUnCommentaire(document.getElementById("commentaire").value));

//9.4
//Sélection des deux boutons
let boutonPlus = document.getElementById("btn-plus");
let boutonMoins = document.getElementById("btn-moins");

let nombre = parseInt(document.getElementById('quantity').value);

//Ajout des écouteurs d'événements
boutonPlus.addEventListener("click", () => augmenterQuantite());
boutonMoins.addEventListener("click",() => diminuerQuantite());
function augmenterQuantite(){
    nombre = nombre + 1;
    document.getElementById('quantity').value = nombre;
    checkDiscount();
    calcTotal();
}
function diminuerQuantite(){
    nombre = nombre - 1;
    document.getElementById('quantity').value = nombre;
    checkDiscount();
    if(nombre <= 0){
    nombre = 0;
    console.log(nombre);
    }
    calcTotal();
}
function checkDiscount(){
    if(nombre > 2){
        document.getElementById('msg-discount').className = "display-on";
    } else if (nombre <= 2){
        document.getElementById('msg-discount').className = "display-off";
    }
}

let unitPrice = 20;
let total = document.getElementById('total').value;
function calcTotal(){
    total = unitPrice * nombre;
    document.getElementById('total').textContent = total + '$';
}

//9.5

