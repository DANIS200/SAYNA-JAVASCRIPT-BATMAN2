const form = document.querySelector('.form-quizz');
 let tableauReslults = [];
 //reponse de chaque question ou utilise api
 const reponses = ['a','b','a','a','a','c','a','b','c','a','c','a','b','a','c'];
 const titreResultat = document.querySelector('.resultats h2');
 const noteResultat = document.querySelector('.note');
 const aideResultat = document.querySelector('.aide');
 const toutesLesQuestions = document.querySelectorAll('.question-block');
 let verifTableau = [];

 form.addEventListener('submit',(e)=>{
    e.preventDefault();

   // console.log(document.querySelector('input[name="q1"]:checked').value);

   for(i = 1; i < 16; i++){
    tableauReslults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
   }
   //console.log(tableauReslults);
   verifFunc(tableauReslults);
   tableauReslults = [];
 })

 function verifFunc(tabResultats){
      
    for(let a = 0; a < 15;a++) {

        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        }
        else{
            verifTableau.push(false);
        }
    }
  //  console.log(verifTableau);
  afficherResultats(verifTableau);
  couleursFonction (verifTableau);
    verifTableau = [];
 }

 function afficherResultats(tabCheck){

    const nbDeFautes = tabCheck.filter(e1 => e1 !== true).length;
    //console.log(nbDeFautes) ;

    switch(nbDeFautes){

        case 0:
            titreResultat.innerText = " ✔️ 15/15 Bravo, c'est un sans faute ! ✔️ ";
            aideResultat.innerText  ='vous êtes véritablement un super fan de l\'univers de Batman ! Comics ,films ,rien ne vous échappe, Bruce wayne de quoi être fier,Gotham est paix et Batman peut prendre sa retraite, vous veiller aux grains';
            noteResultat.innerHTML = '<a href="#question1">recommencer le quiz</a>';
        break;  
        case 1:
            titreResultat.innerText = "14/15 Vous y êtes  presque! ";
            aideResultat.innerText  ='vous êtes véritablement un super fan de l\'univers de Batman ! Comics ,films ,rien ne vous échappe, Bruce wayne de quoi être fier,Gotham est paix et Batman peut prendre sa retraite, vous veiller aux grains';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;
        case 2:
            titreResultat.innerText = "13/15 Vous y êtes  presque!";
            aideResultat.innerText  ='vous êtes véritablement un super fan de l\'univers de Batman ! Comics ,films ,rien ne vous échappe, Bruce wayne de quoi être fier,Gotham est paix et Batman peut prendre sa retraite, vous veiller aux grains';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;
        case 3:
            titreResultat.innerText = "12/15 Vous y êtes  presque! ";
            aideResultat.innerText  ='vous êtes véritablement un super fan de l\'univers de Batman ! Comics ,films ,rien ne vous échappe, Bruce wayne de quoi être fier,Gotham est paix et Batman peut prendre sa retraite, vous veiller aux grains';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;   
        case 4:
            titreResultat.innerText = "11/15  Vous y êtes  presque!";
            aideResultat.innerText  ='vous êtes véritablement un super fan de l\'univers de Batman ! Comics ,films ,rien ne vous échappe, Bruce wayne de quoi être fier,Gotham est paix et Batman peut prendre sa retraite, vous veiller aux grains';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;  
        case 5:
            titreResultat.innerText = "10/15 pas mal !";
            aideResultat.innerText  ='Encore un peu d\'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouver marcher la tête haute vos connaissances là .Avous de les consolider, foncer Gotham est votre terain de chasse !';
            noteResultat.innerHTML='<a href="#question1">recommencer le quiz</a>';
        break; 
        case 6:
            titreResultat.innerText = " 09/15 Il rest quelques erreurs! ";
            aideResultat.innerText  ='Encore un peu d\'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouver marcher la tête haute vos connaissances là .Avous de les consolider, foncer Gotham est votre terain de chasse !';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;  
        case 7:
            titreResultat.innerText = "08/15  Encore un effort..!  ";
            aideResultat.innerText  ='Encore un peu d\'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouver marcher la tête haute vos connaissances là .Avous de les consolider, foncer Gotham est votre terain de chasse !';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;
        case 8:
            titreResultat.innerText = "07/15 Encore un effort..! ";
            aideResultat.innerText  ='Encore un peu d\'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouver marcher la tête haute vos connaissances là .Avous de les consolider, foncer Gotham est votre terain de chasse !';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;
        case 9:
            titreResultat.innerText = "06/15 Encore un effort..!";
            aideResultat.innerText  ='Encore un peu d\'entraînement avec le Chevalier Noir vous serait bénéfique, mais vous pouver marcher la tête haute vos connaissances là .Avous de les consolider, foncer Gotham est votre terain de chasse !';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;   
        case 10:
            titreResultat.innerText = " 05/15 c'est pas tout a fait ca...! ";
            aideResultat.innerText  ='Oula ! Heureusement que le Riddler est sous les verrous... il faut que vous repossier les films cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! rien n\'est perdu!';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;  
        case 11:
            titreResultat.innerText = " 05/15 c'est pas tout a fait ca...! ";
            aideResultat.innerText  ='Oula ! Heureusement que le Riddler est sous les verrous... il faut que vous repossier les films cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! rien n\'est perdu!';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break; 
        case 12:
            titreResultat.innerText = " 05/15 c'est pas tout a fait ca...! ";
            aideResultat.innerText  ='Oula ! Heureusement que le Riddler est sous les verrous... il faut que vous repossier les films cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! rien n\'est perdu!';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;  
        case 13:
            titreResultat.innerText = " 05/15 c'est pas tout a fait ca...! ";
            aideResultat.innerText  ='Oula ! Heureusement que le Riddler est sous les verrous... il faut que vous repossier les films cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! rien n\'est perdu!';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;
        case 14:
            titreResultat.innerText = " 05/15 c'est pas tout a fait ca...! ";
            aideResultat.innerText  ='Oula ! Heureusement que le Riddler est sous les verrous... il faut que vous repossier les films cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! rien n\'est perdu!';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;
        case 15:
            titreResultat.innerText = " 05/15 c'est pas tout a fait ca...! ";
            aideResultat.innerHTML  ='Oula ! Heureusement que le Riddler est sous les verrous... il faut que vous repossier les films cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! rien n\'est perdu!';
            noteResultat.innerHTML ='<a href="#question1">recommencer le quiz</a>';
        break;   

        default :
        'wop,cas innatendu.' ;     
    }
 }
 titreResultat.style.textTransform = 'uppercase';




 function couleursFonction(tabValBool){
    for (let j = 0; j < tabValBool.length; j++){
        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        }
        else{
            toutesLesQuestions[j].style.background = '#d30d1a8e';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() =>{
                toutesLesQuestions[j].classList.remove('echec');
            },500 )
        }
    }
 }


 toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () =>{
        item.style.background = "#3333335a";
    })
 })