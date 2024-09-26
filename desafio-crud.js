let Produtos = []
//CriarProduto(nome, preço, categoria) - criar com o id, recebe os dados, menos o id
function criarProduto(nome, preço, categoria) {
    const adicionarProduto = {
        id: Produtos.length,
        nome,
        preço,
        categoria
    }
    if (nome.length >= 3 && preço > 0 && categoria === 'Eletrônicos' || categoria === 'Alimentos' || categoria === 'Vestuário') {
        Produtos.push(adicionarProduto)
    } else {
        console.log(`Erro ao adicionar ${adicionarProduto.nome}. O Nome deve ter no mínimo 3 caracteres e/ou ${adicionarProduto.preço} preço deve ser um valor maior que 0 e/ou categoria deve ser um das seguintes opções: Eletrônicos, Alimentos ou Vestuários.`);
    }
}
criarProduto('Celular', 26.0, 'Eletrônicos')
criarProduto('Milho', 35.0, 'Alimentos')
criarProduto('Arroz', 5.0, 'Alimentos')
criarProduto('Oi', -5.0, 'vbs')
console.log(Produtos)

//LerProduto() - listar todos os produtos cadastrados
Produtos.map((item) => console.log(`Descrição: ${item.nome} Preço: ${item.preço} Categoria: ${item.categoria}`))

// atualizarProduto(id, dados) - recebe o id do produto e os novos dados

function atualizarProduto({id, ...rest}) {
    const indice = Produtos.findIndex((produto) => produto.id === id)
    const dadosAntigos = Produtos[indice]
    Produtos[indice] = {...dadosAntigos,...rest}
}
atualizarProduto({id: 1, nome: 'Notebook', categoria: 'Eletrônicos'})
console.log(Produtos)
// deletarProduto(id) - recebe o id do produto e deleta o produto
function deletarProduto(id) {
    const indice = Produtos.findIndex((produto) => produto.id === id)
    Produtos.splice(indice, 1)
}
deletarProduto(1)
console.log(Produtos)
// BuscarProduto() - recebe o id como parametro e retorna o produto
function buscarProduto(id) { 
    const produto = Produtos.find(Produtos => Produtos.id === id)
    return produto
}
console.log(buscarProduto(2))
 // BuscarProdutoRefinado() - recebe um valor e um filtro (1-id, 2-nome, 3-preço, 4-categoria) e retorna o produto
function buscarProdutoRefinado(valor, filtro) {   
    let produto = {}
    
    switch(filtro) {
        case 1:
             produto = Produtos.find((item) => item.id === valor)
            break
        case 2:
             produto = Produtos.find((item) => item.nome === valor)
            break
            case 3:
             produto = Produtos.find((item) => item.preço === valor)
            break
            case 4:
             produto = Produtos.find((item) => item.categoria === valor)
            break
        default:
        console.log("fim")
    }
      return produto
    }
    console.log(buscarProdutoRefinado('Celular', 2))
    console.log(buscarProdutoRefinado(26, 3))
    console.log(buscarProdutoRefinado('Alimentos', 4))