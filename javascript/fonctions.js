//initialiser le prix de l'entrée et du repas à 0
var prixEntree=0; 
var prixRepas=0;

// tableau des entrées
var tabEntrees=[
    {"nom":"Salade", "prix":5.95,"src":"images/salade.jpg"},
    {"nom":"Escargots","prix":4.95,"src":"images/escargots.jpg"}];

// tableau des repas 
var tabRepas=[
    {"nom":"Spaghetti","prix":8.95,"src":"images/spaghetti.jpg"},
    {"nom":"Lasagne","prix":9.95,"src":"images/lasagne.jpg"}
];
    
// fonction pour charger le sélecteur Entrée
function remplirSelEntree() {
    var selEntree=document.querySelector('#selEntree');
    selEntree.options[selEntree.options.length]=new Option("Choisir une entrée");
	for (uneEntree of tabEntrees) {
        selEntree.options[selEntree.options.length]=new Option(uneEntree.nom);
	}
} 

// fonction pour charger le sélecteur Repas
function remplirSelRepas() {
    var selRepas=document.querySelector('#selRepas');
    selRepas.options[selRepas.options.length]=new Option("Choisir un repas");
	for (unRepas of tabRepas) {
        selRepas.options[selRepas.options.length]=new Option(unRepas.nom);
	}
} 

// aller chercher les options du tableau choisi dans les entrées
function infoEntreeChoisi(selEntree){
    var posEntreeChoisi=selEntree.selectedIndex-1;
    var entreeChoisie=tabEntrees[posEntreeChoisi];
    document.getElementById('imgEntree').src=entreeChoisie.src;
    document.getElementById('prixEntree').innerHTML="Prix : <strong>"+entreeChoisie.prix+" $</strong>";
    prixEntree=entreeChoisie.prix;
    calculerPrix(); //appeler la fonction de calcul - calculerPrix
}

// aller chercher les options du tableau choisi dans les repas
function infoRepasChoisi(selRepas){
    var posRepasChoisi=selRepas.selectedIndex-1;
    var repasChoisie=tabRepas[posRepasChoisi];
    document.getElementById('imgRepas').src=repasChoisie.src;
    document.getElementById('prixRepas').innerHTML="Prix : <strong>"+repasChoisie.prix+" $</strong>";
    prixRepas=repasChoisie.prix;
    calculerPrix(); //appeler la fonction de calcul - calculerPrix
}

//calculer les montants avec les taxes
function calculerPrix() {
	var prixAvantTaxes=prixEntree+prixRepas;
	var taxes=prixAvantTaxes*14.975/100;
	var prixTotal=prixAvantTaxes+taxes;
	document.getElementById('prix-avant-taxes').innerHTML=prixAvantTaxes.toFixed(2)+' $';
	document.getElementById('les-taxes').innerHTML=taxes.toFixed(2)+' $';
	document.getElementById('prix-total').innerHTML=prixTotal.toFixed(2)+' $';
}