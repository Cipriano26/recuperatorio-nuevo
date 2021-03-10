/*
 * Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
 */
function mostrar()
{
    let nombre;
    let edad;
    let sexo;
    let puesto;
    let sueldo;
    let seguir;
    let acumSueldo = 0;
    let contProg = 0;
    let contAnal = 0;
    let contQa = 0;
    let promProg;
    let promAnal;
    let promQa;
    let maxSex;
    let maxSueldo = 14999;
    let maxNombre;
    let maxSueldoF = 14999;
    let contProgNB = 0;
  
   
    do{
        nombre = prompt("Ingrese nombre: ").toLowerCase ();
        
        edad = parseInt(prompt("Ingrese edad: "));
        while(edad <= 0 || isNaN(edad))
        {
            edad = parseInt(prompt("Error. Ingrese edad: "));
        }
        sexo = prompt("Ingrese sexo: (F, M, NO BINARIO)").toLowerCase ();
        while (sexo != 'f' && sexo != 'm' && sexo != "no binario")
        {
            sexo = prompt("Error. Ingrese sexo: (F, M, NO BINARIO)").toLowerCase ();
        }
        puesto = prompt("Ingrese puesto: (programador - analista - Qa)").toLowerCase ();
        while(puesto != "programador" && puesto != "analista" && puesto != "qa")
        {
            puesto = prompt("Ingrese puesto: (programador - analista - Qa)").toLowerCase ();
        }
        sueldo = parseInt(prompt("Ingrese sueldo: (entre 15000 y 70000)"));
        while(sueldo < 15000 || sueldo > 70000)
        {
            sueldo = parseInt(prompt("Ingrese sueldo: (entre 15000 y 70000)"));
        }
        
        //PUNTO A
        switch (puesto){
            case "programador":
                acumSueldo += sueldo;
                contProg += acumSueldo;
            break;
            case "analista":
                acumSueldo += sueldo;
                contAnal += acumSueldo;
            break;
            case "qa":
                acumSueldo += sueldo;
                contQa += acumSueldo;
            break;
        }
        
        //PUNTO  B
        if (sueldo > maxSueldo)
        {
            maxSueldo = sueldo;
            maxSex = sexo;
        }
        
        //PUNTO C 
        if (sexo == 'f' && sueldo > maxSueldoF)
        {
            maxSueldo = sueldo;
            maxNombre = nombre;
        }
        
        //PUNTO D
        if (puesto == "programador" && sexo == "no binario" && sueldo <= 20000 && sueldo >= 55000)
        {
        contProgNB++;
        }
        
        seguir = prompt("Quiere ingresar otro? ");
    }while(seguir == 's')
    
    //PUNTO A
    promProg = acumSueldo / contProg;
    promAnal = acumSueldo / contAnal;
    promQa = acumSueldo / contQa;
    
  
console.log ("a- El promedio de sueldo para los programadores es $"+promProg+", para los analistas es $"+promAnal+", y los qa $"+promQa);
console.log ("b- El sexo que percibe el mayor sueldo es "+maxSex);
console.log ("c- La chica con mayor sueldo es "+maxNombre);
console.log ("d - cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 son "+contProgNB);

}