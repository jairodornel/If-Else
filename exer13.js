function Calcular(){

    var imovel = Number(document.getElementById('ca').value);
    var salario = Number(document.getElementById('sal').value); 
    var ano = Number(document.getElementById('An').value); 

    var res = document.getElementById('resul');


    var sal1 = (salario* 0.3)

    var pres = (imovel)/((salario)* (ano*12)); 

    if(pres> sal1){

        res.innerHTML= " Emprestimo negado, o valor da prestação é "+ pres + " maior que "+ sal1 + " : 30 % do salario "
    }else {

        res.innerHTML= " Aprovado o emprestimo !!" 
    }
}