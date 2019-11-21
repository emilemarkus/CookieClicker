const createElement = (balise, styles = {}, classes = [], texte) => {
    const balise_element = document.createElement(balise); 
    for(const style in styles){
        balise_element.style[style] = styles[style]; 
    }
    for (const classe of classes){
        balise_element.classList.add(classe); 
    }
    if(texte){
        balise_element.textContent = texte; 
    }
    return balise_element;
}
    

class Amelioration{
  constructor(name, color, basicEffect, price, number = 0){
      this.color = color;
      this.name = name; 
      this.basicEffect = basicEffect; 
      this.number = number; 
      this.price = price; 
      this.element = document.getElementById(this.name); 
      //autoClicker , cookieDingler , grandMa, pedoBear 
  }

  displayElement(){
    //fonction qui met à jour l'élément 
    if(balance < this.price){//on peut le faire en ternaire mais pas le but 
        this.element.style.borderColor = 'red'; 
    }else{
        this.element.style.borderColor = 'black'; 
    }
    this.element.getElementsByClassName(`${this.name}_description_prix`)[0].textContent = this.price; //mise à jour du prix OK 
    this.element.getElementsByClassName(`${this.name}_nbItem`)[0].textContent = this.number; //mise à jour du nb 
  }

  buyItem(balance){
    Amelioration.balanceToBuy(balance); 
    if(balance < this.price){ //si on n'a pas l'argent pour acheter le tout alors on ne fait rien 
        return balance; 
    }else{ 
        let previous_price = this.price; //on prend le prix initial en mémoire (sinon on paye toujours trop)
        //il faut ensuite mettre à jour l'élément 
        this.number++; 
        this.displayNumber(); 
        this.price = parseInt(1.2*this.price); //on augmente le prix de 20%
        Amelioration.balanceToBuy(balance); //mise à jour du contenu et affichage de nos créances ... 
        return balance -= previous_price; 
    }
  }

  buyUpgrade(balance){
      //l'upgrade va toujours doubler la production (petite fonction lambda) faut trouver une fonction évolution (pour dire quand pret ou pas)
      //alert('Bonjour'); Confer Valeryia 
  }

  displayInformations(){
      //on va le faire en attendant Godo ...
      console.log('Bonjour'); 
      const div = createElement('div', {
        'backgroundColor' : 'red'
        }, ['visible'], 'Bonjour tout le monde'); 
    
  }

  displayNumber(){
      //fonction qui va afficher sur le cote 
      const index = (ameliorations.map(e => e.name).indexOf(this.name)); //récupération de l'index 
      const destinationElement = document.getElementsByClassName('blockPresentation_presentation')[index];
      //destinationElement.innerHTML = ''; //on remet à 0; 
      const visuelElement = createElement('div',{
          'width' : '30px', 
          'height' : '30px', 
          'border' : '1px solid black', 
          'borderRadius' : '50%', 
          'backgroundColor' : this.color
      },[]); 
      destinationElement.style.display = 'flex'; 
      destinationElement.style.flexWrap = 'wrap';
      for(let i = 0; i < this.number; i++){
        destinationElement.appendChild(visuelElement); 
      } 
  }

  static balanceToBuy(balance){
    for(const ameliorationItem of ameliorations){
        ameliorationItem.displayElement(); //on a un visuel si on peut acheter ou pas 
    }
  }
}


//Debut du programme 
let balance = 5000; 
console.log(balance); 
const ameliorations = [
    new Amelioration('cookieDingler', 'blue', 10, 10),
    new Amelioration('grandMa', 'red', 20, 100),
    new Amelioration('pedoBear', 'green', 40, 1000), 
]; 

for(const amelioration of ameliorations){
    amelioration.displayElement(); 
    amelioration.element.addEventListener('click', ()=> {
        balance = amelioration.buyItem(balance); 
        console.log(balance); 
    })
    amelioration.element.addEventListener('mouseenter', (event)=>{
        event.stopPropagation();
        amelioration.displayInformations();
    })
}


