function first (number1, number2) {
    console.log('la valeur1 >>>>>' , number1)
    console.log('la valeur2 >>>>>' , number2)
}

first('je suis Joel', 'Je suis Bruno')

var classeA = [ {nom: "Marc", moyenne: 16}
            , {nom: "Sonia", moyenne: 8}
            , {nom: "Cecilla", moyenne: 4}
            , {nom: "Matheo", moyenne: 14} 
            , {nom: "Ange", moyenne: 12} 
]

var classeB = [ {nom: "Joel", moyenne: 17}
            , {nom: "Jeff", moyenne: 18}
            , {nom: "Rodrigue", moyenne: 2}
            , {nom: "Anais", moyenne: 9} 
            , {nom: "Britney", moyenne: 16} 
]

var classeC = [ {nom: "Yanis", moyenne: 12}
            , {nom: "Mohamed", moyenne: 13}
            , {nom: "Bastien", moyenne: 7}
            , {nom: "Math", moyenne: 6} 
            , {nom: "Mbappe", moyenne: 10} 
]

function student (eleve){
  for (let i = 0; i < eleve.length; i++){
   let eleves = eleve[i]

   if(eleves.moyenne >= 10){
    console.log('il a la moyenne', eleve[i])
   }else {
    console.log('il a pas la moyenne dommage', eleve[i])
   }
  }
}

student(classeA)
student(classeB)
student(classeC)