// obtém a seção HTML onde os resultados serão exibidos
function pesquisar(){
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" para exibir os resultados da busca.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    // Se o campo estiver vazio, exibe uma mensagem informando que nada foi encontrado.
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Por favor, digite um personagem ou filme.</p>"
        return // Interrompe a função.
    }

    resultados = "";
    let titulo = "";
    let descricao = "";;
    let tags = "";

    // para cada dado dentro da lista de dados
    for (let dado of personagens) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se dado contém campoPesquisa               ou
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se o personagem corresponder à busca, cria um novo elemento HTML para exibir os resultados.
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `
        } 
        
    }
    //caso nada seja digitado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // agora que os dados já rodaram, atualiza o conteúdo da seção de resultados com os resultados da busca.
    section.innerHTML = resultados
}

