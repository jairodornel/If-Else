function Verificar() {

    var ano = Number(document.getElementById('ida').value);

    var idades = (2024- ano); 

    var res = document.getElementById('res');

    var n1 = (18-idades); 

    var n2 = (idades-18); 

    if(idades<=18) {

        res.innerHTML = "Faltam "+ n1 + " anos. para se alistar"; 
    }else{

        res.innerHTML = " Ja se passaram "+ n2 + " anos do alistamento"; 
    }
}