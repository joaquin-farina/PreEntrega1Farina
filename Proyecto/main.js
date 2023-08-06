alert("Bienvenido a nuestra tienda");

let tipoDeProducto = prompt("Seleccione el tipo de producto");

let costo = "";

const costoDelProducto = () =>{
    while (costo <= 0) {
        switch (tipoDeProducto.toLowerCase()){
            case "procesador":
                costo = 50000;
                break;
                case "ram":
                costo = 35000;
                break;
                case "monitor":
                costo = 100000;
                break;
                default: alert(`${tipoDeProducto} ese producto no esta disponible`);


        }
        if (costo > 0){
            alert (`Su producto cuesta $${costo}`);

        }
        else tipoDeProducto = prompt("Seleccione el tipo de producto");
    }
}

costoDelProducto (); 


alert("Con tu primera tenes un descuento del 30%");

const precioFinal = (a, b, c) => a - b * c;
let descuento = 0.30;
let precioFinalConDescuento = precioFinal(costo, descuento, costo);

alert (`Te quedaria un total de $${parseInt(precioFinalConDescuento)}`);

