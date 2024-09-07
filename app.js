function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome ou caracteristica do pet </p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <p class="descricao-meta">${dado.titulo}</p>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>                
                <p class="descricao-meta">${dado.tipo ? dado.tipo : ''}</p>
                <p class="descricao-meta">${dado.pelagem ? dado.pelagem : ''}</p>
                <p class="descricao-meta">${dado.porte ? dado.porte : ''}</p>
                <p class="descricao-meta">${dado.origem ? dado.origem : ''}</p>
                <p class="descricao-meta">${dado.hipoalergenico ? dado.hipoalergenico : ''}</p>
                <p class="descricao-meta">${dado.tamanho_maximo ? dado.tamanho_maximo : ''}</p>
                <p class="descricao-meta">${dado.comportamento ? dado.comportamento : ''}</p>
                <p class="descricao-meta">${dado.alimentacao ? dado.alimentacao : ''}</p>
                <p class="descricao-meta">${dado.estado ? dado.estado : ''}</p>
                <p class="descricao-meta">${dado.aquario ? dado.aquario : ''}</p>
                <p class="descricao-meta">${dado.telefone ? dado.telefone : ''}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}