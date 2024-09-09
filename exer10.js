function Calcular(){

    var largura = Number(document.getElementById('Lar').value);
    var comprimento = Number(document.getElementById('Comp').value);

    var res = document.getElementById('resul');

    var area = (largura * comprimento); 

    if(area <100){

        res.innerHTML = "Terreno Popular ! "; 
    } else {

        if( area>=100 && area <=500){

            res.innerHTML = " Terreno Master !!";
        } else {

            res.innerHTML = "Terreno Vip !! "; 
        }
    }
}