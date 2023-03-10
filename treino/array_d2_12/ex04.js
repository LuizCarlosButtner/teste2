let total = +prompt("quantos numeros quer inserir?")
let preencheArray = []


for (let pos=1; pos<=total;pos++) {
    let colocaDentro = prompt("proximo")
    preencheArray.push(colocaDentro)
} 

alert(preencheArray)
alert(preencheArray.reverse())