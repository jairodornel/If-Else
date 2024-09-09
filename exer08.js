function Cal(){

    var n1 = Number(document.getElementById('nume1').value);
    var n2 = Number(document.getElementById('nume2').value); 

    var res = document.getElementById('resul'); 

   
  if(n1>n2){

    res.innerHTML = " O primeiro numero : "+ n1 + " é maior! "; 
  } else{ 

       if( n2>n1){ 
        res.innerHTML = " O segundo numero : "+ n2 + " é maior ! "; 
       } else{ 

            res.innerHTML = " Os números são iguais !! "
       }
  }
    
 }