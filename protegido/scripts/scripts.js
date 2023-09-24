
window.onload = ()=>{
    mostrarClientes([])
}

function mostrarClientes(lista_banda) {
    let elementoDivTabela = document.getElementById('espacoTabela')

    if(lista_banda.length > 0){

    // limpar elemento divTbela
    elementoDivTabela.innerHTML = ''

    // criando tabela
    let tabela              = document.createElement('table')
    let cabecalhoTabela     = document.createElement('thead')
    let corpoTabela         = document.createElement('tbody')

    cabecalhoTabela.innerHTML = `<th> 
                                    <th> nome_banda </th>
                                    <th> email </th>
                                    <th> telefone </th>
                                    <th> num_integrantes</th>
                                    <th> cpf </th>
                                    <th> cargo </th>
                                    <th> cor </th>
                                </th> `

    // adicionando o cabeçalho na tabela
    tabela.appendChild(cabecalhoTabela)

    // alimentando o corpo da tabela
    for (const banda of lista_banda){
        const linhaTabela = document.createElement('tr')
        linhaTabela.innerHTML = ` <td> ${lista_banda.nome_banda} <td> 
                                  <td> ${lista_banda.email} </td>
                                  <td> ${lista_banda.telefone} </td> 
                                  <td> ${lista_banda.num_integrantes} </td> 
                                  <td> ${lista_banda.cpf} </td> 
                                  <td> ${lista_banda.cargo} </td> 
                                  <td> ${lista_banda.cor} </td> `

        corpoTabela.appendChild(linhaTabela)
    }

    tabela.appendChild(corpoTabela)
    elementoDivTabela.appendChild(tabela)
    
    }  
    else{
        elementoDivTabela.innerHTML =`<div class="alert alert-warning" role="alert">
                                        Nenhum cliente cadastrado
                                      </div>`
    }

}

