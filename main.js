const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})



function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    let opcion = 0;
    let opcion1 = 0; 
    let opcion2 = 0;
    if (peso>30){
        opcion = ( (resto * 4) + 7) / (resto + 90)
        opcion1 = opcion*1500
        opcion2 = opcion*2000

        flujo = ["La opcion 1 es: ",opcion1, "La opcion 2 es: ",opcion2]}
//     if (resto>20){
//         let aux = resto-20;
//         flujo += aux*1;
//         resto -= aux;
//     } 
//     if (resto>10){
//         let aux = resto-10;
//         flujo += aux*2;
//         resto -= aux;
//     }
//     flujo += resto*4;
//     return flujo;

// }


if (resto>0 && resto<=10){
    flujo = resto*100
}
else if (resto>10 && resto<=20){
    flujo = 1000+(resto-10)*50}
else if (resto>20 && resto<=30){
        flujo = 1000+500+(resto-20)*20}
return flujo;}