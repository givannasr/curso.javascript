
var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite seu nome:");
    if(nome==""|| nome== null){
        alert("Por favor preencher todos os campos!");
        area.innerHTML = "Clique no botão para acessar...";
    }else{
        area.innerHTML = "Bem-vindo "+nome
    }
}

// var notas = new Array(5);
// notas [0] = 8.5;
// notas [1] = 5.0;
// notas [2] = 10.0;
// notas [3] = 9.0;
// notas [4] = 4.5;
// document.write("notas:"+notas[0]+", "+notas[1]+" e "+notas[2]+"<br>")

// var diaSemana = new Array(7);
// diaSemana[0] = "Domingo";
// diaSemana[1] = "Segunda-feira";
// diaSemana[2] = "Terça-feira";
// diaSemana[3] = "Quarta-feira";
// diaSemana[4] = "Quinta-feira";
// diaSemana[5] = "Sexta-feira";
// diaSemana[6] = "Sabado";
// var nomeRepresentante = "Giovanna";
// var alunoDestaque = "Gabriel Pantalhão"
// document.write("Hoje é: "+diaSemana[2])
// document.write("<br>Teremos nesta "+diaSemana[4]+" comes e bebes, patrocinado pelos alunos "+alunoDestaque+" e "+nomeRepresentante)

// var diaSemana1 = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
// document.write("<br>Na próxima "+diaSemana1[3]+" e "+diaSemana1[4]+" terá curso da Google.");

// var arrayA = new Array(5);
// arrayA[0] = parseInt(prompt("Digite o 1 número:"));
// arrayA[1] = parseInt(prompt("Digite o 2 número:"));
// arrayA[2] = parseInt(prompt("Digite o 3 número:"));
// arrayA[3] = parseInt(prompt("Digite o 4 número:"));
// arrayA[4] = parseInt(prompt("Digite o 5 número:"));
// console.log(arrayA);

// var arrayB = new Array(5);
// arrayB[0] = arrayA[0]*arrayA[0];
// arrayB[1] = arrayA[1]*arrayA[1];
// arrayB[2] = arrayA[2]*arrayA[2];
// arrayB[3] = arrayA[3]*arrayA[3];
// arrayB[4] = arrayA[4]*arrayA[4];
// document.write("<br>O quadrado de "+arrayA[0]+" é igual a "+arrayB[0]);
// document.write("<br>O quadrado de "+arrayA[1]+" é igual a "+arrayB[1]);
// document.write("<br>O quadrado de "+arrayA[2]+" é igual a "+arrayB[2]);
// document.write("<br>O quadrado de "+arrayA[3]+" é igual a "+arrayB[3]);
// document.write("<br>O quadrado de "+arrayA[4]+" é igual a "+arrayB[4]);

// var arrayC = new Array(10);
// arrayC[0] = arrayA[0];
// arrayC[1] = arrayA[1];
// arrayC[2] = arrayA[2];
// arrayC[3] = arrayA[3];
// arrayC[4] = arrayA[4];
// arrayC[5] = arrayB[0];
// arrayC[6] = arrayB[1];
// arrayC[7] = arrayB[2];
// arrayC[8] = arrayB[3];
// arrayC[9] = arrayB[4];
// console.log(arrayC);

// var arrayD = new Array(5);
// arrayD[0] = parseInt(prompt("Digite o 1° número do arrayD"));
// arrayD[1] = parseInt(prompt("Digite o 2° número do arrayD"));
// arrayD[2] = parseInt(prompt("Digite o 3° número do arrayD"));
// arrayD[3] = parseInt(prompt("Digite o 4° número do arrayD"));
// arrayD[4] = parseInt(prompt("Digite o 5° número do arrayD"));
// console.log(arrayD)

// var arrayE = new Array(5);
// arrayE[0] = parseInt(prompt("Digite o 1° número do arrayE"));
// arrayE[1] = parseInt(prompt("Digite o 2° número do arrayE"));
// arrayE[2] = parseInt(prompt("Digite o 3° número do arrayE"));
// arrayE[3] = parseInt(prompt("Digite o 4° número do arrayE"));
// arrayE[4] = parseInt(prompt("Digite o 5° número do arrayE"));
// console.log(arrayE)

// var arrayF = new Array(10);
// arrayF[0] = arrayD[0];
// arrayF[1] = arrayD[1];
// arrayF[2] = arrayD[2];
// arrayF[3] = arrayD[3];
// arrayF[4] = arrayD[4];
// arrayF[5] = arrayE[0];
// arrayF[6] = arrayE[1];
// arrayF[7] = arrayE[2];
// arrayF[8] = arrayE[3];
// arrayF[9] = arrayE[4];
// document.write("<br>"+arrayF[0]);
// document.write("<br>"+arrayF[1]);
// document.write("<br>"+arrayF[2]);
// document.write("<br>"+arrayF[3]);
// document.write("<br>"+arrayF[4]);
// document.write("<br>"+arrayF[5]);
// document.write("<br>"+arrayF[6]);
// document.write("<br>"+arrayF[7]);
// document.write("<br>"+arrayF[8]);
// document.write("<br>"+arrayF[9]);



function mostrarNum(){

    var arrayG = new Array(5);
        arrayG[0] = parseInt(document.getElementById("num01").value);
        arrayG[1] = parseInt(document.getElementById("num02").value);
        arrayG[2] = parseInt(document.getElementById("num03").value);
        arrayG[3] = parseInt(document.getElementById("num04").value);
        arrayG[4] = parseInt(document.getElementById("num05").value);

    var arrayH = new Array(6);
        arrayH[0] = parseInt(document.getElementById("num06").value);
        arrayH[1] = parseInt(document.getElementById("num07").value);
        arrayH[2] = parseInt(document.getElementById("num08").value);
        arrayH[3] = parseInt(document.getElementById("num09").value);
        arrayH[4] = parseInt(document.getElementById("num10").value);
        arrayH[5] = parseInt(document.getElementById("num11").value);

    var arrayI = new Array(11);
        arrayI[0]  = arrayG[0];
        arrayI[1]  = arrayG[1];
        arrayI[2]  = arrayG[2];
        arrayI[3]  = arrayG[3];
        arrayI[4]  = arrayG[4];
        arrayI[5]  = arrayH[0];
        arrayI[6]  = arrayH[1];
        arrayI[7]  = arrayH[2];
        arrayI[8]  = arrayH[3];
        arrayI[9]  = arrayH[4];
        arrayI[10] = arrayH[5];

    document.getElementById("resultado01").value = arrayI[0];
    document.getElementById("resultado02").value = arrayI[1];
    document.getElementById("resultado03").value = arrayI[2];
    document.getElementById("resultado04").value = arrayI[3];
    document.getElementById("resultado05").value = arrayI[4];
    document.getElementById("resultado06").value = arrayI[5];
    document.getElementById("resultado07").value = arrayI[6];
    document.getElementById("resultado08").value = arrayI[7];
    document.getElementById("resultado09").value = arrayI[8];
    document.getElementById("resultado10").value = arrayI[9];
    document.getElementById("resultado11").value = arrayI[10];
}
