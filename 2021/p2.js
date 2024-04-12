
const carta = 'bici  coche balón _playstation bici coche peluche'

function listGifts(letter) {


  let objResult = {}

  const spliter = letter.split(' ')
  const filterer = spliter.filter(x => x !== '' && x.charAt(0) !== '_')
  filterer.forEach((valor) => {
    /*     objResult[valor] = (objResult[valor] || 0) + 1; */
    objResult[valor] = (objResult[valor]) ? (objResult[valor]) + 1 : 1
  })

  return objResult
}


console.log(listGifts(carta))

/* const caracteristicas = ['nombre', 'nombre', 'profesion']
const objResult = { nombre: 1, apellido: 2, edad: 3 }

caracteristicas.forEach((valor) => {
  objResult[valor] = (objResult[valor]) ? (objResult[valor]) + 1 : 1
})

console.log(objResult)  */