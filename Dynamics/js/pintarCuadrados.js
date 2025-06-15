
let parestate = 0;
let primoestate = 0;
let imparestate = 0;

document.getElementById("pares").addEventListener("click", pintadespintapar);
document.getElementById("primos").addEventListener("click", pintadespintaprimos);
document.getElementById("impares").addEventListener("click", pintadespintaimpar);

function pintadespintapar(){
    const cuadros = document.getElementsByClassName("cuadrado");
    
    parestate = (parestate === 0) ? 1 : 0;
    for (let i = 0; i < cuadros.length; i++){
        let valor = cuadros[i].textContent * 1;
        if (valor % 2 === 0){
            if (parestate === 1){
                cuadros[i].classList.add("par");

            }
            else
            {
                cuadros[i].classList.remove("par");
            }
        }
    }
}
function pintadespintaimpar(){
    const cuadros = document.getElementsByClassName("cuadrado");
    imparestate = (imparestate === 0) ? 1 : 0;
    for (let i = 0; i < cuadros.length; i++) {
        let valor = cuadros[i].textContent * 1;
        if (valor % 2 === 1){
            if (imparestate === 1){
                cuadros[i].classList.add("impar");

            }
            else
            {
                cuadros[i].classList.remove("impar");
            }
        }
    }
}
function pintadespintaprimos(){
    const cuadros = document.getElementsByClassName("cuadrado");
    primoestate = (primoestate === 0) ? 1 : 0;
    let numcompuesto = [];
    let primos = [];
    for (let i = 2; i <= 100; i++){
        if(numcompuesto[i] !== 1){
            primos[primos.length] = i;
            for (let j = i * 2; j <= 100; j += i){
                numcompuesto[j] = 1;
                }
            }
        }
        for (let i = 0; i < cuadros.length; i++) {
            let valor = cuadros[i].textContent * 1;
            let primo = 0;
            for (let j = 0; j < primos.length; j++) {
                if (primos[j] === valor){
                    primo = 1;
                    break;
                
            }
        }
        if (primo === 1){
            if (primoestate === 1){
                cuadros[i].classList.add("primo");
            }
            else
            {
                cuadros[i].classList.remove("primo");
            }
        }
    }
}
