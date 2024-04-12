function createXmasTree(height) {
  /*   console.log(height)
   */
  const longitud = (height * 2) - 1
  const altura = height
  const tree = ''
  const asteriscos = '*'
  const espacios = ' '
  const barras = '_'

  const mitad = (longitud / 2)
  // console.log(mitad)
  // console.log(Math.round(mitad))

  let arbol = ''

  for (let i = 1; i <= longitud + 2; i++) {
    let rama = ''
    for (let j = 0; j < longitud; j++) {
      rama = rama + barras
    }

    /*     console.log("rama: ", rama)
        console.log("arbol: ", arbol)
     */
    if (i % 2 !== 0 && i <= longitud) {
      /*       console.log("es Impar", i)
            console.log("Resto y suma", Math.floor(i / 2))
            console.log("mitad", Math.round(mitad)) */
      let min = (Math.round(mitad) - Math.floor(i / 2)) - 1
      let max = (Math.round(mitad) + Math.floor(i / 2)) - 1
      //var ar = rama.split('');
      // console.log("ar: ", ar)
      for (min; min <= max; min++) {
        /*         console.log('Minimo:', min) */
        // rama = rama.replaceAt(min, '*');
        let rama1 = rama.substring(0, min)
        let rama2 = rama.substring(min + 1, rama.length)
        /* 
                console.log('Rama 1 :', rama1)
                console.log('Rama 2 :', rama2) */
        //ar.slice(min, 0, '*')
        //console.log(ar.splice(min, 0, '*'))
        rama = rama1 + asteriscos + rama2
        /*         console.log('Max:', max) */
      }
      //  console.log("ar: ", ar.join(''))
      arbol = arbol + rama + '\n'
      rama = ''
    }

    if (i > longitud) {


      for (z = 0; z <= longitud - 1; z++) {

        if (z === Math.round(mitad - 1)) {
          arbol = arbol + '#'
        } else {
          arbol = arbol + '_'
        }

      }
      arbol = arbol + '\n'
    }

    /* 
        if (i > longitud) {
          if (i % 2 == 0) {
    
          } else {
            tree = tree + espacios + '\n'
          }
    
        }
    
    
        if (i % 2 == 0) {
    
        } else {
    
        }
    
        tree = ar */
  }


  return arbol
}

console.log(createXmasTree(5))