// Function - Arrow Function - Parâmetros
function somaDasNotas(notas) {
    let soma = 0
    notas.forEach((nota) => soma += nota)
    return soma
}
function calcularMedia(notas) {
    const soma = somaDasNotas(notas)
    return (soma / notas.length).toFixed(2)
}

    // for (const nota of notas) {
    //     soma += nota
    // }
console.log(calcularMedia([5.5, 7, 4, 8, 6.3]))


//Array - Objeto - (desestruturação)
let alunos = [
    { id: 1, nome: 'Gil', idade: 10, serie: '5B' },
    { id: 2, nome: 'José', idade: 11, serie: '5B' },
    { id: 3, nome: 'João', idade: 9, serie: '5B' }
]

alunos.unshift({ id: 0, nome: 'Fulano', idade: 10, serie: '6C'})

alunos = alunos.filter((aluno) => aluno.id !== 2)
alunos.forEach((aluno) => {
    if (aluno.id === 1) {
        aluno.nome = 'Ciclano'
    }
})

alunos.pop()
alunos.shift()

console.log(alunos)
