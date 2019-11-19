class Amelioration{
  constructor(name, basicEffect, color, price, number = 0){
      this.name = name; 
      this.basicEffect = basicEffect; 
      this.number = number; 
      this.color = color; 
      this.price = price; 
  }

  displayButton(){
      //Creation du bouton 
      const boutonHeight = '100px', boutonWidth = '300px';
      const bouton = document.createElement('div'); 
      bouton.classList.add(this.name); 
      bouton.id = `${this.name}`; 
      bouton.style.width = boutonWidth; 
      bouton.style.height = boutonHeight; 
      bouton.style.border = '1px solid black';
      bouton.style.display = 'flex'; 
      bouton.style.alignItems = 'center'; 
      bouton.style.justifyContent = 'space-around';
      bouton.style.position = 'relative';

      //On va ensuite Ajout de la section img du bouton amélioration 
      const boutonImg = document.createElement('div');
      boutonImg.classList.add(`${this.name}_img`); 
      const boutonImgHeight = '50px', boutonImgWidth = '50px'; 
      boutonImg.style.width = boutonImgWidth; 
      boutonImg.style.height = boutonImgHeight; 
      boutonImg.style.borderRadius = '50%'; 
      boutonImg.style.backgroundColor = this.color;
      boutonImg.style.position = 'relative';

      //Ajout de la section Titre de l'amélioration 
      const boutonDescription = document.createElement('div'); 
      boutonDescription.classList.add(`${this.name}_description`); 
      boutonDescription.style.display = 'flex'; 
      boutonDescription.style.flexDirection = 'column'; 
      boutonDescription.style.justifyContent = 'center'; 
      boutonDescription.style.position = 'relative';
      
      const boutonDescriptionName = document.createElement('h2'); 
      boutonDescriptionName.textContent = this.name; 
      boutonDescriptionName.style.position = 'relative'; 
      boutonDescription.appendChild(boutonDescriptionName);

      const boutonDescriptionPrice = document.createElement('h3'); 
      boutonDescriptionPrice.textContent = this.price;
      boutonDescriptionPrice.style.position = 'relative'; 
      boutonDescription.appendChild(boutonDescriptionPrice);

      // Ajout de la section qui comprend le nombre possédé d'améliorations 
      const boutonNumberPossessed = document.createElement('p'); 
      boutonNumberPossessed.textContent = this.number;  
      boutonNumberPossessed.style.position = 'relative'; 
    
      //Ajouter le bouton dans la section en question
      bouton.appendChild(boutonImg);
      bouton.appendChild(boutonDescription); 
      bouton.appendChild(boutonNumberPossessed);
      document.getElementById('ameliorations').appendChild(bouton); 
  }

  //fonction pour acheter Une instance de l'amélioration (ex Grandma) 
  buyItem(balance){
    if(balance < this.price){ //si on n'a pas l'argent pour acheter le tout alors on ne fait rien 
    }else{ 
        let previous_price = this.price; //on prend le prix initial en mémoire (sinon on paye toujours trop)
        document.getElementsByClassName(this.name)[0].getElementsByTagName('p')[0].textContent = ++this.number; //mise à jour du nb possédé 
        document.getElementsByClassName(`${this.name}_description`)[0].getElementsByTagName('h3')[0].textContent = this.price*1.2; //mise à jour prix 
        this.price *= 1.2; //on augmente le prix de 20% à chaque fois 
        return balance -= previous_price; //on retire le prix de la balance là problème 
    }
  }

  displayInformations(){
      const reference = document.getElementById(this.name); 
      
  }
  //fonction pour payer une amélioration sans bouger aux instances 

}

let balance = 5000; 
const grandma = new Amelioration('grandma', 1, 'blue', 100); 
grandma.displayButton(); 
balance = grandma.buyItem(balance); 
console.log(balance); 
grandma.displayInformations(); 