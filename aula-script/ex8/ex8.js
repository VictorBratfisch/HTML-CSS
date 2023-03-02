const TirarVogal = () => {
    let texto = document.querySelector('#txt').value;
    let lista = [];
    for (let index = 0; index < texto.length; index++) {
    lista.push(texto[index]);
  }
    let resposta = "";

    listaAlterada = [];
  for (let index = 0; index < lista.length; index++) {
    resposta += lista[index].replace(/a|e|i|o|u/, " ");
  }

  let tex = document.querySelector('#txt');
  tex.value = resposta;
}