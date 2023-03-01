const Link = () => {
    let link = document.querySelector('#link').value;
    let botao = document.querySelector('#botao');
    botao.innerHTML = window.open(link);
}