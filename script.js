

  function getAge(pets) {
    //appel fonction dans resultat reteur de fonction global avec meth map qui permet de parcourir chaque element
    return pets.map(tab1 => {
        //new date()getfullyear() script qui permet de séléctionner date de systéme selement avec YYYY
      var age = new Date().getFullYear() - parseInt(tab1.bornOn);
      //ajouter nouveau element calculer à la fin de l'objet
      return { ...tab1, age };
    });
  };

function findDog(pets){
    //appliquer méthode filter par type égal à valeur 'dog' puis en affecté dans nv tableau nommé tab2
     return pets.filter(tab2 => tab2.type==='dog');
};

function findJasper(pets){
    //find element direct avec prop name='jasper'
    var jasp = pets.find(tab3 => tab3.name === 'Jasper');
    if(jasp){
        //si jasper (true) appliquer méthode de calcule age si non pas affichage message d'erreur
        var age = new Date().getFullYear() - parseInt(jasp.bornOn);
        return `${jasp.name} is ${age} years old`;
    } else {
        return "Jasper is not found";
    }
};





console.log(getAge([  { name: 'Max', type: 'dog', bornOn: 2018 },
{ name: 'Angel', type: 'cat', bornOn: 2015 },
{ name: 'Jasper', type: 'dog', bornOn: 2016 }]));

console.log(findDog([  { name: 'Max', type: 'dog', bornOn: 2018 },
{ name: 'Angel', type: 'cat', bornOn: 2015 },
{ name: 'Jasper', type: 'dog', bornOn: 2016 }]));


console.log(findJasper([{ name: 'Max', type: 'dog', bornOn: 2018 },
{ name: 'Angel', type: 'cat', bornOn: 2015 },
{ name: 'Jasper', type: 'dog', bornOn: 2016 }]));