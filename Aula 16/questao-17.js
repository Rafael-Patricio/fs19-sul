const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Silva',
    idade: 25,
}
//método de resposta 1
for (const key in pessoa) {
    console.log(`\nChave: ${key}`)
    console.log(`Valor: ${pessoa[key]}`)
}    
//método de resposta 2
Object.keys(pessoa).forEach((key) => {
    console.log(`Chave: ${key}`)
    console.log(`Valor: ${pessoa[key]}`)
})
//método de resposta 3
Object.entries(pessoa).forEach(([key, value]) => {
    console.log(`\nChave: ${key}`)
    console.log(`Valor: ${value}`)
})