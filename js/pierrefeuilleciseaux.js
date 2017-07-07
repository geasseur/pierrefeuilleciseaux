//variable de CreationPartie
var nom;
var prenom;
var pseudo = "";
//variable pcf
var joueur;
var ordi;
var pointJoueur = 1;
var pointOrdi = 1;

function CreationPartie(){
  nom = prompt("entrez votre nom");
  prenom = prompt("entrez votre prenom");
  pseudo = prompt("donnez un pseudo");
  if(nom != "" && prenom != "" && pseudo !=""){
    document.getElementById("pseudoJoueur").innerHTML = pseudo;
  }
  else{
    confirm("vous avez mal fait, recommencez");
  }
}

document.getElementById("carteCiseauxJoueur").addEventListener("mousedown", choixCiseaux);

document.getElementById("cartePierreJoueur").addEventListener("mousedown", Pierre);

document.getElementById("carteFeuilleJoueur").addEventListener("mousedown", choixFeuille);

function choixCiseaux(){
  if(nom != "" && prenom != "" && pseudo !=""){
    joueur = "ciseaux";
    alert("test")
    document.getElementById("ciseauxPlateauJoueur").style.display = "inline-block";
    return joueur;
  }
  else{
    confirm("appuyez sur le bouton commencez partie pour démarrer une partie");
    return "";
  }

}

function choixPierre(){
  alert("test")
  joueur ="pierre";
  document.getElementById("cartePierreJoueur").style.position = "relative";
  return joueur;
}

function choixFeuille(){
  alert("test")
  joueur = "feuille";
  document.getElementById("carteFeuilleJoueur").style.position = "relative";
  return joueur;
}

if(joueur != ""){
  pcf();
}

function pcf(){

  while(joueur==""){

  }

  while(pointJoueur<4 && pointOrdi<4){

    ordi=Math.trunc(Math.random()*100);
    if(ordi <= 33){
      ordi="ciseaux";
    }

    else if(ordi>33 && ordi<=66){
      ordi = "pierre";
    }

    else{
      ordi = "feuille";
    }

    if(joueur===ordi){
      console.log("égalité");
    }

    else if(joueur=="ciseaux" && ordi=="pierre"){
      console.log("ordi gagne, la manche");
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="pierre" && ordi=="feuille"){
      console.log("ordi gagne, la manche");
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="feuille" && ordi=="ciseaux"){
      console.log("ordi gagne, la manche");
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="ciseaux" && ordi=="feuille"){
      console.log("joueur gagne, la manche");
      pointJoueur = pointJoueur + 1;
    }

    else if(joueur=="feuille" && ordi=="pierre"){
      console.log("joueur gagne, la manche");
      pointJoueur = pointJoueur + 1;
    }

    else if(joueur=="pierre" && ordi =="ciseaux"){
      console.log("joueur gagne, la manche");
      pointJoueur = pointJoueur + 1;
    }

    else{
      console.log("vous avez mal rentrez un signe");
    }
    if(pointJoueur==4){
      console.log("victoire du joueur ! ");
    }
    else if(pointOrdi==4){
      console.log("victoire de l'ordinateur ! ");
    }
  }
}



/*function pcf(){


  while(pointJoueur<4 && pointOrdi<4){

    ordi=Math.trunc(Math.random()*100);
    joueur=prompt("Quel signe?pierre, ciseaux ou feuille");
    if(ordi <= 33){
      ordi="ciseaux";
    }

    else if(ordi>33 && ordi<=66){
      ordi = "pierre";
    }

    else{
      ordi = "feuille";
    }

    if(joueur===ordi){
      console.log("égalité");
    }

    else if(joueur=="ciseaux" && ordi=="pierre"){
      console.log("ordi gagne, la manche");
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="pierre" && ordi=="feuille"){
      console.log("ordi gagne, la manche");
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="feuille" && ordi=="ciseaux"){
      console.log("ordi gagne, la manche");
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="ciseaux" && ordi=="feuille"){
      console.log("joueur gagne, la manche");
      pointJoueur = pointJoueur + 1;
    }

    else if(joueur=="feuille" && ordi=="pierre"){
      console.log("joueur gagne, la manche");
      pointJoueur = pointJoueur + 1;
    }

    else if(joueur=="pierre" && ordi =="ciseaux"){
      console.log("joueur gagne, la manche");
      pointJoueur = pointJoueur + 1;
    }

    else{
      console.log("vous avez mal rentrez un signe");
    }
    if(pointJoueur==4){
      console.log("victoire du joueur ! ");
    }
    else if(pointOrdi==4){
      console.log("victoire de l'ordinateur ! ");
    }
  }
}
*/
