console.log(
    document.querySelectorAll(".times")//seleciona todas as referencias com a classe informada
)

console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")//seleciona somente pelo id informado no getElementById
)

console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")[0].innerHTML//seleciona somente pelo id informado e a linha indicada
)