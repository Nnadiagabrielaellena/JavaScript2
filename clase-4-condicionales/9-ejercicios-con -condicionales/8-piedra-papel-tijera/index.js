function jugarPiedraPapelTijera(a, b) {
      if (a === 'piedra' && b === 'papel') {
            return 'gano papel';

      } else if (a === 'piedra' && b == 'piedra') {
            return 'empate'
      } else if (a === 'piedra' && b === "tijera") {
            return 'gano piedra'
      } else if (a === 'papel' && b === 'piedra') {
            return 'gano papel'
      } else if (a === 'papel' && b === 'tijera') {
            return 'gano tijera'
      } else if (a === 'papel' && b === 'papel') {
            return 'empate'
      } else if (a === 'tijera' && b === 'papel') {
            return 'gano tijera';

      } else if (a === 'tijera' && b === 'tijera') {
            return 'empate'
      } else if (a === 'tijera' && b === 'piedra') {
            return 'gano piedra'
      }
}


console.log(jugarPiedraPapelTijera('tijera', 'piedra') ) // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera') ) // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra') )  // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera') )  // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel') )  // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!