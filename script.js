const Note = document.querySelector("body p:first-of-type");
const  NotePREMIER = document.querySelector("body p:nth-of-type(2)");
const  NoteDEUSIEME= document.querySelector("body p:nth-of-type(3)");
const NoteTroisième = document.querySelector("body p:last-of-type");

var EleveScientique = [{

    "nomEtPrenom": " eyal amsellem",

    "Math": 10,
    "Anglais": 10,
    "Science": 18,

},{

    "nomEtPrenom": " libi amsellem",

    "Math": 10,
    "Anglais": 20,
    "Science": 8,

},{
    "nomEtPrenom": " lihi amsellem",

    "Math": 10,
    "Anglais": 20,
    "Science": 18,

},{
    "nomEtPrenom": " shani amsellem",

    "Math": 10,
    "Anglais": 0,
    "Science": 8,



}];

var calculeEyal = (EleveScientique[0].Math + EleveScientique[0].Anglais + EleveScientique[0].Science) /3 ;
var calculeLibi = (EleveScientique[1].Math + EleveScientique[1].Anglais + EleveScientique[1].Science) /3 ;
var calculeLihi = (EleveScientique[2].Math + EleveScientique[2].Anglais + EleveScientique[2].Science) /3 ;
var calculeShanie = (EleveScientique[3].Math + EleveScientique[3].Anglais + EleveScientique[3].Science) /3 ;

Note.addEventListener("click", canPass);
NotePREMIER.addEventListener("click", canPass1);
NoteDEUSIEME.addEventListener("click", canPass2);
NoteTroisième.addEventListener("click", canPass3);


function canPass() {

    if( calculeEyal > 10){
  
        Note.textContent = " ✅ Vous avez reussi " + " ta moyen et de : " + calculeEyal.toFixed(2);

    }else{
  
        Note.textContent = "    ❌  Tu repasse a la 2ème session" + " Ta moyen et de : " + calculeEyal + "  pour reussir il te faut une moyen de 10" ;

  }
  
  };

  function canPass1() {

    if( calculeLibi > 10){
  
        NotePREMIER.textContent = " ✅ Vous avez reussi " + " ta moyen et de : " + calculeLibi + "il te faut 10 de moyen";

    }else{
  
        NotePREMIER.textContent = "    ❌  Tu repasse a la 2ème session" + " Ta moyen et de : " + calculeLibi + " pour reussir il te faut une moyen de 10" ;

  }
  
  };

  function canPass2() {

    if( calculeLihi > 10){
  
        NoteDEUSIEME.textContent = " ✅ Vous avez reussi " + " ta moyen et de : " + calculeLihi + "il te faut 10 de moyen";

    }else{
  
        NoteDEUSIEME.textContent = "    ❌  Tu repasse a la 2ème session" + " Ta moyen et de : " + calculeLihi + "  pour reussir il te faut une moyen de 10" ;

  }
  
  };

  function canPass3() {

    if( calculeShanie > 10){
  
        NoteTroisième.textContent = " ✅ Vous avez reussi " + " ta moyen et de : " + calculeShanie + "il te faut 10 de moyen";

    }else{
  
        NoteTroisième.textContent = "    ❌  Tu repasse a la 2ème session" + " Ta moyen et de : " + calculeShanie + "  pour reussir il te faut une moyen de 10" ;

  }
  
  }



