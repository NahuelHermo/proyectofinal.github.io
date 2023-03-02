//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu()
{
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}


//oculto el menu después de usarlo
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++)
{
   
   menu.style.display = "none";
   menu_visible = false;
   
}

// Barrita
function crearBarra(id_barra)
{
    for(i=0; i<=16; i++)
    {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//SELECCIONAR BARRAS

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let reactjs = document.getElementById("reactjs");
crearBarra(reactjs);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let java = document.getElementById("java");
crearBarra(java);
let teamwork = document.getElementById("teamwork");
crearBarra(teamwork);

//Arreglo para cantidad de barras
let contadores = [-1,-1,-1,-1, -1, -1];
let entro = false;

//Animaciones

function efectoHabilidades()
{
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro == false)
    {
        const intervalHtml = setInterval(function()
        {
            pintarBarra (html, 16, 0, intervalHtml)
        },100);
        const intervalJavascript = setInterval(function()
        {
            pintarBarra (javascript, 11, 1, intervalJavascript)
        },100);
        const intervalResctjs = setInterval(function()
        {
            pintarBarra (reactjs, 11, 2, intervalResctjs)
        },100);
        const intervalNodejs= setInterval(function()
        {
            pintarBarra (nodejs, 15, 3, intervalNodejs)
        },100);
        const intervalJava = setInterval(function()
        {
            pintarBarra (java, 16, 4, intervalJava)
        },100);
        const intervalTeamwork = setInterval(function()
        {
            pintarBarra (teamwork, 11, 5, intervalTeamwork)
        },100);
    }
}

//Llenar barras

function pintarBarra(id_barra, cantidad, indice, interval)
{
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad)
    {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "deeppink";
    }
        else
        {
            clearInterval(interval)
        }
}


//mouse scrolling

window.onscroll = function()
{
    efectoHabilidades();
}


