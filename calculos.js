const saidamedia = document.getElementById('resultado')

let soma = 0
let q = ""
let mediares = ""

function somar(){
    let qtd = document.getElementById('quantidade')
    q = Number(qtd.value)    
    
       for(i = 0; i < q; i++){        
        soma = soma + Number(prompt("Digite o número."))
        
       }
       console.log (soma)      

}
somar()
function media(){
    saidamedia.innerHTML = (`A média é : ${mediares = (soma/q)}`)
   }






