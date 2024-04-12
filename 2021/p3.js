let letter1 = "bici coche (balón) bici coche peluche" // -> ✅
let letter2 = "(muñeca) consola bici" // ✅

let letter3 = "bici coche (balón bici) coche" // ->  ✅
let letter4 = "peluche (bici [coche) bici coche balón" // -> ❌
let letter5 = "(peluche {) bici" // -> ❌
let letter6 = "() bici" // -> ❌

function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  /* 
    let result = false
    let texto = ''
  
    const spliter = letter.split(' ')
  
  
    for (i = 0; i < spliter.length; i++) {
      if (spliter[i].charAt(0) === '(' && spliter[i].charAt(spliter[i].length - 1) === ')') {
        texto = spliter[i].slice(1, -1)
        if (texto === '') {
          result = false
          break
        }
        let busqueda = (t) => {
          return (t === '{' || t === '}' || t === '[' || t === ']' || t === '(' || t === ')' || t === '{' || t === '}' || t === '[' || t === ']' || t === '(' || t === ')' || t === '{' || t === '}' || t === '[' || t === ']' || t === '(')
        }
        if (![...texto].some(busqueda)) {
          result = true
        }
      }
    } */

  let contador = 0
  let parentesis = false
  let bandera = false

  for (i = 0; i < letter.length; i++) {

    if (letter[i] === '(') {
      parentesis = true
    }

    if (parentesis) {
      contador++
    }

    if (letter[i] === '{' || letter[i] === '}' || letter[i] === '[' || letter[i] === ']') {
      bandera = false
      contador = 0
      parentesis = false
    }

    if (letter[i] === ')' && parentesis) {
      parentesis = false
      bandera = true
    }

  }

  if (contador > 2 && bandera === true) return true

  return false
}

console.log(isValid(letter3))

// console.log(texto.search(regex))

/*     if (letter[i] === '(') {
      open = 1;  
      giftLetter = giftLetter + letter[i]
    }
    
    if ( letter[i] === '}' || letter[i] === '{' || letter[i] === '[' || letter[i] === ']') {
        gift = '';
        open = 0;
    }
    
 
    if (cont) {
 
      if (letter[i] === ')') {
 
        if (gift.length) {
          cont = 0
          gift = ''
          result = true
        }
 
      }
      cont = 0
      gift = ''
      result = true
    } */
