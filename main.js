let nombre;
let apellido;
let suscripcion;
let deuda;
let tarjeta;

function validarNombreApellido (nombreApellido) {
    if (nombreApellido == '' || (nombreApellido.length < 3) || !isNaN(nombreApellido)){
        return false;
    } else {
        return true;
    }
}

function validarSuscripcion (pack) {
    if ((pack == 'BRONCE') || (pack == 'PLATA')|| (pack =='ORO') && isNaN(pack)){
        return true;
    } else {
        return false;
    }
}

function modalidadPago (cantidadCuotas) {
    if ((cantidadCuotas == '1') || (cantidadCuotas == '2')|| (cantidadCuotas =='3') && !isNaN(cantidadCuotas)){
        return true;
    } else {
        return false;
    }
}

function tarjetaDeCredito (tarjeta) {
    if ((tarjeta == '') || (tarjeta.length < 12)|| (tarjeta.length >12) || (tarjeta == parseFloat) || isNaN(tarjeta)){
        return false;
    } else {
        return true ;
    }
}

do{
    nombre = prompt ('Ingrese nombre');
    apellido = prompt ('Ingrese apellido');

    if ( !validarNombreApellido(nombre) || !validarNombreApellido(apellido)){
        alert('Error: nombre y/o apellido invalido');

    }
}
while( !validarNombreApellido(nombre) || !validarNombreApellido(apellido)){
}    
let mensaje = 'Bienvenido ' + nombre + ' ' + apellido + '!';






alert(mensaje);


alert('Elija el plan para su suscripción anual "BRONCE", "PLATA" o "ORO"');





do{
    suscripcion = prompt ('Ingrese Plan');
    suscripcion = suscripcion.toUpperCase();

    if (!validarSuscripcion(suscripcion)){
        alert('Error: Plan inexistente. Por favor ingrese un plan válido');

    }
}
while( !validarSuscripcion(suscripcion)){
}    




confirmacion = confirm ('Eligió plan ' + suscripcion);


if(confirmacion == false){
    do{
        do{
            suscripcion = prompt ('Ingrese Plan');
            suscripcion = suscripcion.toUpperCase();
            if (!validarSuscripcion(suscripcion)){
                alert('Error: Plan inexistente. Por favor ingrese un plan válido');

            }
        }
        while( !validarSuscripcion(suscripcion)){
        }  
        confirmacion = confirm ('Eligió plan ' + suscripcion);
    } while(confirmacion == false){

    }
} else {

}


if (suscripcion == 'BRONCE'){
    deuda = 10000
    alert('Debe abonar $10000')
} else if (suscripcion == 'PLATA'){
    deuda = 20000
    alert('Debe abonar $20000')

} else{
    deuda = 30000
    alert('Debe abonar $30000')
}

alert('Eliga cantidad de cuotas: 1 (sin interés), 2 (+20%) o 3 (+50%)')
do{
    cuotas = prompt ('Ingrese cantidad de cuotas');

    if ( !modalidadPago(cuotas)){
        alert('Error: Escriba 1, 2 o 3 para seleccionar la cantidad de cuotas (1 [sin interés], 2 [+20%] o 3 [+50%])');

    }
}
while( !modalidadPago(cuotas)){
}    




confirmacion2 = confirm('Eligió pagar en ' + cuotas + ' cuotas');


if(confirmacion2 == false){
    do{
        do{
            cuotas = prompt ('Ingrese cantidad de cuotas');
        
            if ( !modalidadPago(cuotas)){
                alert('Error: Escriba 1, 2 o 3 para seleccionar la cantidad de cuotas');
        
            }
        }
        while( !modalidadPago(cuotas)){
        }  
        confirmacion2 = confirm('Eligió pagar en ' + cuotas + ' cuotas');
    } while(confirmacion == false){

    }
} else {

}

if (cuotas == 1){
    alert('Debe abonar ' + '$' + deuda + ' en un solo pago');
} else if (cuotas == 2){
    alert( 'Debe abonar ' + '$' + ((deuda / 2) * 1.2) + ' en 2 pagos');
} else {
    alert ('Debe abonar ' + '$' + ((deuda/3) * 1.5) + ' en 3 pagos')
}

do{
    tarjeta = prompt ('Ingrese su tarjeta de crédito')
    if (!tarjetaDeCredito(tarjeta)){
        alert('Error: Ingrese los 12 números asociados a su nombre de su tarjeta de crédito (sin espacios)');

    }
}
while(!tarjetaDeCredito(tarjeta)){
}    

let mensaje2 = nombre + ' ' + apellido + ' su suscripción al pack ' + suscripcion + ' se realizó con exito!';

alert (mensaje2);




    document.querySelector ('h3').innerText = nombre + ' ' + apellido + '\n' + 'Suscripcion: ' + suscripcion


