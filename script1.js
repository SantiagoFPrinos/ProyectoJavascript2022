
alert("Te damos la bienvenida a Cosmética Natural")
const productos = [
    {nombre: "jabonSolido", precio:1200},
    {nombre: "cremaManos", precio:800},
    {nombre:"cremaCara", precio:600},
    {nombre:"jabonLiquido", precio:500},
    {nombre:"Acondicionador", precio:650},
    {nombre:"Auricos", precio:400},
    {nombre:"RollOn", precio:1300},
    {nombre:"Bomba", precio:450},
];
let carrito =[]
solicitarDatos()
//Funcion para solicitar datos al cliente//

function solicitarDatos(){ 

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = parseInt(prompt("ingrese su edad"));
let mail = prompt ("Ingrese su email");

//validacion//

    if ((edad>=18) && (mail !=="")){
        alert("Bienvenid@" + " " + nombre + " " + apellido);
        alert("Tenemos los siguientes productos disponibles para vos \n" +
        "1- Jabon Solido\n"+
        "2- Crema de manos\n"+
        "3- Crema para cara\n"+
        "4- Jabón Liquido\n"+
        "5- Acondicionador\n"+
        "6- Auricos\n"+
        "7- Bolillas antistress\n"+
        "8- Bombitas de esfervecencia para el baño\n"+
        "escriba ESC para finalizar");
        let consultaPrecio = prompt("numero de producto a consultar");
        while (consultaPrecio !== "ESC" && consultaPrecio !== "esc"){
            switch(consultaPrecio.toUpperCase()){
                case "1":
                    alert("el jabon solido cuesta $1200");
                    const jabonSolido = prompt("Cuantas unidades desea agregar?");
                    valorFinal(calculojabonSolido(jabonSolido))
                    alert("agregaste " + jabonSolido + " producto");
                    break;
                    
                case "2":
                    alert("Crema de manos cuesta $800");
                    const cremaManos = prompt("cuantas unidades desea agregar?");
                    valorFinal(calculocremaManos(cremaManos));
                    alert("agregaste " + cremaManos + " producto");
                    break;
                case "3":
                    alert("Crema de cara $600");
                    const cremaCara = prompt("cuantas unidades desea agregar?");
                    valorFinal(calculocremaCara(cremaCara));
                    alert("agregaste " + cremaCara + " producto");
                    break;
                case "4":
                    alert("El jabon líquido cuesta $500");
                    const jabonLiquido = prompt("cuantas unidades desea agregar?");
                    valorFinal(calculojabonLiquido(jabonLiquido));
                    alert("agregaste " + jabonLiquido + " producto");
                    break;
                case "5":
                    alert("El acondicionador sale $650");
                    const Acondicionador = prompt ("cuantas unidades desea agregar?");
                    valorFinal(calculoAcondicionador(Acondicionador)); 
                    alert("agregaste " + Acondicionador + " producto");
                    break;
                case "6":
                    alert("Los áuricos salen $400");
                    const aurico = prompt("cuantas unidades agregar?");
                    valorFinal(calculoAurico(Auricos));
                    alert("agregaste " + aurico + " producto");
                    break;
                case "7":
                    alert("Los Roll On salen $1300");
                    const bolilla = prompt("cuantas unidades agregar?");
                    valorFinal(calculoRollOn(RollOn));
                    alert("agregaste " + bolilla + " producto");
                    break;
                case "8":
                    alert("Las bombas para baño salen $450");
                    const bombita = prompt("cuantas bombitas desea agregar?");
                    valorFinal(calculoBomba(bombita));
                    alert("agregaste" + bombita + " producto");
                    break;
                default:
                    alert("No tenemos Stock");
                    break;
            }
            consultaPrecio = prompt("ingrese otro número de producto\n")
        
        }

    }else{
        alert("eres menor de edad y/o tu mail es invalido")
    }
}

//Funciones de calculo de cantidad
function calculojabonSolido (jabonSolido) {
    return jabonSolido * 1200;
}

function calculocremaManos (cremaManos) {
    return cremaManos * 800;
}

function calculocremaCara (cremaCara) {
    return cremaCara * 600;
}

function calculojabonLiquido (jabonLiquido) {
    return jabonLiquido * 500;

}

function calculoAcondicionador (Acondicionador) {
    return Acondicionador * 650;

}

function calculoAurico (Auricos) {
    return Auricos * 400;

}
function calculoRollOn (RollOn) {
    return RollOn * 1300;

}
function calculoBomba (bombita) {
    return bombita* 450;

}

//Funcion Generica de respuesta al calculo de cantidad
function valorFinal (cantidadProducto){
    alert ("el valor total a abonar es" + "$" + cantidadProducto);
    console.log(cantidadProducto);
}
carrito.push[{cantidadProducto}];
