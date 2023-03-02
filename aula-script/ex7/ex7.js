const Esconder = (a) => {
    let div = document.querySelector('#div').style.display;
    if(div == 'none'){
        document.querySelector(a).style.display = 'block';
    }else{
        document.querySelector(a).style.display = 'none';
    } 
}