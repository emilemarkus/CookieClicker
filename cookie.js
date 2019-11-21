let cookieDom = document.getElementById("cookie-img");

// class cookie (name,hours date,)
let Cookie = class {
    constructor(img, x, y) {
        // data player
        if (sessionStorage) {
            this.name = sessionStorage.getItem('name');
            this.age = sessionStorage.getItem('age');
            this.date = sessionStorage.getItem('date');
            this.hours = sessionStorage.getItem('hours');
            this.numCookies = sessionStorage.getItem('numCookies');
            this.cookiesPerSec = sessionStorage.getItem('cookiesPerSec');
        } else {
            sessionStorage.setItem("name", "Emile");
            sessionStorage.setItem("age", "46");
            sessionStorage.setItem("date", new Date());
            sessionStorage.setItem("numCookies", 0);
            sessionStorage.setItem("cookiesPerSec", 0);

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
        document.body.appendChild(this.cookie);
        this.cookie.classList.add("hvr-bounce-in");
        this.cookie.classList.add("clicker_cookie");
        this.cookie.style.left = this.x + "px";
        this.cookie.style.top = this.y + "px";
        this.cookie.addEventListener("click", () => {
            this.newParticle();
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



    newParticle() {
        this.particle = document.createElement("div");
        this.particle.classList.add("particleCookie");
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
        document.body.appendChild(this.particle);
        this.dot = document.createElement('img');
        this.dot.src = "finger.png";
        this.innerParticle.appendChild(this.dot);
        this.dot.style.width = "30px"
        this.dot.style.height = "30px"
        this.particle.appendChild(this.innerParticle);
        this.particle.classList.add("animOrbit");
        this.innerParticle.classList.add("push");

    }

}
let myCookie = new Cookie("cookie_kawaii.png", 580, 390);
let butt = document.getElementById('butt');