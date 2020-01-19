if (document.getElementById("general")){
    document.body.style.backgroundColor = "burlywood"; 
}
if (document.getElementById("math")){
    document.body.style.backgroundColor = "rgb(185, 55, 44)"; 
}
if (document.getElementById("english")){
    document.body.style.backgroundColor = "rgb(250, 220, 111)"; 
}
if (document.getElementById("programming")){
    document.body.style.backgroundColor = "rgb(65, 95, 130)"; 
}
//add logo
const img = document.createElement("IMG");
img.setAttribute("src", "steveGeneral.png");
img.setAttribute("width", "300px");
img.setAttribute("height", "300px");
img.style.display = "block";
img.style.marginLeft = "auto";
img.style.marginRight = "auto";
document.getElementById("steve").appendChild(img);
const menu = document.getElementById("dropdown");
