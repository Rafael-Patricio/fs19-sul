let soma = 0

for (let i = 1; i <= 500; i++) {
    if ( i % 2 !== 0 && i % 3 === 0) {
        soma += i
    } 
}

console.log(soma)