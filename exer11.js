function Calcular(){

    var nome = document.getElementById('no').value ; 
    var salario = Number(document.getElementById('sal').value);
    var idade = Number(document.getElementById('Ida').value);

    var res = document.getElementById('resul'); 

    var n1 = (salario + (salario * 0.03)); 

    var n2 = ( salario + (salario * 0.125));

    var n3 = (salario + (salario * 0.2)); 

    if(idade <=3 ){

        res.innerHTML = " Ola " + nome + "  O novo salario é "+ n1 + " reais; "
    }else{

        if( idade >3 && idade <10 ){

            res.innerHTML = " Ola " + nome + "   O novo salario é " + n2 + " reais; "
        } else{

            res.innerHTML = " Ola " + nome + "   O novo salario é " + n3 + " reais; "
        }
    }
}