//variable de CreationPartie
var nom;
var prenom;
var pseudo;
//variable pcf
var numOrdi = 0;
var joueur = "";
var ordi = "";
var pointJoueur = 0;
var pointOrdi = 0;

function CreationPartie(){
  nom = prompt("entrez votre nom");
  prenom = prompt("entrez votre prenom");
  pseudo = prompt("donnez un pseudo");
  if(nom != "" && prenom != "" && pseudo !=""){
    document.getElementById("pseudoJoueur").innerHTML = pseudo;
    pcf();
  }
  else{
    confirm("vous avez mal fait, recommencez");
  }
}

//fonction choix ordinateur

function choixOrdi(){

}

//funciton choix ordi

function choixOrdi(){
  numOrdi = Math.trunc(Math.random()*100);
  if(numOrdi <= 33){
    ordi="ciseaux";
    document.getElementById("ciseauxPlateauOrdi").style.display = "inline-block";
  }

  else if(numOrdi>33 && numOrdi<=66){
    ordi = "pierre";
    document.getElementById("pierrePlateauOrdi").style.display = "inline-block";
  }

  else{
    ordi = "feuille";
    document.getElementById("feuillePlateauOrdi").style.display = "inline-block";
  }
  return ordi;
}

//fonction de selection des cartes du joueur

function choixCiseaux(){
    joueur = "ciseaux";
    document.getElementById("ciseauxPlateauJoueur").style.display = "inline-block";
    choixOrdi();
    alert("ordi : " + ordi + " joueur : "+joueur);
    confrontation();
  }

function choixPierre(){
    joueur = "pierre";
    document.getElementById("pierrePlateauJoueur").style.display = "inline-block";
    choixOrdi();
    alert("ordi : " + ordi + " joueur : "+joueur);
    confrontation();
  }

function choixFeuille(){
    joueur = "feuille";
    document.getElementById("feuillePlateauJoueur").style.display = "inline-block";
    choixOrdi();
    alert("ordi : " + ordi + " joueur : "+joueur);
    confrontation();
}

function nouveauTour(){
  if(pointOrdi == 3 || pointJoueur == 3){
    if(pointJoueur == 3){
      alert("victoire du joueur ! ");
      return "";
    }
    else if(pointOrdi == 3){
      alert("victoire de l'ordinateur ! ");
      return "";
    }
  }
  else {
    joueur ="";
    ordi = "";
    var listCarte = document.getElementsByClassName("cartePlateau");
    for(i = 0; i < listCarte.length; i++){
      listCarte[i].style.display = "none"
    }
    pcf();
  }
}

function confrontation(){
  if(joueur=="ciseaux" && ordi=="pierre"){
    alert("ordi gagne, la manche");
    pointOrdi = pointOrdi + 1;
    document.getElementById("ordiGagne").style.display = "inline-block"
    setTimeout(nouveauTour(), 3000);
  }

  else if(joueur=="pierre" && ordi=="feuille"){
    alert("ordi gagne, la manche");
    pointOrdi = pointOrdi + 1;
    document.getElementById("ordiGagne").style.display = "inline-block"
    setTimeout(nouveauTour(), 3000);
  }

  else if(joueur=="feuille" && ordi=="ciseaux"){
    alert("ordi gagne, la manche");
    pointOrdi = pointOrdi + 1;
    document.getElementById("ordiGagne").style.display = "inline-block"
    setTimeout(nouveauTour(), 3000);
  }

  else if(joueur=="ciseaux" && ordi=="feuille"){
    alert("joueur gagne, la manche");
    pointJoueur = pointJoueur + 1;
    document.getElementById("joueurGagne").style.display = "inline-block"
    setTimeout(nouveauTour(), 3000);
  }

  else if(joueur=="feuille" && ordi=="pierre"){
    alert("joueur gagne, la manche");
    pointJoueur = pointJoueur + 1;
    document.getElementById("joueurGagne").style.display = "inline-block"
    setTimeout(nouveauTour(), 3000);
  }

  else if(joueur=="pierre" && ordi =="ciseaux"){
    alert("joueur gagne, la manche");
    pointJoueur = pointJoueur + 1;
    document.getElementById("joueurGagne").style.display = "inline-block"
    setTimeout(nouveauTour(), 3000);
  }
  else{
    alert("egalite");
    setTimeout(nouveauTour(), 3000);
  }
}

function pcf(){

    document.getElementById("pointJoueur").innerHTML = pointJoueur;
    document.getElementById("pointOrdi").innerHTML = pointOrdi;

    if(joueur == ""){
      //choix donné au joueur
      document.getElementById("carteCiseauxJoueur").addEventListener("mousedown", choixCiseaux);
      document.getElementById("carteFeuilleJoueur").addEventListener("mousedown", choixFeuille);
      document.getElementById("cartePierreJoueur").addEventListener("mousedown", choixPierre);
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
