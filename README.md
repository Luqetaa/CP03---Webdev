Nome: Matheus Rodrigues Rocha - RM: 561689 \
Nome: Lucas Cavalcante Jardim - RM: 562857

# CP03---WebDev
# Cadastro de Produtos - Projeto de Aulas Anteriores

## Descrição

Este projeto consiste em um formulário de cadastro de produtos com os seguintes campos:

- Nome do produto
- Preço
- Categoria (Tecnologia, Alimentos, Remédio)

A funcionalidade foi implementada com base no conteúdo da aula anterior e os slides passados no portal do aluno e contém as seguintes características principais:

- Validação de dados (não pode haver campos vazios, o preço deve ser um número válido e maior que zero).
- Exibição dos produtos cadastrados em uma lista dinâmica.
- Estilização da categoria do produto (por exemplo, produtos de "Tecnologia" aparecem em negrito e produtos de "Alimentos" têm o fundo amarelo).
- Limpeza automática do formulário após o cadastro bem-sucedido.

---

## Funcionalidades Implementadas

### 1. **Formulário de Cadastro**

O formulário contém três campos de entrada:
- **Nome do Produto**: Campo de texto.
- **Preço**: Campo de texto onde é esperado um número.
- **Categoria**: Seletor com opções para escolher a categoria do produto (Tecnologia, Alimentos, Remédio).

### 2. **Validação de Dados**

- O formulário valida se **nenhum campo está vazio**.
- Verifica se o **preço é um número válido e maior que zero**.
- Se algum campo estiver incorreto ou vazio, uma mensagem de erro será exibida para o usuário.

### 3. **Exibição dos Produtos Cadastrados**

- Após um cadastro bem-sucedido, o produto é exibido abaixo do formulário.
- O produto é mostrado em um formato legível, com o nome, preço (formatado para duas casas decimais) e a categoria.
  
### 4. **Estilização com CSS**

Utilizamos **somente CSS** para diferenciar visualmente os produtos com base na categoria, sem manipulação direta das classes no JavaScript. A categoria do produto é armazenada em um atributo `data-categoria` dentro de um elemento `<p>`, e o CSS aplica estilos diferentes com base nesse atributo.

- **Tecnologia**: Produto em negrito.
- **Alimentos**: Produto com fundo amarelo.
- **Outras categorias**: Produtos são exibidos normalmente, sem estilo adicional.

### 5. **Limpeza do Formulário Após o Cadastro**

Após um cadastro bem-sucedido, os campos do formulário são automaticamente limpos, prontos para o próximo produto ser cadastrado.
