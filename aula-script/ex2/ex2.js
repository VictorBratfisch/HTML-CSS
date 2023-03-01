const Tabuada = () => {
let n = document.querySelector('#n').value  ;
    let r = document.querySelector('#result');

    let numeros = [];
    for(let i = 1; i<=10;i++){
        let result = n * i;
        numeros.push(result);
    }
    r.innerHTML = numeros;
}