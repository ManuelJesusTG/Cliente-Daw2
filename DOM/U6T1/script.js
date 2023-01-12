let html = document.documentElement;

let body = html.lastChild;

// 1.- El número de párrafos de la página.

var parrafos = html.getElementsByTagName("p")

var p1 = "La pagina tiene "+parrafos.length+" parrafos";
console.log(p1)

// 2.- El texto del segundo párrafo.

var p2= "El texto del segundo parrafo es: "+body.childNodes[3].textContent;
console.log(p2)

// 3.- El número de enlaces de la página.

var enlaces = body.getElementsByTagName("a");

var p3 = "La pagina tiene "+enlaces.length+" enlaces";
console.log(p3)

// 4.- La dirección del primer enlace.

var p4 = "La direccion del primer enlace es "+enlaces.item(0).getAttribute("href");
console.log(p4)

// 5.- La dirección del penúltimo enlace.

var p5 = "La direccion del penultimo enlace es "+enlaces.item(45).getAttribute("href")
console.log(p5)

// 6.- El número de enlaces que apuntan a /wiki/Municipio

var contador= 0;

for (let i = 0; i < enlaces.length; i++) {
    if(enlaces.item(i).getAttribute("href") == "https://educacionadistancia.juntadeandalucia.es/wiki/Municipio"){
    contador++;
    }
}

var p6 = "Hay "+contador+" enlaces que apuntan a /wiki/Municipio";

console.log(p6)

// 7.- El número de enlaces del primer párrafo.

var primerp = body.firstChild.nextSibling;

var enlacesp = primerp.getElementsByTagName("a");

var p7 = "El primer parrafo tiene "+enlacesp.length+" enlaces";
console.log(p7)


// Añadir texto en la pagina

let info = document.getElementById("info");
info.innerHTML = "<h1> INFORMACION (Ejercicio) </h1> <p>"+p1+"</p> <p>"+p2+"</p> <p>"+p3+"</p> </p>"+p4+"</p> <p>"+p5+"</p><p>"+p6+"</p> <p>"+p7+"</p>";
