const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Silva',
    idade: 25,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 123,
        cidade: 'Cidade do Amor',
        estado: 'SP'
    },
    telefones: ['99 9999-9999', '99 9999-9999']
}
// Spread / Rest (...)
const { endereco, ...rest } = pessoa
const spread = {...rest, ...endereco }

//console.log(spread)


// Iteração em objetos
// key: value
for (const key in pessoa) {
  if (typeof pessoa[key] === 'object') {
    for (const key2 in pessoa[key]) {
      console.log(`${key2}: ${pessoa[key][key2]}`)
    }
  } else {
      console.log(`${key}: ${pessoa[key]}`)
  }
}

// Imprime as chaves do objeto
for (const key in pessoa) {
  console.log(key)
}


// Cria um array de chaves do objeto
const arrayDeChaves = Object.keys(pessoa)
console.log(arrayDeChaves)

// Cria um array de valores do objeto
const arrayDeValores = Object.values(pessoa)
console.log(arrayDeValores)

// Cria um array de arrays de chaves e valor do objeto
const entries = Object.entries(pessoa)
console.log(entries)

entries.forEach((item) => {
  const [key, value] = item
  console.log(key, value)
})

const nums = [1,2,3,4,5]
const [num1, num2] = nums
console.log(num1, num2)