function Calc(){
    var n1 = parseFloat(document.getElementById('velo').value);
    var res = document.getElementById('rest');

    var Multa = (n1-80)* 5;

    if(n1>80){

        res.innerHTML += " Multado com com valor de : "+ Multa ; 
    }
}