function Calcular(){

    var n1 = Number(prompt("Digite um número :"));

    var res = document.getElementById('resul'); 


    if(n1%2==0){

        res.innerHTML = " O número " + n1 + " é <strong> Par !! </strong> "
    }else {

        res.innerHTML = "O número" + n1 + " é <strong> Ímpar !! </strong>"
    }
}