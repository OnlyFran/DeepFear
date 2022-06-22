function cargar(e){
    let entradaTittle = document.getElementById("entradaHistorias").value;
    let entradaText = document.getElementById("entradaHistorias").value;
    let entradaUser = document.getElementById("entradaHistorias").value;
    entradaTittle = localStorage.setItem("Nueva Titulo", entradaTittle);
    entradaText = localStorage.setItem("Nueva Historia", entradaText);
    entradaUser = localStorage.setItem("Nueva Usuario", entradaUser);
    historiasCompartidas.innerHTML = `
    "${entradaTitulos.value}"<br>
    ${entradaHistorias.value}<br>
    ${entradaUsuarios.value}<br>`
}

const historias = document.getElementById("historias");
const entradaTitulos = document.getElementById("entradaTitulos");
const entradaHistorias = document.getElementById("entradaHistorias");
const entradaUsuarios = document.getElementById("entradaUsuarios");
const compartir = document.getElementById("compartir");

const arrHistorias = [
    {id: 1, titulo: "Hay Algo Detrás", texto: "Y él seguía corriendo, sin frenar, ni para mirar detrás suyo, despavorido del horror del saber que lo que había visto aún seguía allí, lo podía oír mover sus tétricas extremidades sobre el camino de roca, él era totalmente conciente de que estaba detrás, como si el viento le susurrara y le dijera que si se voltea tan solo un segundo, moriría de la manera mas atróz que un simple humano pudiese imaginar. Frenaron los pasos detrás de él, y volteó a mirar, ya no había nada allí. Frenó en seco, exhausto mirando entre los árboles del bosque, ¿Fué una ilusión? Pensó. Y el viento susurró una última vez..", by: "TheJudas"},
    {id: 2, titulo: "¿Has visto a los niños?", texto: `Los niños juegan en el parque y la madre los ve sonriente, por otro lado, no podía faltar el amargo rostro del padre de las criaturas, como si su día a día fuese un martirio. La madre se toma unos minutos para ir a darse una ducha antes de salir de compras, el vapor de la ducha empaña el espejo de baño, al salir, escucha risitas por los pasillos. Llega a la cocina y rompe el silencio: "amor, ¿has visto a los niños?" preguntandole a su marido, el cual la ignora completamente, aún lo atormentan aquellas voces, aquellas risas, pasaron años que los niños murieron en el bus escolar, lo que sea que ronda aquella casa, jamás tuvieron vida propia.`, by: "StrongHeart"},
    {id: 3, titulo: "¿Cuál es su emergencia?", texto: `Todo ocurrio una desoladora noche de invierno, no bastaba abrigo para protegerse de tal helada. La operadora había tenido una jornada muy tranquila, nada fuera de lo habitual, asaltos, gritos, quejas por música muy alta, hasta que a las 3:06 AM entró un llamado, "911, ¿Cuál es su emergencia?" inicia con el procedimiento correspondiente, del otro lado, la sorprendió una dulce voz de una niña. "¿Pueden venir a mi casa?", pregunta inocentemente, "Un señor entró y pegarle a mami y tengo mucho miedo", la operadora la tranquiliza a la pequeña, consigue la dirección y envía una unidad. Pocas horas pasaron hasta que explotaron las noticias y llegaron los medios al hecho, "se encuentran 2 cuerpos en estado de putrefacción en el sotano de una casa en el centro, forense afirma que se trata de una mujer de unos 30 años y su presunta hija de unos 8 años, las cuales llevam más de 20 días allí, mostrando signos de violencia física y de haber sido abusadas"`, by: "SweetLyrics"},
    {id: 4, titulo: "No me dejes Caer", texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus quod enim nulla beatae perspiciatis dolorem modi sit, necessitatibus blanditiis praesentium minima suscipit eligendi, fugit incidunt debitis, ullam aut aliquam eius? Minus quod dolor, nostrum voluptatum aliquid nisi, aspernatur eaque, eos repellendus incidunt quo porro.`, by: "MyM8"},
    {id: 5, titulo: "Bajo la Cama", texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus quod enim nulla beatae perspiciatis dolorem modi sit, necessitatibus blanditiis praesentium minima suscipit eligendi, fugit incidunt debitis, ullam aut aliquam eius? Minus quod dolor, nostrum voluptatum aliquid nisi, aspernatur eaque, eos repellendus incidunt quo porro. Hic corporis voluptates enim iure distinctio, mollitia.`, by: "Keller8"}
];

arrHistorias.forEach((historia) =>{
    const mural = document.createElement("div");
    mural.innerHTML = `
    <h3 class="text-center">"${historia.titulo}"</h3>
    <p class="txt text-center">${historia.texto}</p>
    <p class="by">${historia.by}`;
    
    historias.appendChild(mural);
});

compartir.addEventListener("click", cargar); 