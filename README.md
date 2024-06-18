# Sorteador-de-livros

Este é um projeto de um site que realiza sorteios de livros utilizando dados de uma API JSON. Ao clicar no botão "Sortear", um livro é escolhido aleatoriamente e seus detalhes são exibidos na tela. Os livros não se repetem até que todos tenham sido sorteados, garantindo que cada livro seja sorteado pelo menos uma vez antes de repetir.

### Arquivos Principais

- **index.html**: Arquivo HTML principal que contém a estrutura do site.
- **sorteador.js**: Arquivo JavaScript que contém os codigos de programação.
- **LivrosSorteados.json**: Arquivo JSON que contém os dados dos livros a serem sorteados.
- **estilo.css** (opcional): Arquivo CSS para estilização do site.

## Como Funciona

1. O botão "Sortear" escolhe um livro aleatório do arquivo JSON.
2. Os livros não se repetem até que todos os livros tenham sido sorteados.
3. Quando todos os livros tiverem sido sorteados, a lista é reiniciada.
4. A mensagem inicial "Ainda não foi sorteado um livro. Clique no botão e descubra sua proxima leitura!" é substituída pelos detalhes do livro sorteado.

## Estrutura do `LivrosSorteados.json`

O arquivo `LivrosSorteados.json` deve conter uma lista de objetos, cada um representando um livro, com os campos `id`, `nome` e `descricao`.

### Nota Adicional

Este é um projeto simples e educativo para demonstrar como trabalhar com sorteios e exibição de dados utilizando HTML, CSS e JavaScript. Sinta-se à vontade para expandir e adaptar o código conforme suas necessidades.
