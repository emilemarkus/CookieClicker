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

// creation du user
class User {
    constructor(numCookies = 0, cookiesPerSec = 0, name = 'John', indiceAc = 0, indiceCd = 0, indiceGm = 0, indicePb = 0, indiceNbOfAc = 0, indiceNbOfCd = 0, indiceNbOfGm = 0, indiceNbOfPb = 0, indiceNumUpgrade = 0) {
            /*
                name 
                numCookies 
                cookiesPerSec  
                date 
                startHours
                indiceAc
                indiceCd
                indiceGm
                indicePb
            */
            this.camboTrue = 1;
            this.name = name;
            this.numCookies = numCookies;
            this.cookiesPerSec = cookiesPerSec;
            this.indiceAc = indiceAc;
            this.indiceCd = indiceCd;
            this.indiceGm = indiceGm;
            this.indicePb = indicePb;
            this.indiceNbOfAc = indiceNbOfAc;
            this.indiceNbOfCd = indiceNbOfCd;
            this.indiceNbOfGm = indiceNbOfGm;
            this.indiceNbOfPb = indiceNbOfPb;
            this.indiceNumUpgrade = indiceNumUpgrade;


            // création de la date et lheure
            let d = new Date();
            this.date = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear(); //date 
            if (d.getMinutes() < 10) { //pourrait le condenser en ternaire 
                this.startHours = d.getHours() + "." + "0" + d.getMinutes();
            } else {
                this.startHours = d.getHours() + "." + d.getMinutes();
            }
        } // fin constructor
        /*
        Affichage des element de droite
         */
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
        //console.log("ok");
        //fonction qui met à jour l'élément et affiche 
        if (numCookies < this.price) { //on peut le faire en ternaire mais pas le but 
            this.element.style.borderColor = 'red';
        } else {
            this.element.style.borderColor = 'black';
        }
        this.element.getElementsByClassName(`${this.name}_description_prix`)[0].textContent = this.price; //mise à jour du prix OK 
        this.element.getElementsByClassName(`${this.name}_nbItem`)[0].textContent = this.number; //mise à jour du nb 
    }


    buyItem(balance, targetName) {
        console.log()
        Amelioration.balanceToBuy(balance);
        if (balance < this.price) { //si on n'a pas l'argent pour acheter le tout alors on ne fait rien 
            return balance;
        } else {
            let previous_price = this.price; //on prend le prix initial en mémoire (sinon on paye toujours trop)
            //il faut ensuite mettre à jour l'élément 
            this.number++;
            this.displayNumber();
            this.price = parseInt(1.2 * this.price); //on augmente le prix de 20%
            Amelioration.balanceToBuy(balance); //mise à jour du contenu et affichage de nos créances ... 
            console.log(targetName);
            //localStorage.setItem(ameliorations.name, this.number);
            switch (targetName) {
                case "autoClicker":
                    indiceNbOfAc++;
                    indiceAc++
                    localStorage.setItem('indiceNbOfAc', indiceNbOfAc);
                    myCookie.newParticle();
                    break;
                case "cookieDingler":
                    indiceNbOfCd++;
                    localStorage.setItem('indiceNbOfCd', indiceNbOfCd);
                    break;
                case "grandMa":
                    indiceNbOfGm++
                    localStorage.setItem('indiceNbOfGm', indiceNbOfGm);
                    break;
                case "pedoBear":
                    indiceNbOfPb++
                    localStorage.setItem('indiceNbOfPb', indiceNbOfPb);
                    break;
            }
            balance = balance - previous_price;

        }
    }
    rebuildGame(index) {
        //fonction qui va afficher sur le cote
        console.log("index:" + index);
        // alert(index);
        //récupération de l'index 
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
        destinationElement.appendChild(visuelElement);

    }

    displayNumber() {
        //fonction qui va afficher sur le cote
        const index = (ameliorations.map(e => e.name).indexOf(this.name));

        //récupération de l'index 
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
            switch (index) {
                case 1: // cooki degler
                    console.log("displayNumber");
                    indiceNbOfCd++;
                    setInterval(() => {
                        numCookies = numCookies + 3;
                    }, 1000)
                    break;
                case 2: // grand ma
                    indiceNbOfGm++;
                    setInterval(() => {
                        numCookies = numCookies + 8;
                    }, 1000)
                    break;
                case 3: // pedobear
                    indiceNbOfPb++;
                    setInterval(() => {
                        numCookies = numCookies + 50;
                    }, 1000)
                    break;
            }
        }



    }

    static balanceToBuy(balance) {
        for (const ameliorationItem of ameliorations) {
            ameliorationItem.displayElement(); //on a un visuel si on peut acheter ou pas 
        }
    }

}


/***************************************************************0 */
/*          c o o k i e
 *******************************************************************/
