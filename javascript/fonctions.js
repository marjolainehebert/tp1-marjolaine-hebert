
// tableau des entrées
var entrees=new Array();
entrees['salade']=new Array('salade.jpg',5);
entrees['escargots']=new Array('escargots.jpg',25);

// fonction pour charger le sélecteur 
function chargerSel(){
    var selEntree=document.getElementById('selEntree');
    selEntree.options[0]=new Option("Choisir une entree");
    var i=1;
    for (uneEntree in entrees){
        selEntree.options[i++]=new Option(uneEntree);
    }
}

//fonction pour afficher les items selon le choix dans le menu déroulant
function choixEntree(){
    var selEntree=document.getElementById('selEntree');
    var votreEntree=selEntree.options[selEntree.selectedIndex].text;
    var tab=entrees[votreEntree];
    document.getElementById('imgEntree').src=tab[0];
    alert("IMAGE="+tab[0]+"===="+"PRIX="+tab[1]+"$");
}