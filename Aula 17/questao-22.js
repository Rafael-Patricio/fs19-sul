// O comando de prompt não vai ser executado no vscode, somente no navegador...só para deixar explicado por que o código dá erro no vscode.

let count = 1
const alturas = []

while (count <= 15) {
    const altura = +prompt(`Digite a ${count}ª altura`)
    alturas.push(altura)
    count++
}

const maiorAltura = Math.max(...alturas)
const menorAltura = Math.min(...alturas)

console.log(`\nMaior altura: ${maiorAltura}`)
console.log(`\nMaior altura: ${maiorAltura}`)