let Cookie = class {
    constructor(img, x, y) {
        this.cookie = document.createElement("IMG");
        this.x = x;
        this.y = y;
        this.w = 260;
        this.h = 260;
        this.img = img;
        this.cookie.src = img;
        this.cookie.style.position = "absolute";
        this.cookie.style.width = this.w + "px";
        this.cookie.style.height = this.h + "px";
        document.getElementsByClassName('clicker')[0].appendChild(this.cookie);
        this.cookie.classList.add("hvr-bounce-in");
        this.cookie.classList.add("clicker_cookie");
        this.cookie.style.left = this.x + "px";
        this.cookie.style.top = this.y + "px";
        //this.combo();
        this.cookie.addEventListener("click", () => {
            numCookies++;
            document.getElementById('score').innerText = balance;

        })
    }


    newParticle() {
        this.particle = document.createElement("div");
        this.particle.classList.add("particleCookie");
        this.particle.style.zIndex = 99999999;
        this.innerParticle = document.createElement("div");
        this.innerParticle.classList.add("innerParticle");
        //this.particle.style.backgroundColor = "rgba(255,0,0, 0.5)";
        this.particle.style.width = this.w + "px";
        this.particle.style.height = this.h + "px";
        this.innerParticle.style.width = this.w + "px";
        this.innerParticle.style.height = this.h + "px";
        this.particle.style.position = "absolute";
        this.particle.style.left = this.x + "px";
        this.particle.style.top = this.y + "px";
        this.particle.style.zIndex = -1;
        document.getElementsByClassName('clicker')[0].appendChild(this.particle);
        this.dot = document.createElement('img');
        this.dot.src = "finger.png";
        this.innerParticle.appendChild(this.dot);
        this.dot.style.width = "30px"
        this.dot.style.height = "30px"
        this.particle.appendChild(this.innerParticle);
        this.particle.classList.add("animOrbit");
        this.innerParticle.classList.add("push");
        let intervalParticle = setInterval(() => {
            numCookies++;
            document.getElementById('score').innerText = numCookies;

        }, 10000);
    }
}

/* début du programme

récupération des donnée de la session ou initialisation d'un user
*/
let myCookie = new Cookie("cookie_kawaii.png", 240, 300);
if (localStorage.getItem('name')) {
    this.name = localStorage.getItem('name');
    this.date = localStorage.getItem('date');
    this.startHours = localStorage.getItem('startHours');
    this.numCookies = localStorage.getItem('numCookies');
    document.getElementById('score').innerText = this.numCookies;
    this.cookiesPerSec = localStorage.getItem('cookiesPerSec');
    this.indiceAc = localStorage.getItem('indiceAc');
    this.indiceCd = localStorage.getItem('indiceCd');
    this.indiceGm = localStorage.getItem('indiceGm');
    this.indicePb = localStorage.getItem('indicePb');
    this.indiceNbOfAc = localStorage.getItem('indiceNbOfAc');
    // on rebuild le jeu
    for (let i = 0; i <= this.indiceNbOfAc - 1; i++) {
        setTimeout(() => {
            myCookie.newParticle();
            ameliorations[0].rebuildGame(0);
        }, i * 1000)
    }
    this.indiceNbOfCd = localStorage.getItem('indiceNbOfCd');
    for (let i = 0; i <= this.indiceNbOfCd - 1; i++) {
        setTimeout(() => {
            ameliorations[1].rebuildGame(1);
        }, i * 1000)
    }
    this.indiceNbOfGm = localStorage.getItem('indiceNbOfGm');
    this.indiceNbOfPb = localStorage.getItem('indiceNbOfPb');
    this.indiceNumUpgrade = localStorage.getItem('indiceNumUpgrade');


} else {
    const newUser = new User();
    localStorage.setItem("name", newUser.name);
    localStorage.setItem("date", newUser.date);
    localStorage.setItem("numCookies", newUser.numCookies);
    localStorage.setItem("cookiesPerSec", newUser.cookiesPerSec);
    localStorage.setItem("startHours", newUser.startHours);
    localStorage.setItem("indiceAc", newUser.indiceAc);
    localStorage.setItem('indiceCd', newUser.indiceCd);
    localStorage.setItem('indiceGm', newUser.indiceGm);
    localStorage.setItem('indicePb', newUser.indicePb);
    localStorage.setItem('indiceNbOfAc', newUser.indiceNbOfAc);
    localStorage.setItem('indiceNbOfCd', newUser.indiceNbOfCd);
    localStorage.setItem('indiceNbOfGm', newUser.indiceNbOfGm);
    localStorage.setItem('indiceNbOfPb', newUser.indiceNbOfPb);
    localStorage.setItem('indiceNumUpgrade', newUser.indiceNumUpgrade);
}



// on créer les boutons d'amélioration du click
let numCookies = localStorage.getItem('numCookies');
const ameliorations = [
    new Amelioration('autoClicker', 'yellow', 1, 10),
    new Amelioration('cookieDingler', 'blue', 10, 30),
    new Amelioration('grandMa', 'red', 20, 100),
    new Amelioration('pedoBear', 'green', 40, 1000),
];

for (const amelioration of ameliorations) {
    amelioration.displayElement();
    amelioration.element.addEventListener('click', () => {
        numCookies = amelioration.buyItem(numCookies, amelioration.name);
    })
    amelioration.element.addEventListener('mouseenter', (event) => {
        event.stopPropagation();
        // amelioration.displayInformations();
    })
}
// game update each second
let gameChecking = setInterval(() => {
    // update the local storage with current value
    localStorage.setItem("numCookies", numCookies);
    //localStorage.setItem("cookiesPerSec", cookiesPerSec);
    localStorage.setItem("startHours", startHours);
    localStorage.setItem("indiceAc", indiceAc);
    localStorage.setItem('indiceCd', indiceCd);
    localStorage.setItem('indiceGm', indiceGm);
    localStorage.setItem('indicePb', indicePb);
    localStorage.setItem('indiceNbOfAc', indiceNbOfAc);
    localStorage.setItem('indiceNbOfCd', indiceNbOfCd);
    localStorage.setItem('indiceNbOfGm', indiceNbOfGm);
    localStorage.setItem('indiceNbOfPb', indiceNbOfPb);
    localStorage.setItem('indiceNumUpgrade', indiceNumUpgrade);
    for (const amelioration of ameliorations) {
        amelioration.displayElement();
    }

    document.getElementById('score').innerText = numCookies;
}, 2000)