function esParOImpar(numero){
      let numeroNum= Number(numero);
      if ( numeroNum % 2 === 0){
      return "es par";
}else{
      return "es impar";
      }
}
console.log(esParOImpar(3))  // 'impar'
console.log(esParOImpar(10)) // 'par'