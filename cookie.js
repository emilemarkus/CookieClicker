let cookieDom = document.getElementById("cookie-img");

document.getElementById('autoClicker').addEventListener(('click'), () => {
    myCookie.newParticle();
})

// class cookie (name,hours date,)
let Cookie = class {
    constructor(img, x, y) {
        // data player
        /*
            name 
            numCookies 
            cookiesPerSec  
            date 
            startHours
        */
        if (localStorage.getItem('name')) {
            this.name = localStorage.getItem('name');
            this.date = localStorage.getItem('date');
            this.startHours = localStorage.getItem('startHours');
            this.numCookies = localStorage.getItem('numCookies');
            this.cookiesPerSec = localStorage.getItem('cookiesPerSec');
        } else {
            const newUser = new User(); 
            localStorage.setItem("name", newUser.name);
            localStorage.setItem("date", newUser.date);
            localStorage.setItem("numCookies", newUser.numCookies);
            localStorage.setItem("cookiesPerSec", newUser.cookiesPerSec);
            localStorage.setItem('startHours', newUser.startHours);
        }
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
        this.combo();
        this.cookie.addEventListener("click", () => {
            //this.newParticle();
            let addtoScore = document.getElementsByClassName('clicker_score')[0];
            balance++;
            addtoScore.textContent = `vous avez ${balance} cookies`;
            // console.log(balance);
            //myCookie.click();
        })
    }



    click() {
        this.miniCookie = document.createElement("img");
        this.miniCookie.setAttribute("class", "minicookie");
        this.miniCookie.src = this.img;
        this.miniCookie.style.width = "30px";
        this.miniCookie.style.width = "30px";
        this.miniCookie.style.position = "absolute";
        this.miniCookie.style.left = event.clientX + "px";
        this.miniCookie.style.top = event.clientY + "px";
        this.miniCookie.classList.add("mini-cookie");
        document.body.appendChild(this.miniCookie);
    }

    combo() {
        this.domCombo = document.createElement("img");
        this.domCombo.style.position = "absolute";
        this.domCombo.src = "combo2.gif";
        this.domCombo.style.width = this.w + 240 + "px";
        this.domCombo.style.height = this.h + 90 + "px";
        this.domCombo.style.top = this.y - 50 + "px";
        this.domCombo.style.left = this.x - 120 + "px";
        this.domCombo.style.zIndex = -1;
        //this.domCombo.style.display = "none";
        this.domCombo.classList.add("combo");
        document.getElementsByClassName('clicker')[0].appendChild(this.domCombo);
        this.timingCambo();
    }

    timingCambo() {
        let lapsBeforeNextCombo = Math.floor(Math.random() * (120000 - 10000) - 10000);
        let nextCamboInTime = setTimeout(() => {
            this.domCombo.style.display = "block";
        }, lapsBeforeNextCombo);
        let stopCambo = setTimeout(() => {
            this.domCombo.style.display = "none";
            myCookie.timingCambo();
        }, lapsBeforeNextCombo + 15000);
        // console.log(lapsBeforeNextCombo);
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
            let addtoScore = document.getElementsByClassName('clicker_score')[0];
            addtoScore.textContent = `vous avez ${balance} cookies`;
        }, 10000);
    }

}
let myCookie = new Cookie("cookie_kawaii.png", 240, 300);
let butt = document.getElementById('butt');