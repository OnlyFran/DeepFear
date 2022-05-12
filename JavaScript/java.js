/* let username = prompt("Ingrese su nombre de usuario:");
let password = prompt("Ingrese la clave secreta:");

while(password != 666){
    alert(`${username}, usted ha ingresado la clave incorrecta, intente nuevamente..`);
    password = prompt("Ingrese la clave secreta:");
}

alert(`Bienvenido ${username}, usted ha ingresado la clave "${password}" correctamente`);

let donation = prompt("¿Desea contribuir a nuestro website con una donación a voluntad? si/no");
let get = 1;

function donationError(){
    while(get <= 0 && get == ""){
        alert(`${username}, ingrese un monto válido.`);
        get = parseInt(prompt("¿Cuanto desea donar?"));
        alert(`Muchísimas gracias por su contribución de $${get}, disfrute lo que tenemos para ofrecerle.`);
    }
}

donationError();

if(donation == "si"){
    get = parseInt(prompt("¿Cuanto desea donar?"));
    alert(`Muchísimas gracias por su contribución de $${get}, le enviaremos un mail de confirmación luego, disfrute lo que tenemos para ofrecerle.`);
}else if(donation == "no"){
    alert("Disculpe la molestia, disfrute de lo que tenemos para ofrecerle.");
}else if(donation == "" || donation != "si" || donation != "no"){
    alert("Tomese un tiempo para pensarlo, mientras tanto.. ¡disfrute de nuestro sitio web!");
}

class Game{
    constructor(gameName, gamePrice){
        this.gameName = gameName;
        this.gamePrice = parseFloat(gamePrice);
        this.sold = false;
    }

    iva(){
        console.log(this.gamePrice + (this.gamePrice * 0.21));
    }

    sell(){
        this.sold = true;
        console.log(this.sold);
    }
}

const games = [];

let buy = parseInt(prompt("Bienvenido a la biblioteca, seleccione el juego que desea adquirir:\n 1  Phasmophobia\n 2  Deceit\n 3  Visage\n 4  Five Nights at Freddy´s Complete\n 5  Resident Evil 9"));

if(buy == "1"){
    games.push(new Game("phasmophobia", 400));
    alert(`Juego: Phasmophobia\nPrecio Base: ${400}\nMonto final con IVA: ${400 + (400 * 0.21)}`);
}else if(buy == "2"){
    games.push(new Game("deceit", 0));
    alert(`Juego: Deceit\nPrecio: Free to Play!`);
}else if(buy == "3"){
    games.push(new Game("visage", 630));
    alert(`Juego: Visage\nPrecio Base: ${630}\nMonto final con IVA: ${630 + (630 * 0.21)}`);
}else if(buy == "4"){
    games.push(new Game("fnaf completo", 999));
    alert(`Juego: Five Nights at Freddy´s Complete Edition\nPrecio Base: ${999}\nMonto final con IVA: ${999 + (999 * 0.21)}`);
}else if(buy == "5"){
    games.push(new Game("resident evil 9", 1250));
    alert(`Juego: Resident Evil 9\nPrecio Base: ${1250}\nMonto final con IVA: ${1250 + (1250 * 0.21)}`);
}else{
    alert("Error, ingrese un juego existente.")
    buy = parseInt(prompt("Bienvenido a la biblioteca, seleccione el juego que desea adquirir:\n 1  Phasmophobia\n 2  Deceit\n 3  Visage\n 4  Five Nights at Freddy´s Complete\n 5  Resident Evil 9"));
}

alert(`¡Gracias por tu compra, que lo disfrutes!`)
console.log(games); // juegos adquiridos
 */

// DOM entrega

let inglesOuija = document.getElementById("inglesOuija")
let inglesVoodoo = document.getElementById("inglesVoodoo")
let inglesTarot = document.getElementById("inglesTarot")
let idioma = prompt("¿Desea leer los objetos en Ingles? si/no");

if(idioma === "si"){
    alert("Idioma de objetos: Ingles");
    inglesOuija.innerHTML = "<p>Ouija Board</p>"
    inglesVoodoo.innerHTML = "<p>Voodoo Doll</p>"
    inglesTarot.innerHTML = "<p>Tarot Cards</p>"
}else if(idioma === "no"){
    alert("Idioma de objetos: Español");
}else{
    alert("Error, iniciando idioma predeterminado");
}

let english = document.getElementById("english");
let espanol = document.getElementById("espanol");

function cambioIngles(){
    inglesOuija.innerHTML = "<p>Ouija Board</p>"
    inglesVoodoo.innerHTML = "<p>Voodoo Doll</p>"
    inglesTarot.innerHTML = "<p>Tarot Cards</p>"
    alert("Cambiaste el Idioma a Inglés")
}

function cambioEspanol(){
    inglesOuija.innerHTML = "<p>Tablero Ouija</p>"
    inglesVoodoo.innerHTML = "<p>Muñeco Voodoo</p>"
    inglesTarot.innerHTML = "<p>Cartas del Tarot</p>"
    alert("Cambiaste el Idioma a Español")
}

english.addEventListener("click", cambioIngles);
espanol.addEventListener("click", cambioEspanol);