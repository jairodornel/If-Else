function Calcular(){

    var nomes = document.getElementById('nome').value ; 
    var n1 = Number(document.getElementById('N1').value);
    var n2 = Number(document.getElementById('N2').value); 

    var res = document.getElementById('resul'); 

    var res1 =document.getElementById('re') ;

    var media = (n1 + n2)/2; 
    
    res.innerHTML = " Ola  "  + nomes+ "  sua media é : " + media + " ! "; 
   
    if(media> 7){ 

       

        res1.innerHTML = "<p>Bom Aproveitamento</p>";
    } else{


        res1.innerHTML = " <p> Sua media! </p>"; 
    }

}