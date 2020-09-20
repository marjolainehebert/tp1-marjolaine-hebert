// tableau des entrées
var sousTotal, taxes, total;
var entrees=new Array();
    entrees['salade']=new Array('salade.jpg',5.95);
	entrees['escargots']=new Array('escargots.jpg',4.95);
    
var plat=new Array()
    plat['spaghetti']=new Array('spaghetti.jpg', 8.95);
    plat['lasagne']=new Array('lasagne.jpg', 9.95);
        
// fonction pour charger le sélecteur 
function chargerSel(){
	var selEntree=document.getElementById('selEntree');
	selEntree.options[0]=new Option("Choisir une entree");
	var i=1;
	for (uneEntree in entrees){
		selEntree.options[i++]=new Option(uneEntree);
	}
}     

//fonction pour afficher les items selon le choix du menu déroulant
function choixEntree(){
	var selEntree=document.getElementById('selEntree');
	var votreEntree=selEntree.options[selEntree.selectedIndex].text;
	var tab=entrees[votreEntree];
	document.getElementById('imgEntree').src='images/'+tab[0];
	alert("IMAGE="+tab[0]+"===="+"PRIX="+tab[1]+"$");
}