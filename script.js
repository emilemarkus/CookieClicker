 //class
class user {
    constructor(name, age, date, hours, numCookies, cookiesPerSec) {
        this.name = name;
        this.age = age;
        this.date = date;
        this.hours = hours;
        this.numCookies = numCookies;
        this.cookiesPerSec = cookiesPerSec;
    }
}

//variables
let d = new Date();
let submit = document.getElementById("submit");
let numCookies = 0;
let cookiesPerSec = 0;

//action
submit.addEventListener("click", e => {
    //get data
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let date = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    let hours;
    //modifier minutes
    if (d.getMinutes() < 10){
        hours = d.getHours() + "." + "0" + d.getMinutes();
    } else {
        hours = d.getHours() + "." + d.getMinutes();
    };

    //delete elements
    let inputName = document.getElementById("name");
    let inputAge = document.getElementById("age");
    inputName.remove();
    inputAge.remove();
    submit.remove();

    //create new elements
    let formName = document.getElementById("userName");
    let userName = document.createElement("span");
    userName.setAttribute("id", "newUserName");
    formName.after(userName);
    let formAge = document.getElementById("userAge");
    let userAge = document.createElement("span");
    userAge.setAttribute("id", "newUserAge")
    formAge.after(userAge);

    //Push info
    document.getElementById("userName").innerHTML = "Prénom du joueur: ";
    document.getElementById("userAge").innerHTML = "Age du joueur: ";
    document.getElementById("newUserName").innerHTML = name;
    document.getElementById("newUserAge").innerHTML = age;

    //create new object
    const newUser = new user (name, age, date, hours, numCookies, cookiesPerSec);
    console.log(newUser);
});
