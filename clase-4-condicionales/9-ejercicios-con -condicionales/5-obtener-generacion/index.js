function obtenerGeneracion(anioNacimiento) {
      let anioNum = Number(anioNacimiento);
      if (anioNum >= 1949 && anioNum <= 1968) {
            return 'Baby boomer';
      } else if (anioNum >= 1969 && anioNum <= 1980) {
            return 'Generación X';
      } else if (anioNum >= 1981 && anioNum <= 1993) {
            return 'Millennials';
      } else if (anioNum >= 1994 && anioNum <= 2010); {
            return 'Generación Z';
      }



}




console.log(obtenerGeneracion(1971))