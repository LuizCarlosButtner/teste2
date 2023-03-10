

function testedebotao() {
    let verde = document.getElementById("teste").style.backgroundColor;

    if (verde !== "blue" ){
        document.getElementById("teste").style.backgroundColor = 'blue';
        console.log(verde)
    } else {
        document.getElementById("teste").style.backgroundColor = 'green'; 
        console.log(verde)
    }
}
