//variable de CreationPartie
var nom;
var prenom;
var pseudo;
//variable pcf
var numOrdi = 0;
var joueur = "";
var ordi = "";
var pointJoueur = 1;
var pointOrdi = 1;

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

//fonction de selection des cartes du joueur

function choixCiseaux(){
    joueur = "ciseaux";
    alert("test")
    document.getElementById("ciseauxPlateauJoueur").style.display = "inline-block";
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
    return {joueur, numOrdi};
  }

function choixPierre(){
    joueur = "pierre";
    alert("test")
    document.getElementById("pierrePlateauJoueur").style.display = "inline-block";
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
    return {joueur, numOrdi};
  }

function choixFeuille(){
    joueur = "feuille";
    alert("test")
    document.getElementById("feuillePlateauJoueur").style.display = "inline-block";
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
    return {joueur, numOrdi};
}

function nouveauTour(){
  if(pointJoueur == 3 || pointJoueur == 3){
    if(pointJoueur == 3){
      console.log("victoire du joueur ! ");
    }
    else if(pointOrdi == 3){
      console.log("victoire de l'ordinateur ! ");
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

function pcf(){

    document.getElementById("pointJoueur").innerHTML = pointJoueur;
    document.getElementById("pointOrdi").innerHTML = pointOrdi;

    if(joueur == ""){
      document.getElementById("carteCiseauxJoueur").addEventListener("mousedown", choixCiseaux);
      document.getElementById("carteFeuilleJoueur").addEventListener("mousedown", choixFeuille);
      document.getElementById("cartePierreJoueur").addEventListener("mousedown", choixPierre);
    }

  //CONFRONTATION
      if(joueur===ordi){
        setTimeout(nouveauTour(), 3000);
      }

      else if(joueur=="ciseaux" && ordi=="pierre"){
        console.log("ordi gagne, la manche");
        pointOrdi = pointOrdi + 1;
        document.getElementById("ordiGagne").style.display = "inline-block"
        setTimeout(nouveauTour(), 3000);
      }

      else if(joueur=="pierre" && ordi=="feuille"){
        console.log("ordi gagne, la manche");
        pointOrdi = pointOrdi + 1;
        document.getElementById("ordiGagne").style.display = "inline-block"
        setTimeout(nouveauTour(), 3000);
      }

      else if(joueur=="feuille" && ordi=="ciseaux"){
        console.log("ordi gagne, la manche");
        pointOrdi = pointOrdi + 1;
        document.getElementById("ordiGagne").style.display = "inline-block"
        setTimeout(nouveauTour(), 3000);
      }

      else if(joueur=="ciseaux" && ordi=="feuille"){
        console.log("joueur gagne, la manche");
        pointJoueur = pointJoueur + 1;
        document.getElementById("joueurGagne").style.display = "inline-block"
        setTimeout(nouveauTour(), 3000);
      }

      else if(joueur=="feuille" && ordi=="pierre"){
        console.log("joueur gagne, la manche");
        pointJoueur = pointJoueur + 1;
        document.getElementById("joueurGagne").style.display = "inline-block"
        setTimeout(nouveauTour(), 3000);
      }

      else if(joueur=="pierre" && ordi =="ciseaux"){
        console.log("joueur gagne, la manche");
        pointJoueur = pointJoueur + 1;
        document.getElementById("joueurGagne").style.display = "inline-block"
        setTimeout(nouveauTour(), 3000);
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
