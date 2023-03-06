let transacoes = [];

const adicionarTransacao = () => {
  let desc = document.querySelector("#descricao").value;

  let valor = document.querySelector("#valor").value;

  let data = document.querySelector("#data").value;

  let transacao = { descricao: desc, valor: valor, data: data };
  transacoes.push(transacao);

  if (valor >= 0) {
    entrada = valor;
  }
  Atualizar();
};

const removerTransacao = (index) => {
  transacoes.splice(index, 1);
  Atualizar();
};

const Atualizar = () => {
  let entrada = 0;
  let saida = 0;
  let total = 0;
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  transacoes.forEach(function (transacao, index) {
    let row = `
        <tr>
        <td>${transacao.descricao}</td>
        <td>R$ ${transacao.valor}</td>
        <td>${transacao.data}</td>
        <td><button class="removerTransacao" onclick="removerTransacao(${index})"><img src="images/remover.png" alt="" /></button></td>
        </tr>
        `;
    total += parseFloat(transacao.valor.replace(",", "."));
    tbody.innerHTML += row;

    if (transacao.valor >= 0) {
      entrada += parseFloat(transacao.valor.replace(",", "."));
    } else {
      saida += parseFloat(transacao.valor.replace(",", "."));
    }
  });
  document.querySelector("#num-total").textContent = total.toFixed(2);
  document.querySelector("#num-entrada").textContent = entrada.toFixed(2);
  document.querySelector("#num-saida").textContent = saida.toFixed(2);
};
