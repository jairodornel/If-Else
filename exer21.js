function Calcular(){
    
    var data = new Date(); 
    var dia = data.getDate(); 
    var mes = data.getMonth(); 
    var ano = data.getFullYear(); 
    
    var diaSem = data.getDay(); 
    var hora = data.getHours();
    var minuto = data.getMinutes(); 
    var segundo = data.getSeconds(); 

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');
    var res3 = document.getElementById('resul3');
    var res4 = document.getElementById('resul4');
    var res5 = document.getElementById('resul5');
    var res6 = document.getElementById('resul6');


    res.innerHTML = " Dia : "+ dia + " ! "

    switch(mes){

        case 0 : 
        res1.innerHTML = " Mês : Janeiro" 
        break

        case 1 : 
        res1.innerHTML = " Mês : Fevereiro" 
        break

        case 2 : 
        res1.innerHTML = " Mês : Março" 
        break

        case 3 : 
        res1.innerHTML = " Mês : Abril" 
        break

        case 4 : 
        res1.innerHTML = " Mês : Maio" 
        break


        case 5 : 
        res1.innerHTML = " Mês : Junho" 
        break

        case 6 : 
        res1.innerHTML = " Mês : Julho" 
        break

        case 7 : 
        res1.innerHTML = " Mês : Agosto" 
        break

        case 8 : 
        res1.innerHTML = " Mês : Setembro" 
        break

        case 9 : 
        res1.innerHTML = " Mês : Outubro" 
        break


        case 10 : 
        res1.innerHTML = " Mês : Novembro" 
        break

        case 11 : 
        res1.innerHTML = " Mês : Dezembro" 
        break

        default : 
        res1.innerHTML= " Tente novamente "
        break
    }

        res2.innerHTML= " Ano : "+ ano + " ! "

        switch(diaSem){

            case 0 : 
            res3.innerHTML = " Dia : Domingo" 
            break
    
            case 1 : 
            res3.innerHTML = " Dia : Segunda" 
            break
    
            case 2 : 
            res3.innerHTML = " Dia : Terça" 
            break
    
            case 3 : 
            res3.innerHTML = " Dia : Quarta" 
            break
    
            case 4 : 
            res3.innerHTML = " Dia : Quinta" 
            break
    
    
            case 5 : 
            res3.innerHTML = " Dia : Sexta" 
            break

            case 6: 
            res3.innerHTML = " Dia : Sabado" 
            break

            default : 
            res3.innerHTML= " Tente novamente "
            break
        }
          
            res4.innerHTML = " Hora : "+ hora + " !"

            res5.innerHTML = "Minutos : "+ minuto+ " !! "

            res6.innerHTML = "Segunto : "+ segundo + " ! "


            


















    




    
}