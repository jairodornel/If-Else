function Calcular(){

    var horas = Number(document.getElementById('pon').value);

    var res = document.getElementById('resul'); 


    if(horas<10){

        var pon1 = (horas*2);
        var din1 = (pon1* 0.05);

        res.innerHTML = " Voce fez " + pon1 + " pontos ! Seu valor em dinheiro é : R$ "+ din1 + " reais "; 
    }else {

        if(horas>=10 && horas <=20 ){

            var pon2 = (horas*5);
            var din2 = (pon2* 0.05);
    
            res.innerHTML = " Voce fez " + pon2 + " pontos ! Seu valor em dinheiro é : R$ "+ din2 + " reais "; 
        } else {

            if(horas>20 ){

                var pon3 = (horas*10);
                var din3 = (pon3* 0.05);
        
                res.innerHTML = " Voce fez " + pon3 + " pontos ! Seu valor em dinheiro é : R$ "+ din3 + " reais "; 
            }
        }
    }
}