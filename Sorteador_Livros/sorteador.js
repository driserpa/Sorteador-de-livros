let dados = [];
let indicesSorteados = [];
const apiUrl = './LivrosSorteados.json';

//Função para buscar dados do arquivo JSON
async function buscarDados() {
    try {
        const response = await fetch(apiUrl);
        const dadosJson = await response.json();
        dados = dadosJson
        return dadosJson;
    } catch (error) {
        console.error('Erro ao buscar dados: ', error);
        return null;
    }
}

//Função para sortear um ID aleatorio e exibir os dados
async function sortearEExibir() {
    if(dados.length === 0) {
        await buscarDados();
    }

    // Se todos os índices foram sorteados, reinicia a lista
    if(indicesSorteados.length === dados.length) {
        indicesSorteados = [];
    }


    let idAleatorio;
    do{
        idAleatorio = Math.floor(Math.random() * dados.length);
    } while (indicesSorteados.includes(idAleatorio));

    indicesSorteados.push(idAleatorio);
    console.log(indicesSorteados)
    const itemSorteado = dados[idAleatorio];
    exibirDados(itemSorteado);
}

//Função para exibir na tela
function exibirDados(item) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <img src="${item.image}" class="imagem">
            <div class="descricao">
                <h2 class="titulo__livro">Nome do livro: ${item.name}</h2>
                <p class="sinopse">Sinopse: 
                    ${item.sinopse}
                </p>
            </div>
    `;
}

//Adiciona evento ao botão
document.getElementById('sortearBtn').addEventListener('click', sortearEExibir);