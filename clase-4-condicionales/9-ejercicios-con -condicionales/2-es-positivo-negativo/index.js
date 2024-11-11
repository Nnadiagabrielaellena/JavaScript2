function esPositivoONegativo(numero){
      let numeroNum = Number(numero);
      if (numeroNum >= 0) {
            return 'positivo'
      }else{
            return "negativo"
      }

}
console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5))// 'negativo'