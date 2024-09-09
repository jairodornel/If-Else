function Calcular(){

    var nome = prompt("Qual o nome do aluno?"); 

    var n1 =Number( prompt("Qual foi a  primeira nota de " + nome + " ?" )); 

    var n2 = Number(prompt("Qual foi a segunda nota de " + nome + " ?")); 

    var res= document.getElementById('resul'); 


    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2')

    res1.innerHTML = " Calculando a media final de "+ nome + " !" 
    res2.innerHTML = " As notas obtidas foram  "+ n1 + " e " + n2 + " ! "

    var media = (n1+n2)/2; 

    var res3 = document.getElementById('resul3'); 

    res3.innerHTML = " A media final será " + media + " ! "

    if(media < 7 ){

        res.innerHTML = " A mensagem que temos é : Estude um pouco mais !!"
    }else{

        res.innerHTML= " A mensagem que temos é : Parabens !! " 
    }
    



}