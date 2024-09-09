function Calcular(){

    var ano = Number(prompt("QUal o ano de seu nascimento?"));

    

    var atual = 2024

    var aniver =(atual - ano )


    var res = document.getElementById('resul');

    res.innerHTML= "Quem nasceu em " + ano + " vai completar " + aniver + " anos em " + atual + " !! " 
}