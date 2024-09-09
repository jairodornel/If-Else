function Calcular(){

    var nume = Number( document.getElementById('N1').value);

    var res = document.getElementById('res'); 

    var res1 = document.getElementById('res1');

    res.innerHTML = " O número é : " + nume + " ! ";

    if(nume%2==0){

        res1.innerHTML = "Numero Par ! ";
    }else{

        res1.innerHTML = "Numero Impar ! ";
    }
}