
function safe(password){
    if(typeof password != "number"){
        return "Código invalido";
    }
    else if(password > 9999 || password < 1000){
        return "Código invalido";
    }
    else if (password === 5896){
        return "Código correcto"
    }else{
        return "Código incorrecto"
    }
}
module.exports = {safe}