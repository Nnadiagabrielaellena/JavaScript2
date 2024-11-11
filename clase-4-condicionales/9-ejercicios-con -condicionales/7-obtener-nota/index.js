function obtenerNota(puntaje){
      let puntajeNum = Number(puntaje);

      if (puntaje < 6){
            return 'Desaprobado';
      }else if (puntaje>=6 && puntaje <7){
            return 'Regular';
      }else if(puntaje >=7 && puntaje <8){
            return 'Bueno';
      }else if (puntaje >=8 && puntaje <10){
            return 'Muy bueno';
      }else if (puntaje === 10){
            return 'Excelente'
      }else if (puntaje <0 || puntaje >10){
            return 'Puntaje inválido'
      }
}
console.log(obtenerNota(7))    // "Bueno"
console.log(obtenerNota(9.6))  // "Excelente"
console.log(obtenerNota(12))   // "Puntaje inválido"