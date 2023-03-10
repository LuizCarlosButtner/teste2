



function iniciar() {
    let a = +prompt("coloque um numero!")
    let b = +prompt("coloque um outro numero!")
    let c = a + b
    document.getElementById("texto").innerText = (`a soma de ${a} e ${b} é igual a ${c}!`)

}