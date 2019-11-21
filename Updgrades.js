// const createElement = (balise, styles = {}, classes = [], texte) => {
//     const balise_element = document.createElement(balise); 
//     for(const style in styles){
//         balise_element.style[style] = styles[style]; 
//     }
//     for (const classe of classes){
//         balise_element.classList.add(classe); 
//     }
//     if(texte){
//         balise_element.textContent = texte; 
//     }
// }
    

// class Amelioration{
//   constructor(name, basicEffect, color, price, number = 0){
//       this.name = name; 
//       this.basicEffect = basicEffect; 
//       this.number = number; 
//       this.color = color; 
//       this.price = price; 
//   }

//   displayButton(){
//       //Creation du bouton 
//       const boutonHeight = '100px', boutonWidth = '300px';
//       const bouton = document.createElement('div'); 
//       bouton.classList.add(this.name); 
//       bouton.id = `${this.name}`; 
//       bouton.style.width = boutonWidth; 
//       bouton.style.height = boutonHeight; 
//       bouton.style.border = '1px solid black';
//       bouton.style.display = 'flex'; 
//       bouton.style.alignItems = 'center'; 
//       bouton.style.justifyContent = 'space-around';
//       bouton.style.position = 'relative';

//       //On va ensuite Ajout de la section img du bouton amélioration 
//       const boutonImg = document.createElement('div');
//       boutonImg.classList.add(`${this.name}_img`); 
//       const boutonImgHeight = '50px', boutonImgWidth = '50px'; 
//       boutonImg.style.width = boutonImgWidth; 
//       boutonImg.style.height = boutonImgHeight; 
//       boutonImg.style.borderRadius = '50%'; 
//       boutonImg.style.backgroundColor = this.color;
//       boutonImg.style.position = 'relative';

//       //Ajout de la section Titre de l'amélioration 
//       const boutonDescription = document.createElement('div'); 
//       boutonDescription.classList.add(`${this.name}_description`); 
//       boutonDescription.style.display = 'flex'; 
//       boutonDescription.style.flexDirection = 'column'; 
//       boutonDescription.style.justifyContent = 'center'; 
//       boutonDescription.style.position = 'relative';
      
//       const boutonDescriptionName = document.createElement('h2'); 
//       boutonDescriptionName.textContent = this.name; 
//       boutonDescriptionName.style.position = 'relative'; 
//       boutonDescription.appendChild(boutonDescriptionName);

//       const boutonDescriptionPrice = document.createElement('h3'); 
//       boutonDescriptionPrice.textContent = this.price;
//       boutonDescriptionPrice.style.position = 'relative'; 
//       boutonDescription.appendChild(boutonDescriptionPrice);

//       // Ajout de la section qui comprend le nombre possédé d'améliorations 
//       const boutonNumberPossessed = document.createElement('p'); 
//       boutonNumberPossessed.textContent = this.number;  
//       boutonNumberPossessed.style.position = 'relative'; 
    
//       //Ajouter le bouton dans la section en question
//       bouton.appendChild(boutonImg);
//       bouton.appendChild(boutonDescription); 
//       bouton.appendChild(boutonNumberPossessed);
//     //   document.getElementById('ameliorations').appendChild(bouton); 
//   }

// //   //fonction pour acheter Une instance de l'amélioration (ex Grandma) avec mise à jour du prix, du porte feuille 
//   buyItem(balance){
//     if(balance < this.price){ //si on n'a pas l'argent pour acheter le tout alors on ne fait rien 
//     }else{ 
//         let previous_price = this.price; //on prend le prix initial en mémoire (sinon on paye toujours trop)
//         document.getElementsByClassName(this.name)[0].getElementsByTagName('p')[0].textContent = ++this.number; //mise à jour du nb possédé 
//         document.getElementsByClassName(`${this.name}_description`)[0].getElementsByTagName('h3')[0].textContent = this.price*1.2; //mise à jour prix 
//         this.price *= 1.2; //on augmente le prix de 20% à chaque fois ATTENTION PARSEINT TO ADD 
//         return balance -= previous_price; //on retire le prix de la balance là problème 
//     }
//   }

//   buyUpgrade(balance){
//       //l'upgrade va toujours doubler la production (petite fonction lambda) faut trouver une fonction évolution (pour dire quand pret ou pas)
//       //alert('Bonjour'); 
//   }


//   displayInformations(){
//       const reference = document.getElementById(this.name); 
//       console.log(reference.innerHTML); 
//   }

  //Fonction pour vendre option 
  //Fonction pour calculer les cookies et le cps 

// }

let balance = 2500;
// const grandma = new Amelioration('grandma', 1, 'blue', 100); 
// const pedobear = new Amelioration('pedobear', 1000, 'red', 300); 

// grandma.displayButton();
// grandma.buyUpgrade(balance); 
// pedobear.displayButton(); 
// balance = pedobear.buyItem(balance); 

// balance = grandma.buyItem(balance); 
// balance = grandma.buyItem(balance); 
// balance = grandma.buyItem(balance); 
// console.log(balance); 

// grandma.displayInformations(); 


 //fonction pour payer une amélioration sans bouger aux instances UPGRADE
let buttons = document.getElementsByClassName("btn_upgrade");
buttons[0].setAttribute("id", 1000);
buttons[1].setAttribute("id", 2000);
buttons[2].setAttribute("id", 5000);
let price_upgrade;
for (let i = 0; i < buttons.length; i++) {
    price_upgrade = buttons[i].getAttribute("id");
    if (balance < price_upgrade) {
        buttons[i].style.pointerEvents = "none";
        buttons[i].style.border = "2px solid red";
           console.log(buttons[i])
    }
}
    [...buttons].map(button => {
        button.addEventListener("click", e => {
        balance = balance - button.getAttribute("id");
        // multiplier
        for(i = 0; i < buttons.length; i++)
        if (balance < buttons[i].id) {
            buttons[i].style.pointerEvents = "none";
            buttons[i].style.borderColor = "red";
        }
        button.style.visibility = "hidden";
        console.log(balance)
        })
    })



     //class user
class user {
    constructor(name, date, startHours, numCookies, cookiesPerSec) {
        this.name = name;
        this.date = date;
        this.startHours = startHours;
        this.numCookies = numCookies;
        this.cookiesPerSec = cookiesPerSec;
    }
}

//variables
let key;
let d = new Date();
let numCookies = 0;
let cookiesPerSec = 0;
let input = document.querySelector("input");

//action
input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        //get data
    let name = input.value;
    let date = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    let startHours;
    //modifier minutes
    if (d.getMinutes() < 10){
        startHours = d.getHours() + "." + "0" + d.getMinutes();
    } else {
        startHours = d.getHours() + "." + d.getMinutes();
    };

    //Push info
    input.innerHTML = name;

    //create new object
    const newUser = new user (name, date, startHours, numCookies, cookiesPerSec);
    console.log(newUser);
    }
});