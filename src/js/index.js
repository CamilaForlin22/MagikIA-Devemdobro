const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", function () {
  console.log("clicou no botão filtrar");

  const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;

  const cartas = document.querySelectorAll(".carta");

  cartas.forEach(function (carta) {
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = carta.dataset.preco;

    let mostrarCarta = true;

    const possuiFiltroDeCategoria = categoriaSelecionada !== " ";
    const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if (possuiFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarCarta = false;
    }

    const possuiFiltroDePreco = precoMaximoSelecionado !== " ";
    const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

    if (possuiFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo){
      mostrarCarta = false;
    }

    if (possuiFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
      mostrarCarta = false;
    }

    if (mostrarCarta) {
      carta.classList.add("mostrar");
      carta.classList.remove("esconder");
    } else {
      carta.classList.remove("mostrar");
      carta.classList.add("esconder");
    }
  });
});
