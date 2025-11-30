let botaoSubmit = document.querySelector(".btn-submit")
let formularioAno = document.querySelector("#txtano")
let telaResultado = document.querySelector("#res")
let botoesSexo = document.getElementsByName("radsex")

botaoSubmit.addEventListener("click", verificarIdade)

function verificarIdade(){
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let generoPessoa = ''

    if(Number(formularioAno.value) === 0 || Number(formularioAno.value) > anoAtual){
        alert("Insira um ano Válido")
    }else{
        let idadePessoa = anoAtual - formularioAno.value
        if(botoesSexo[0].checked){
            generoPessoa = "Homem"
            telaResultado.textContent = `Você é um ${generoPessoa} com ${idadePessoa} anos`
            let fotoPessoa = document.createElement("img")
            fotoPessoa.setAttribute('id', "foto")
            telaResultado.appendChild(fotoPessoa)
            if(idadePessoa >= 0 && idadePessoa <= 5){
                fotoPessoa.setAttribute('src', "assets/bebe-menino.jpg")
            }else if(idadePessoa >= 6 && idadePessoa <= 12){
                fotoPessoa.setAttribute('src', "assets/garoto-criança.jpg")
            }else if(idadePessoa >= 13 && idadePessoa <= 20){
                fotoPessoa.setAttribute('src', "assets/garoto-adolescente.jpg")
            }else if(idadePessoa >= 21 && idadePessoa <= 30){
                fotoPessoa.setAttribute('src', "assets/homem-jovem-adulto.jpg")
            }else if(idadePessoa >= 31 && idadePessoa <= 55){
                fotoPessoa.setAttribute('src', "assets/homem-adulto.jpg")
            }else{
                fotoPessoa.setAttribute('src', "assets/homem-idosoo.jpg")
            }
        }else if(botoesSexo[1].checked){
            generoPessoa = "Mulher"
            telaResultado.textContent = `Você é uma ${generoPessoa} com ${idadePessoa} anos`
            let fotoPessoa = document.createElement("img")
            fotoPessoa.setAttribute('id', "foto")
            telaResultado.appendChild(fotoPessoa)
            if(idadePessoa >= 0 && idadePessoa <= 5){
                fotoPessoa.setAttribute('src', "assets/bebe-menina.jpg")
            }else if(idadePessoa >= 6 && idadePessoa <= 12){
                fotoPessoa.setAttribute('src', "assets/garotinha.jpg")
            }else if(idadePessoa >= 13 && idadePessoa <= 20){
                fotoPessoa.setAttribute('src', "assets/garota-adolescente.jpg")
            }else if(idadePessoa >= 21 && idadePessoa <= 30){
                fotoPessoa.setAttribute('src', "assets/mulher-jovem-adulta.jpg")
            }else if(idadePessoa >= 31 && idadePessoa <= 55){
                fotoPessoa.setAttribute('src', "assets/mulher-adulta.jpg")
            }else{
                fotoPessoa.setAttribute('src', "assets/mulher-idosa.jpg")
            }
        }
        
    }
}