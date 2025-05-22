const formulario = document.getElementById("formulario");
const inputProduto = document.getElementById("inputProduto");
const inputPreco = document.getElementById("inputPreco");
const categoria = document.getElementById("categoria");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = inputProduto.value.trim();
    const preco = Number(inputPreco.value);
    const categoriaSelecionada = categoria.value;

    if (nome === "" || isNaN(preco) || preco <= 0 || categoriaSelecionada === "") {
        mensagem.innerHTML = "Preencha todos os campos corretamente."
        return
    }

    mensagem.innerHTML = ""

    const item = document.createElement("li")
    item.textContent = `${nome} - R$ ${preco.toFixed(2)} - Categoria: ${categoriaSelecionada}`;

    item.classList.remove("tecnologia", "alimentos")

    if (categoriaSelecionada === "tecnologia") {
        item.classList.add("tecnologia");
    } else if (categoriaSelecionada === "alimentos") {
        item.classList.add("alimentos");
    }

    lista.appendChild(item);

    inputProduto.value = "";
    inputPreco.value = "";
    categoria.value = "";
});
