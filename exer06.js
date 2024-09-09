function Calcular() {

    var nome = document.getElementById('nom').value ;

    var sexo = document.getElementById('sex').value ; 

    var valor = Number(document.getElementById('val').value); 

    var res = document.getElementById('resul');

    var masc= valor-(valor*0.05); 

    var femi = valor-(valor* 0.13); 

    if(sexo=='Masculino'){

         res.innerHTML = "Ola "+ nome + " seu valor com desconto é : "+ masc + " ! "; 
    }else {

        res.innerHTML = " Ola "+ nome + " seu valor com desconto é " + femi + " ! "; 
    }
}