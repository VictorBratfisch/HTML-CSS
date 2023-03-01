const Operacao = () => {
    let n1 = Number(document.querySelector('#n1').value);
    let n2 = Number(document.querySelector('#n2').value);
    let op = document.querySelector('#o').value;
    let result = 0;
    
    if(op == '+'){
        result = n1 + n2 ;
    }else if(op == '-'){
        result = n1 - n2;
    }else if(op == '*'){
        result = n1 * n2;
    }else if(op == '/'){
        result = n1 / n2;
    }else{
        result = 'Erro';
    }
    
    let r = document.querySelector('#result');
    r.innerHTML =  result;
}