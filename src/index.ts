let nombreAlumno: string | null;
let notaPráctica, notaProblemas, notaTeoría, notaFinal: number;

nombreAlumno = prompt("Ingrese el nombre del alumno");

while (nombreAlumno !== "") {
  notaPráctica = Number(prompt("Ingrese la nota práctica"));
  notaProblemas = Number(prompt("Ingrese la nota de problemas"));
  notaTeoría = Number(prompt("Ingrese la nota de la teoría"));
  if (
    notaPráctica > 10 ||
    notaPráctica < 0 ||
    notaProblemas > 10 ||
    notaProblemas < 0 ||
    notaTeoría > 10 ||
    notaTeoría < 0
  ) {
    console.log("Mensaje de error, usted cargó mal alguna nota");
  } else {
    notaFinal = notaPráctica * 0.1 + notaProblemas * 0.5 + notaTeoría * 0.4;
    console.log(`La nota final del alumno ${nombreAlumno} es ${notaFinal}`);
  }
  nombreAlumno = prompt("Ingrese el nombre del alumno");
}
