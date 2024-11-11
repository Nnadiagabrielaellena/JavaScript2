function puedeGraduarse(asistencia,materiasAprobadas,tesisAprobada){
      let asistenciaNum = Number(asistencia);
      let materiasAprobadasNum = Number(materiasAprobadas);

      return asistenciaNum>=75 && materiasAprobadasNum >= 50 && tesisAprobada === true;
}

console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false