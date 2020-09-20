// tableau des entrées
var entrees=new Array();
    entrees['salade']=new Array('salade.jpg',5.95);
	entrees['escargots']=new Array('escargots.jpg',4.95);

// tableau des repas
var repas=new Array()
	repas['spaghetti']=new Array('spaghetti.jpg', 8.95);
	repas['lasagne']=new Array('lasagne.jpg', 9.95);

	//initialiser le prix de l'entrée et du repas à 0
var prixEntree=0; 
var prixRepas=0;
    
// fonction pour charger le sélecteur Entrée
function chargerSelEntree(){
	var selEntree=document.getElementById('selEntree');
	selEntree.options[0]=new Option("Choisir une entree");
	var i=1;
	for (uneEntree in entrees){
		selEntree.options[i++]=new Option(uneEntree);
	}
}     
// fonction pour charger le sélecteur Repas
function chargerSelRepas(){
	var selRepas=document.getElementById('selRepas');
	selRepas.options[0]=new Option("Choisir une repas");
	var i=1;
	for (unRepas in repas){
		selRepas.options[i++]=new Option(unRepas);
	}
}  

//fonction pour afficher les items selon le choix du menu déroulant
function choixEntree(){
	var selEntree=document.getElementById('selEntree');
	var votreEntree=selEntree.options[selEntree.selectedIndex].text;
	var tab=entrees[votreEntree];
    document.getElementById('imgEntree').src='images/'+tab[0];
	prixEntree=tab[1];
	document.getElementById('prixEntree').innerHTML='Prix : '+prixEntree+" $";
	calculerPrix()
}

function choixRepas(){
	var selRepas=document.getElementById('selRepas');
	var votreRepas=selRepas.options[selRepas.selectedIndex].text;
	var tab=repas[votreRepas];
    document.getElementById('imgRepas').src='images/'+tab[0];
	prixRepas=tab[1];
	document.getElementById('prixRepas').innerHTML='Prix : '+prixRepas+" $";
	calculerPrix()
}

function calculerPrix() {
	var prixAvantTaxes=prixEntree+prixRepas;
	var taxes=prixAvantTaxes*14.975/100;
	var prixTotal=prixAvantTaxes+taxes;
	document.getElementById('prix-avant-taxes').innerHTML=prixAvantTaxes.toFixed(2)+' $';
	document.getElementById('les-taxes').innerHTML=taxes.toFixed(2)+' $';
	document.getElementById('prix-total').innerHTML=prixTotal.toFixed(2)+' $';
}