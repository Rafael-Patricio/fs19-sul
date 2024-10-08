let alunos = []
//CiarAlunos(nome, idade, serie) - criar com o id, recebe os dados, menos o id
function criarAluno(aluno) { alunos.push({id: alunos.length, ...aluno}) }
criarAluno({ nome: 'Gil', idade: 26, serie: '6B'})
criarAluno({ nome: 'Rafa', idade: 29, serie: '7B'})
criarAluno({ nome: 'José', idade: 23, serie: '5C'})
console.log(alunos)

// lerAlunos() - recebe o id como parametro e retorna o aluno

function lerAluno(id) { 
    const aluno = alunos.find(alunos => alunos.id === id)
    return aluno
}
console.log(lerAluno(1))

// atualizarAluno(id, dados) - recebe o id do aluno e os novos dados

function atualizarAluno({id, ...rest}) {
    const indice = alunos.findIndex((aluno) => aluno.id === id)
    const dadosAntigos = alunos[indice]
    alunos[indice] = {...dadosAntigos,...rest}
}

atualizarAluno({id: 1, nome: 'Fulano', serie: '7A'})

console.log(alunos)

// deletarAluno(id) - recebe o id do aluno e deleta o aluno

function deletarAluno(id) {
    const indice = alunos.findIndex((aluno) => aluno.id === id)
    alunos.splice(indice, 1)
}

deletarAluno(1)
console.log(alunos)