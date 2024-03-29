const createElement = (balise, styles = {}, classes = [], texte) => {
    const balise_element = document.createElement(balise);
    for (const style in styles) {
        balise_element.style[style] = styles[style];
    }
    for (const classe of classes) {
        balise_element.classList.add(classe);
    }
    if (texte) {
        balise_element.textContent = texte;
    }
    return balise_element;
}


class User {
    constructor(numCookies = 0, cookiesPerSec = 0, name = 'John') {
        /*
            name 
            numCookies 
            cookiesPerSec  
            date 
            startHours
        */
        this.name = name;
        this.numCookies = numCookies;
        this.cookiesPerSec = cookiesPerSec;
        let d = new Date(); 
        this.date =  d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear(); //date 
        if(d.getMinutes() < 10){ //pourrait le condenser en ternaire 
            this.startHours = d.getHours() + "." + "0" + d.getMinutes();
        } else {
            this.startHours = d.getHours() + "." + d.getMinutes();
        }
    }
    changeFactoryName (){
        let input = document.querySelector("input");
        input.addEventListener("keydown", e => {
            
            if (e.key === "Enter") {
                //Push info
                this.name = input.innerHTML; //nom par défaut et changer avec le formulaire 
            }
        });
    }
}

class Amelioration {
    constructor(name, color, basicEffect, price, number = 0) {
        this.color = color;
        this.name = name;
        this.basicEffect = basicEffect;
        this.number = number;
        this.price = price;
        this.element = document.getElementById(this.name);
        //autoClicker , cookieDingler , grandMa, pedoBear 
    }

    displayElement() {
        //fonction qui met à jour l'élément 
        if (balance < this.price) { //on peut le faire en ternaire mais pas le but 
            this.element.style.borderColor = 'red';
        } else {
            this.element.style.borderColor = 'black';
        }
        this.element.getElementsByClassName(`${this.name}_description_prix`)[0].textContent = this.price; //mise à jour du prix OK 
        this.element.getElementsByClassName(`${this.name}_nbItem`)[0].textContent = this.number; //mise à jour du nb 
    }

    buyItem(balance) {
        Amelioration.balanceToBuy(balance);
        if (balance < this.price) { //si on n'a pas l'argent pour acheter le tout alors on ne fait rien 
            return balance;
        } else {
            let previous_price = this.price; //on prend le prix initial en mémoire (sinon on paye toujours trop)
            //il faut ensuite mettre à jour l'élément 
            this.number++;
            this.displayNumber();
            this.price = parseInt(1.2 * this.price); //on augmente le prix de 20%
            Amelioration.calculateCPS(); 
            Amelioration.balanceToBuy(balance); //mise à jour du contenu et affichage de nos créances ... 
            return balance -= previous_price;
        }
    }

    buyUpgrade() {
        this.basicEffect *= 2; //on double la production de l'élément 
        console.log(this.basicEffect);
    }

    displayInformations() {
        //on va le faire en attendant Godo ...
        const div = createElement('div', {
            'backgroundColor': 'red'
        }, ['visible'], 'Bonjour tout le monde');

    }

    displayNumber() {
        //fonction qui va afficher sur le cote 
        const index = (ameliorations.map(e => e.name).indexOf(this.name)); //récupération de l'index 
        const destinationElement = document.getElementsByClassName('blockPresentation_presentation')[index];
        //destinationElement.innerHTML = ''; //on remet à 0; 
        const visuelElement = createElement('div', {
            'width': '30px',
            'height': '30px',
            'border': '1px solid black',
            'borderRadius': '50%',
            'backgroundColor': this.color
        }, []);
        destinationElement.style.display = 'flex';
        destinationElement.style.flexWrap = 'wrap';
        for (let i = 0; i < this.number; i++) {
            destinationElement.appendChild(visuelElement);
        }
    }

    static balanceToBuy(balance) {
        for (const ameliorationItem of ameliorations) {
            ameliorationItem.displayElement(); //on a un visuel si on peut acheter ou pas 
        }
    }

    static calculateCPS(){
        let totalCPS = 0; 
        for(const amelioration of ameliorations){
            totalCPS += amelioration.basicEffect * amelioration.number; 
        }
        document.getElementsByClassName('clicker_cps')[0].textContent = totalCPS; 
    }

}


//Debut du programme 
let balance = localStorage.getItem('numCookies');

//Fonction rebuild  à faire 
console.log(balance);
const ameliorations = [
    new Amelioration('autoClicker', 'yellow', 10, 10), 
    new Amelioration('cookieDingler', 'blue', 10, 30),
    new Amelioration('grandMa', 'red', 20, 100),
    new Amelioration('pedoBear', 'green', 40, 1000),
];

for (const amelioration of ameliorations) {
    amelioration.displayElement();
    amelioration.element.addEventListener('click', () => {
        balance = amelioration.buyItem(balance);
        console.log(balance);
    })
    amelioration.element.addEventListener('mouseenter', (event) => {
        event.stopPropagation();
        amelioration.displayInformations();
    })
}



/* Ajout Upgrade (R) Valeryia */
let buttons = document.getElementsByClassName("btn_upgrade");
buttons[0].setAttribute("id", 1000);
buttons[1].setAttribute("id", 2000);
buttons[2].setAttribute("id", 5000); //attribut id qui donne sa valeur marchande 
let price_upgrade;
for (let i = 0; i < buttons.length; i++) {
    price_upgrade = buttons[i].getAttribute("id"); //récupération du prix 
    if (balance < price_upgrade) {
        buttons[i].style.pointerEvents = "none"; //devient incliquable 
        buttons[i].style.border = "2px solid red";
    }
}
[...buttons].map(button => { //Ajout d'event listener sur chacun des boutons 
    button.addEventListener("click", e => {
        balance = balance - button.getAttribute("id"); //il a été acheté 
        // let ind = button.id;
        // console.log(ind)
        // multiplier
        for (i = 0; i < buttons.length; i++)
            if (balance < buttons[i].id) { //si pas assez argent 
                buttons[i].style.pointerEvents = "none";
                buttons[i].style.borderColor = "red";
            }
        button.style.visibility = "hidden";
    })
})
setInterval(()=>{
    //balance += parseInt(document.getElementsByClassName('clicker_cps')[0].textContent) * 1; 
    //calculer le le CPS -> 
    let cps = parseInt(document.getElementsByClassName('clicker_cps')[0].textContent); 
    balance += cps; //on ajoute la récolte des cookies 
    balance = parseInt(balance); 
    document.getElementById('score').textContent = `Vous avez ${balance} Cookies`; 
}, 1000);