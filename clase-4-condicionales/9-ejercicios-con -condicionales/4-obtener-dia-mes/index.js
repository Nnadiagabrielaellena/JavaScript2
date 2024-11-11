function obtenerDiasMes(mes){
      if( mes === 'enero'){
            return 31
      }else if(mes=== 'febrero'){
            return 28;
      }else if( mes==='marzo'){
            return 32;
      }else if(mes==='abril'){
            return 30
      }else if(mes==='mayo'){
            return 31
      }else if(mes=== 'junio'){
            return 30;
      }else if (mes === 'julio'){
            return 31;
      }else if(mes=== 'agosto'){
            return 31;
      }else if( mes==='septiembre'){
            return 31;
      }else if(mes==='octubre'){
            return 31;
      }else if(mes==='noviembre'){
            return 30
      }else if(mes=== 'diciembre'){
            return 31;
      }
}
console.log(obtenerDiasMes("diciembre")) // 31
console.log(obtenerDiasMes("febrero"))   // 29
