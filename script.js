let botaoSubmit = document.querySelector(".btn-submit")
let formularioAno = document.querySelector("#txtano")
let telaResultado = document.querySelector("#res")
let botoesSexo = document.getElementsByClassName("radsex")

botaoSubmit.addEventListener("click", verificarIdade)

function verificarIdade(){
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    if(formularioAno.value === 0 || formularioAno.value > anoAtual){
        alert("Insira um ano Válido")
    }else{
        let idadePessoa = anoAtual - formularioAno.value
        telaResultado.textContent = `Sua idade é de ${idadePessoa} anos`

    }
}