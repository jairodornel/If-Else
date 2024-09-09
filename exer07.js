function Calcular() {

    var dist = Number(document.getElementById('dis').value);

    var res = document.getElementById('resul');

    var n1= (dist* 0.50); 
    var n2= (dist* 0.45); 

    if(dist<=200){

         res.innerHTML = " O preço da passagem é : "+ n1+ " ! ";
    }else{

        res.innerHTML = " O preço da passagem é : " + n2 + " ! "; 
    }
}