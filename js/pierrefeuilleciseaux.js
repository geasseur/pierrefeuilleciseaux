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
var signe;
var nbCarte;
var carte = document.getElementsByClassName("carteJeuJoueur");

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
function test () {
  alert("Nouveau Tour");
}


function nouveauTour(){

  if(pointOrdi == 3 || pointJoueur == 3){
    document.getElementById("ordiGagne").style.display = "none";
    document.getElementById("joueurGagne").style.display = "none";
    document.getElementById("egalite").style.display = "none";
    finJeu();
  }
  else {
    joueur ="";
    ordi = "";
    var listCarte = document.getElementsByClassName("cartePlateau");
    //effacement des cartes du tableau
    for(i = 0; i < listCarte.length; i++){
      listCarte[i].style.display = "none"
    }
    //effacement du panneaux central
    document.getElementById("ordiGagne").style.display = "none";
    document.getElementById("joueurGagne").style.display = "none";
    document.getElementById("egalite").style.display = "none";
    pcf();
  }
}

function confrontation(){
  if(joueur=="ciseaux" && ordi=="pierre"){
    pointOrdi = pointOrdi + 1;
    document.getElementById("ordiGagne").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }

  else if(joueur=="pierre" && ordi=="feuille"){
    pointOrdi = pointOrdi + 1;
    document.getElementById("ordiGagne").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }

  else if(joueur=="feuille" && ordi=="ciseaux"){
    pointOrdi = pointOrdi + 1;
    document.getElementById("ordiGagne").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }

  else if(joueur=="ciseaux" && ordi=="feuille"){
    pointJoueur = pointJoueur + 1;
    document.getElementById("joueurGagne").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }

  else if(joueur=="feuille" && ordi=="pierre"){
    pointJoueur = pointJoueur + 1;
    document.getElementById("joueurGagne").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }

  else if(joueur=="pierre" && ordi =="ciseaux"){
    pointJoueur = pointJoueur + 1;
    document.getElementById("joueurGagne").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }
  else{
    document.getElementById("egalite").style.display = "inline-block";
    setTimeout(test, 1000);
    setTimeout(nouveauTour, 1000);
  }
}

function pcf(){

    document.getElementById("pointJoueur").innerHTML = pointJoueur;
    document.getElementById("pointOrdi").innerHTML = pointOrdi;

    if(joueur == ""){
      //choix donné au joueur
      document.getElementById("carteCiseauxJoueur").addEventListener("mousedown", function() {choix('ciseaux', 0)});
      document.getElementById("carteFeuilleJoueur").addEventListener("mousedown", function() {choix('pierre', 1)});
      document.getElementById("cartePierreJoueur").addEventListener("mousedown", function() {choix('feuille', 2)});
    }
  }
  function choix(signe, nbCarte){
      joueur = signe;
      console.log(joueur);
      console.log(carte[nbCarte]);
      carte[nbCarte].style.display = "inline-block";
      choixOrdi();
      confrontation();
    }

function finJeu(){
  if(pointJoueur == 3){
    document.getElementById("pointJoueur").innerHTML = pointJoueur;
    document.getElementById("victoire").style.display = "inline-block";
    document.getElementById("mainOrdi").style.display = "none";
    document.getElementById("mainJoueur").style.display = "none";
    document.getElementById("boutonNouveauJeu").style.display = "block";
    document.getElementById("boutonCommencer").style.display = "none";
  }
  else if(pointOrdi == 3){
    document.getElementById("pointOrdi").innerHTML = pointOrdi;
    document.getElementById("defaite").style.display = "inline-block";
    document.getElementById("mainOrdi").style.display = "none";
    document.getElementById("mainJoueur").style.display = "none";
    document.getElementById("boutonCommencer").style.display = "none";
    document.getElementById("boutonNouveauJeu").style.display = "block";
  }
}

function nouveauJeu(){
  pointJoueur = 0;
  pointOrdi = 0;
  joueur ="";
  ordi = "";
  var listCarte = document.getElementsByClassName("cartePlateau");
  //effacement des cartes du tableau
  for(i = 0; i < listCarte.length; i++){
    listCarte[i].style.display = "none"
  }
  document.getElementById("victoire").style.display = "none";
  document.getElementById("defaite").style.display = "none";
  document.getElementById("mainOrdi").style.display = "inline-block";
  document.getElementById("mainJoueur").style.display = "inline-block";
  pcf();
}
