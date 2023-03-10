function pedirnumero() {
    let a = window.prompt("coloque um numero")
    document.getElementById("texto").innerText = (`O dobro de ${a} é ${a*2} e a metade é ${a/2}!`)

}