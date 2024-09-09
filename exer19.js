function Calcular(){

    var n1= Number(prompt("Digite um número : "));
    var n2 = Number(prompt("Digite outro número : ")); 

    var res = document.getElementById('resul');

    if(n1>n2){

        res.innerHTML = " Os números digitados foram "+n1 + " e "+ n2 + " o número "+ n1 + " é : MAIOR "
    }else {

        if( n2>n1){

            res.innerHTML = " Os números digitados foram "+n1 + " e "+ n2 + " o número "+ n2 + " é : MAIOR "

        }else{

            res.innerHTML = " Os números digitados foram "+n1 + " e "+ n2 + " os números são : IGUAIS "

        }
    }
}