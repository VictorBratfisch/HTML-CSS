const Aleatorio = () => {
  let botao = document.querySelector('#random');
  let n = Math.random();
  let r = Math.round(n * 100);
  botao.innerHTML = r;
}

