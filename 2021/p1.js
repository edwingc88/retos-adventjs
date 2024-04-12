
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

function contarOvejas(ovejas) {
    let arrayObejasFinales = []

    ovejas.forEach((valor) => {

        let nameValue = valor.name
        if (valor.color === 'rojo') {
            if ((nameValue.includes('N') || nameValue.includes('n')) && (nameValue.includes('A') || nameValue.includes('a')))
                arrayObejasFinales.push({ [Object.keys(valor)[0]]: valor.name, [Object.keys(valor)[1]]: valor.color })
        }
    })

    return arrayObejasFinales
}

console.log(contarOvejas(ovejas))
