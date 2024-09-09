function Calcular(){

    var n1 = Number(document.getElementById('nota1').value);
    var n2 = Number(document.getElementById('nota2').value);

    var res = document.getElementById('resul');


    var media = (n1+n2)/2;

    if(media<= 4.9){

        res.innerHTML= "Reprovado! "; 
    }else{

        if( media >=5 && media <=6.9) {

            res.innerHTML= "Recuperação! "

        } else {

            res.innerHTML = "Aprovado !! "; 
        }
    }
}