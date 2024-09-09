function Calcular(){

    var tipo = document.getElementById('tip').value ; 
    var dias = Number(document.getElementById('di').value);
    var kilo = Number(document.getElementById('Km').value);

    var res = document.getElementById('resul');

    if(tipo=='Popular' && kilo<=100){

        var pre1= (dias*90)+ (kilo*0.20);

        res.innerHTML = " O preço do veículo é : "+ pre1+ " reais "; 
    }else {

        if( tipo=='Popular' && kilo>100){

                var pre2 = (dias*90)+ (kilo* 0.10); 

                res.innerHTML = " O preço do veículo é : " + pre2 + " reais ";


        } else{

            if( tipo=='Luxo' && kilo<=200){

                var pre3 = (dias*150)+ (kilo*0.30);

                res.innerHTML = " O preço do veículo é : "+ pre3 + " reais "
            } else {


                if(tipo=='Luxo' && kilo>200){

                    var pre4 = ( dias * 150 ) + ( kilo * 0.25 );

                    res.innerHTML = " O preço do veículo é : "+ pre4 + " reais "
                }
            }
        }
    }
}