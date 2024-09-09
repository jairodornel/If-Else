function Calcular(){
    var peso = Number(document.getElementById('pes').value);
    var altura = Number(document.getElementById('Altu').value);

    var res = document.getElementById('resul'); 

    var imc = ( peso/ (altura * altura)); 


    if(imc<18.5){

        res.innerHTML = " Abaixo do peso ! ";
    } else{

        if(imc>=18.5 && imc <25){

            res.innerHTML = "Peso Ideal !!"; 
        }else {

            if(imc>=25 && imc<30) {

                res.innerHTML = " Sobrepeso !!" 
            } else {

                if(imc>=30 && imc<40) {

                    res.innerHTML = " Obesidade ! "
                } else {

                    res.innerHTML = "Obesidade Morbida !! "
                }
            }
        }
    }
}