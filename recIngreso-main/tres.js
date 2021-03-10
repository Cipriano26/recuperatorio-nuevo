/*
 * Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta,
 * teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades,
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades,
el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas
la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
 */
function mostrar()
{
    let cliente;
    let cantidad;
    let marca;
    let precio;
    let subtotal = 0;
    let total = 0;
    let seguir;
    let descuento;
    let acumDesc = 0;
    let acumFelipe = 0;
    let acumArg = 0;
    let acumIllum = 0;
    let contFelipe = 0;
    let contArg = 0;
    let contIllum = 0;
    let promFelipe;
    let promArg;
    let promIllum;
    let marcaMax;
    let cantidadMax = -1;
    
    
    do{
        cliente = prompt("Ingrese nombre del cliente ");
        
        cantidad = parseInt(prompt("Ingrese cantidad "));
            while(isNaN(cantidad))
            {
                cantidad = parseInt(prompt("Error. Ingrese cantidad "));
            }
        marca = prompt("Ingrese marca (FelipeLamparas - ArgentinaLuz - Illuminatis)").toLowerCase ();
            while(marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis")
            {
                marca = prompt("Ingrese marca (FelipeLamparas - ArgentinaLuz - Illuminatis)").toLowerCase (); 
            }
        precio = parseInt(prompt("Ingrese precio "))
            while(isNaN(precio))
            {
                precio = parseInt(prompt("Ingrese precio "))
            }
            
        subtotal = cantidad * precio;
       
        // DESCUENTO
        if (marca == "felipelamparas" && cantidad > 5)
            {
                descuento = 0.90 * subtotal;
                //PUNTO B
                acumDesc++;
            }
            else if (marca == "argentinaluz" && cantidad >= 3)
                {
                    descuento = 0.95 * subtotal;
                    //PUNTO B
                    acumDesc++;
                }
                
        // PUNTO A
        total += subtotal;
        
        
        //PUNTO C
        switch (marca)
        {
            case "felipelamparas":
                acumFelipe += cantidad;
                contFelipe++;
            break;
            case "argentinaluz":
                acumArg += cantidad;
                contArg++;
            break;
            case "illuminatis":
                acumIllum += cantidad;
                contIllum++;
            break;
        }
        
        //PUNTO D
        if (cantidad > cantidadMax)
        {
            cantidadMax = cantidad;
            marcaMax = marca;
        }

        seguir = prompt("Quiere ingresar otra venta? ");
    }while(seguir == 's')
    
    promFelipe = acumFelipe / contFelipe;
    promArg = acumArg / contArg;
    promIllum = acumIllum / contIllum;
    
    console.log ("a- La empresa recauda $"+total);
    console.log ("b- La empresa pierda con descuentos $"+acumDesc);
    console.log ("c- EL promedio de lamparas de Felipelamparas es "+promFelipe+" el de Argentina Luz es "+promArg+" y el de Illuminatis es "+promIllum);
    console.log ("d- La marca que mas ventas realizo fue "+marcaMax);
    
}
