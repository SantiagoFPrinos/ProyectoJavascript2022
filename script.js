alert("bienvenido a nuestra pagina");
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
function solicitarDatos(){ 

    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    if((nombre!==" ") && (apellido !== " ")){
        alert("Bienvenid@" + " " + nombre + " "+ apellido);}}
    
        let seleccion = prompt("desea comprar en la pagina si o no")
    ;
    while (seleccion !="si" && seleccion !="no"){
        alert("por favor tipea si o no")
        seleccion = prompt("desea adquirir nuestros productos??")
    }
    if (seleccion == "si"){
         alert("tenemos los siguientes productos");
          
        let todoslosproductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);  
        alert(todoslosproductos.join(" - "));
    } 
        else if (seleccion =="no"){
        alert("Gracias por visitar la página, hasta pronto")
    }

    while(seleccion !="no"){
        let producto = prompt("Elige el producto que deseas agregar")
        let precio = 0
    
        if(producto == "jabonSolido" || producto == "cremaManos" || producto == "cremaCara" || producto =="jabonLiquido" || producto == "Acondicionador" || producto == "Auricos" || producto == "RollOn" || producto == "bomba"){
            switch(producto){
                case "jabonSolido":
                precio = 1200;
                break;
                case "cremaManos":
                precio = 800;
                break;
                case "cremaCara":
                precio = 600;
                break;
                case "jabonLiquido":
                precio = 500;
                break;
                case "Acondicionador":
                precio = 650;
                break;
                case "Auricos":
                precio = 400;
                break;
                case "RollOn":
                precio = 1300;
                break;
                case "bomba":
                precio = 450;
                break;
                default:
                    break;
            }
            let unidades = parseInt(prompt("cuantas unidades desea?"));
            carrito.push({producto, unidades, precio});

        } else {
            alert("no contamos con dicho producto");
        }
        seleccion = prompt("Seguimos agregando productos?")
        while(seleccion == "no"){
            alert("Gracias por su compra, lo esperamos nuevamente")
            carrito.forEach((carritoFin) => {
                console.log(`producto: ${carritoFin.producto}, unidades: ${carritoFin.unidades}, total a pagar por producto ${carritoFin.unidades * carritoFin.precio}`)
            })
            break;
        }
    }
      const total = carrito.reduce((acc, el) =>acc + el.precio * el.unidades, 0)
      alert(`El total para abonar es: ${total}`)       