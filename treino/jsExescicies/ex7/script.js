


function calcular() {
    const a = prompt('qual o nome do aluno ?')
    
    setTimeout(() => {
        const b = +prompt(`qual a primeira nota do ${a} ?`)
        const c = +prompt(`alem de zero qual foi a outra nota do ${a} ?`)
        const d = (b + c) / 2
    
        document.getElementById('texto2').innerHTML = (`<div> <p> as notas obtidas foram ${b} e ${c}. </p> à media final será ${d}</div>`);
    }, 4000)

    document.getElementById('texto1').innerText = (`calculando a media final de ${a}.`)

    

}

