function Calcular(){

    var salario = Number(document.getElementById('sal').value);
    var sexo = document.getElementById('sex').value ; 
    var idade = Number(document.getElementById('ida').value);

    var res = document.getElementById('resul'); 

    if(sexo=='Feminino' && idade<15){

        var sa1 = (salario+(salario*0.05));

        res.innerHTML = " O novo salario é : R$ "+ sa1 + " ! " 
    } else {

        if(sexo=='Feminino' && idade>=15 && idade<=20){

            var sa2 = (salario+(salario*0.12));

            res.innerHTML = " O novo salario é : R$ "+ sa2 + " ! " 
        }else {

            if(sexo=='Feminino' && idade>20 ){

                var sa3 = (salario+(salario*0.23));

                res.innerHTML = " O novo salario é : R$ "+ sa3 + " ! " 
            }else {

                if(sexo=='Masculino' && idade <20){


                    var sa4 = (salario+(salario*0.03));

                    res.innerHTML = " O novo salario é : R$ "+ sa4 + " ! " 
                } else {

                    if(sexo=='Masculino' && idade>=20 && idade <=30){

                        var sa5 = (salario+(salario*0.13));

                        res.innerHTML = " O novo salario é : R$ "+ sa5 + " ! " 
                    } else{

                        if(sexo=='Masculino' && idade>30){

                            var sa6 = (salario+(salario*0.25));

                            res.innerHTML = " O novo salario é : R$ "+ sa6 + " ! " 
                        }
                    }
                }
            }
        }
    }
}