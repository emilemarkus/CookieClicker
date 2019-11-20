/*
    onclick,oncick boucer
    onclik ( display minicookie on cookie at mouse xy (fadout to fadin to fadeout)=> class onclick-Cookie)

*/



let cookieDom = document.getElementById("cookie-img");



// class cookie (name,hours date,)
let Cookie = class {
    constructor(img, x, y) {

        this.cookie = document.createElement("IMG");
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 200;
        this.img = img;
        this.cookie.src = img;
        this.cookie.style.position = "absolute";
        this.cookie.style.width = this.w + "px";
        this.cookie.style.height = this.h + "px";
        document.body.appendChild(this.cookie);
        this.cookie.classList.add("hvr-bounce-in");
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
        this.dot = document.createElement('span');
        this.innerParticle.appendChild(this.dot);
        this.particle.appendChild(this.innerParticle);
        this.dot.classList.add("circle");
        this.particle.classList.add("animOrbit");
        this.innerParticle.classList.add("push");

    }

    removeParticle() {

        let allParticle = document.querySelectorAll(".particleCookie");
        allParticle[0].remove();
    }
}
let myCookie = new Cookie("cookie.png", 200, 200);
let butt = document.getElementById('butt');
butt.addEventListener("click", () => {
    myCookie.removeParticle();
})