//Questão 16
const array = [
    {nome: 'Fulano', idade: 30},
    {nome: 'Fulano', idade: 30},
    {nome: 'Fulano', idade: 30},
    {nome: 'Fulano', idade: 30},
]
//Tipo de resposta 1
for (const item of array) {
    console.log(item.idade)
}

//Tipo de resposta 2
array.forEach((item) => console.log(item.nome))