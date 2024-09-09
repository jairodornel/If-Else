function Calcular(){

    var da =Number(document.getElementById('idade').value);
    var res = document.getElementById('idad');

    var idades = (2024-da); 

    if ( idades >=16){

        res.innerHTML += "Pode votar, sua idade é : "+ idades + " anos "; 
    } else{

        res.innerHTML += " Não possui idade de votar, sua idade é : "+ idades + " anos "; 
    }
}