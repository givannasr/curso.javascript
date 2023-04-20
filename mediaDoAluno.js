var nome = prompt("Qual é o seu nome?")

document.getElementById("bv").innerHTML="Bem-vindo(a) "+nome

var resultado

function calcular(){
    let nota1= parseFloat(document.getElementById("num1").value);
    let nota2 = parseFloat(document.getElementById("num2").value);
     resultado = (nota1 + nota2)/2;
    document.getElementById("resultado").value=resultado;
    se()
}

function se(){
     if (resultado > 7){
        alert(nome+" foi aprovado");
    }
    if (resultado >=5 && resultado <7){
        alert(nome+" está de recuperação");
    }
    if (resultado < 5) {
        alert(nome+" foi reprovado")
    }
}