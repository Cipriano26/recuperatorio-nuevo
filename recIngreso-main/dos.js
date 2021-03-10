/*
 * Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
 */
function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let cantidad;
    let nota;
    let edad;
    let nombreMP;
    let mejorPromedio = -1;
    let nombreMJoven;
    let edadJoven = 151;
    let contQuimica = 0;
    let contFisica = 0;
    let contSistemas = 0;
    let porcentajeQuimica;
    let porcentajeFisica;
    let porcentajeSistemas;
    let edadMM;
    let nombreMM;
    let cantidadMax = 0;
    
    for (let i=0;i<500;i++)
    {
    nombre = prompt("ingrese nombre ");
    
    carrera = prompt("Ingrese carrera: (quimica, fisica; sistemas)").toLowerCase();
        while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas")
        {
            carrera = prompt("Ingrese carrera: (quimica, fisica; sistemas)").toLowerCase();
        }
    sexo=prompt("Ingrese sexo: (F/M/No binario").toLowerCase();
        while(sexo!='f'&&sexo!='m'&&sexo!="no binario")
        {
            sexo=prompt("Error. Ingrese sexo: (F/M/No binario").toLowerCase();
        }
    cantidad = parseInt(prompt("Ingrese cantidad de materias: (hasta 5)"));
        while(cantidad < 1 || cantidad > 5|| isNaN(cantidad))
        {
            cantidad = parseInt(prompt("Error. Ingrese cantidad de materias: (hasta 5)"));
        }
    nota = parseInt(prompt("Ingrese nota promedio: (0-10)"));
        while(nota < 0 || nota > 10 || isNaN(nota))
        {
          nota = parseInt(prompt("Error. Ingrese nota promedio: (0-10)"));
        }
     edad = parseInt(prompt("Ingrese edad: "));
        while(edad <= 0 || edad >= 150 || isNaN(edad))
        {
          edad = parseInt(prompt("Ingrese edad: "));
        }
   
    //PUNTO A
    if (carrera == "fisica" && nota > mejorPromedio)
    {
        mejorPromedio = nota;
        nombreMP = nombre;
    }
    
    //PUNTO B 
    if (sexo != 'f' && edad < edadJoven )
    {
        edadJoven = edad;
        nombreMJoven = nombre;
    }
    
    //PUNTO C   
    switch (carrera)
    {
        case "quimica":
            contQuimica++;
        break;
        case "fisica":
            contFisica++;
        break;
        case "sistemas":
            contSistemas++;
        break;
    }
    
    //PUNTO D
    if (carrera != "quimica" && cantidad > cantidadMax)
    {
        cantidadMax = cantidad;
        nombreMM = nombre;
        edadMM = edad;
    }
    
    }
    porcentajeQuimica = contQuimica * 100 / 500;
    porcentajeFisica = contFisica * 100 / 500;
    porcentajeSistemas = contSistemas * 100 / 500;
    
    console.log ("a- El nombre del mejor promedio de fisica es "+nombreMP);
    console.log ("b- La alumna mas joven es "+nombreMJoven);
    console.log ("c- El porcentaje de los que estudian quimica es "+porcentajeQuimica+" el de fisica es "+porcentajeFisica+" y el de sistemas es "+porcentajeSistemas);
    console.log ("d- El estudiante que cursa mas materias exceptuando la carrera de Quimica se llama "+nombreMM+" y tiene "+edadMM);
  

}
