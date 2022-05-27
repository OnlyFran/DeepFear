Swal.fire({
    title: '¡Atención +18!',
    text: 'Recomendamos que los menores de edad no vean el contenido de nuestro sitio, y de hacerlo, que sea bajo la supervición de un adulto, Deep Fear no se hace respondable de lo que llegase a pasar ignorada esta advertencia.',
    icon: 'warning',
    confirmButtonText: 'Tengo +18 años'
  })

let english = document.getElementById("english");
let espanol = document.getElementById("espanol");

function cambioIngles(){
    inglesOuija.innerHTML = "<p>Ouija Board</p>";
    inglesVoodoo.innerHTML = "<p>Voodoo Doll</p>";
    inglesTarot.innerHTML = "<p>Tarot Cards</p>";
    ouijaDescription.innerHTML = `<p>The ouija, also known as a spirit board or talking board, is a flat board marked with the letters of the alphabet, the numbers 0 to 9, the words "yes", "no", occasionally "hello" and "goodbye", along with various symbols and graphics. It uses a planchette (small heart-shaped piece of wood or plastic) as a movable indicator to spell out messages during a séance. Participants place their fingers on the planchette, and it is moved about the board to spell out words.</p>`;
    voodooDescription.innerHTML = "<p>The term Voodoo doll commonly describes an effigy into which pins are inserted. Such practices are found in various forms in the magical traditions of many cultures around the world.</p>";
    tarotDescription.innerHTML = "<p>The tarot is a pack of playing cards, used from at least the mid-15th century in various parts of Europe to play games such as Italian tarocchini, many of which are still played today. In the late 18th century, some tarot decks began to be used for divination via tarot card reading and cartomancy leading to custom decks developed for such occult purposes.</p>";
    console.log("Current language: English");
    sessionStorage.setItem("Lenguaje actual", "ingles");
}

function cambioEspanol(){
    inglesOuija.innerHTML = "<p>Tablero Ouija</p>";
    inglesVoodoo.innerHTML = "<p>Muñeco Voodoo</p>";
    inglesTarot.innerHTML = "<p>Cartas del Tarot</p>";
    ouijaDescription.innerHTML = "<p>La ouija es un tablero de madera que tiene alfabeto y números con el que se puede establecer un presunto contacto con espíritus que no pertenecen al plano terrenal.</p>"
    voodooDescription.innerHTML = "<p>El muñeco Voodoo o Vudú es una efigie la cual, a través de magia, esta conectada al alma de un ser, y su uso podría llegar a resultar extremadamente peligroso y dañino.</p>"
    tarotDescription.innerHTML = `<p>El Tarot es una baraja de naipes que, además de servir para jugar, se usa a menudo como medio de "adivinación" del pasado, de la situación presente del consultante y, algunas veces, del futuro, por lo que constituiría un tipo de cartomancia. También existe un método de lectura terapéutica, donde la lectura no reside en la adivinanza o dar certezas sino en utilizar los arcanos como simbolismos para analizar la situación. Carl Gustav Jung estudió el mazo y lo utilizó como medio de análisis y trabajo con pacientes.</p>`
    console.log("Idioma actual: Español");
    sessionStorage.setItem("Lenguaje actual", "español");
}

english.addEventListener("click", cambioIngles);
espanol.addEventListener("click", cambioEspanol);

let juegoSeleccionado = document.getElementById("inputJuegos");
juegoSeleccionado.addEventListener("ENTER", console.log("Hola"));

function carritoInicio(){
    let carroJuegos = [];

    localStorage.setItem("Juego", JSON.stringify(juegoSeleccionado));
}