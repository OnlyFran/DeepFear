let username = prompt("Ingrese su nombre de usuario:");
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