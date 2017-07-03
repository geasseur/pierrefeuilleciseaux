function pcf(){
  var joueur;
  var ordi;
  var pointJoueur = 1;
  var pointOrdi = 1;

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
      console.log("ordi gagne, pointOrdi: "+pointOrdi);
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="pierre" && ordi=="feuille"){
      console.log("ordi gagne, pointOrdi: "+pointOrdi);
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="feuille" && ordi=="ciseaux"){
      console.log("ordi gagne, pointOrdi: "+pointOrdi);
      pointOrdi = pointOrdi + 1;
    }

    else if(joueur=="ciseaux" && ordi=="feuille"){
      console.log("joueur gagne, point du joueur : "+pointJoueur);
      pointJoueur = pointJoueur + 1;
    }

    else if(joueur=="feuille" && ordi=="pierre"){
      console.log("joueur gagne, point du joueur : "+pointJoueur);
      pointJoueur = pointJoueur + 1;
    }

    else if(joueur=="pierre" && ordi =="ciseaux"){
      console.log("joueur gagne, point du joueur : "+pointJoueur);
      pointJoueur = pointJoueur + 1;
    }

    else{
      console.log("vous avez mal rentrez un signe");
    }
  }

  if(pointJoueur==3){
    console.log("victoire : point du joueur: "+pointJoueur+ " point de l'ordi : "+pointOrdi);
  }
  else if(pointOrdi==3){
    console.log("defaite: point du joueur: "+pointJoueur+ " point de l'ordi : "+pointOrdi);
  }
}
pcf();
