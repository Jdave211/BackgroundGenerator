var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");


body.style.background= setGradient()
css.textContent =  body.style.background;

function setGradient(){
    body.style.background= "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function ranColor(){
    body.style.background = "linear-gradient(to right,"
    +"rgb("+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+")" 
    + ","
    +"rgb("+ Math.floor(Math.random()*256)+","+ Math.floor(Math.random()*256)+"," + Math.floor(Math.random()*256)+")"
    +")"
    css.textContent = body.style.background;
}



color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
random.addEventListener("click", ranColor)


