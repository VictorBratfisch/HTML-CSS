const AlterarCor = () => {
    let quadrado = document.querySelector('.quadrado');
    let cores = document.querySelector('#cores').value;
    if(cores == 'Vermelho'){
        quadrado.style.backgroundColor = 'red';
    }else if(cores == 'Azul'){
        quadrado.style.backgroundColor = 'blue';
    }else if(cores == 'Verde'){
        quadrado.style.backgroundColor = 'green';
    }
    quadrado.innerHTML = cores;
}