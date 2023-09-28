const botaoCadastrar = document.getElementById('btn-form')
const formulario = document.getElementById('formBanda')

// btn excluir e editar
document.getElementById('excluir').onclick = apagarBanda

document.getElementById('atualizar').onclick = atualizarBanda




function obterBandaFormulario(){

    return{
        nome_banda: document.getElementById('name').value , 
        email: document.getElementById('email').value,
        telefone: document.getElementById('tell').value,
        num_integrantes: document.getElementById('number').value,
        cpf: document.getElementById('cpf').value,
        cargo: document.getElementById('cargo').value,
        cor: document.getElementById('cor').value
    }
}


function limparFormulario(){
    document.getElementById('name').value  = ''
    document.getElementById('email').value = ''
    document.getElementById('tell').value  = ''
    document.getElementById('number').value= ''
    document.getElementById('cpf').value   = ''
    document.getElementById('cargo').value = ''
    document.getElementById('cor').value   = ''
    formulario.classList.remove('was-validated')
}


botaoCadastrar.onclick= ()=>{
    if(formulario.checkValidity()){

        const banda = obterBandaFormulario()

        cadastrarBanda(banda)
        limparFormulario()
    }
    else{
        formulario.classList.add('was-validated')
    }
  
}

window.onload = ()=>{
    obterBanda()

}

function mostrarMensagem(mensagem, tipo){
    let divMenssagem = document.getElementById('menssagem')
    divMenssagem.innerHTML = `<div class="alert alert-${tipo}" role="alert">
                                ${mensagem}

                              </div>`
setTimeout(()=>{
    divMenssagem.innerHTML = ''
}, 5000)
}

function obterBanda(){
    fetch('https://129.146.68.51/aluno18-ppiadsead/bandas', {method: 'GET'})
    .then((resposta)=>{
        if(resposta.status === 200){
            return resposta.json()
        }else{
            return []
        }
    })
    .then((listaBanda)=>{
        mostrarBandas(listaBanda)
    })
    .catch((erro)=>{
        mostrarMensagem('Não foi possivel obter as bandas do backend. Erro:' + erro.message, 'danger')
})
}

// cadastrar banda
function cadastrarBanda(banda){
    fetch('https://129.146.68.51/aluno18-ppiadsead/bandas',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(banda)
    }).then((resposta)=>{
        if(resposta.status === 200){
            return resposta.json()
        }
        else{
            return {
                status: false,
                mensagem : 'Não foi possivel enviar a banda para o backend '
            }
        }
    }).then((respostaBackEnd)=>{
        if(respostaBackEnd.status){
            mostrarMensagem(respostaBackEnd.mensagem, 'success')
            obterBanda()
        }
        else{
            mostrarMensagem(respostaBackEnd.mensagem, 'danger')
        }
    }).catch((erro)=>{
            mostrarMensagem(erro.mensagem, 'danger')
    })

}


function mostrarBandas(lista_banda) {
    let elementoDivTabela = document.getElementById('espacoTabela')

    if(lista_banda.length > 0){

    // limpar elemento divTbela
    elementoDivTabela.innerHTML = ''

    // criando tabela
    let tabela              = document.createElement('table')
    tabela.className        = 'table table-striped table-hover'
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
        linhaTabela.innerHTML = ` <td> ${banda.nome_banda} <td> 
                                  <td> ${banda.email} </td>
                                  <td> ${banda.telefone} </td> 
                                  <td> ${banda.num_integrantes} </td> 
                                  <td> ${banda.cpf} </td> 
                                  <td> ${banda.cargo} </td> 
                                  <td> ${banda.cor} </td>
                                <td> 
                                  <button type="button" onclick="prepararFormulario('${banda.nome_banda}','${banda.email}','${banda.telefone}','${banda.num_integrantes}','${banda.cpf}','${banda.cargo}','${banda.cor}','exclusao') >Excluir</button>
                                </td>
                                
                                  <td> 
        <button type="button" onclick="prepararFormulario('${banda.nome_banda}','${banda.email}','${banda.telefone}','${banda.num_integrantes}','${banda.cpf}','${banda.cargo}','${banda.cor}', 'atualizacao')" >Editar</button>
                                  </td>

        `
 
        corpoTabela.appendChild(linhaTabela)
    }

    tabela.appendChild(corpoTabela)
    elementoDivTabela.appendChild(tabela)
    
    }  
    else{
        elementoDivTabela.innerHTML =`<div class="alert alert-warning" role="alert">
                                        Nenhuma Banda cadastrada
                                      </div>`
    }

}

// Aula 2 


function prepararFormulario(nome_banda='',email='',telefone='',num_integrantes='',cpf='',cargo='',cor='', acao=''){

    let botaoCadastra   = document.getElementById('btn-form')
    let botaoAtualizar  = document.getElementById('atualizar')
    let botaoExcluir    = document.getElementById('excluir')

    document.getElementById('name').value  = nome_banda
    document.getElementById('email').value = email
    document.getElementById('tell').value  = telefone
    document.getElementById('number').value= num_integrantes
    document.getElementById('cpf').value   = cpf
    document.getElementById('cargo').value = cargo
    document.getElementById('cor').value   = cor
    

    if(acao === 'exclusao'){
        document.getElementById('cpf').disabled = false
        botaoCadastra.disabled  = true
        botaoAtualizar.disabled = true
        botaoExcluir.disabled   = false
    }
    else if(acao === 'atualizacao'){
        document.getElementById('cpf').disabled = true
        botaoCadastra.disabled  = true
        botaoAtualizar.disabled = false
        botaoExcluir.disabled   = true
    }
    else{
        document.getElementById('cpf').disabled = false
        botaoCadastra.disabled  = false
        botaoAtualizar.disabled = true
        botaoExcluir.disabled   = true
      
    }

}

function apagarBanda(){
    if(confirm('Confirma a exclusão da banda selecionada')){
        fetch('https://129.146.68.51/aluno18-ppiadsead/bandas', {
            method:'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                cpf: document.getElementById('cpf').value
            })
    })
    .then((resposta)=>{
        if(resposta.status === 200){
            return resposta.json()
        }
    })
    .then((dados)=>{
        divMenssagem = document.getElementById('menssagem').innerHTML  = `<div>
                            ${dados.mensagem}
                      </div>`
        prepararFormulario()
        obterBanda()
    })
    .catch((erro)=>{
        divMenssagem = document.getElementById('menssagem').innerHTML  = `<div>
        ${erro.message}
  </div>`
    })
    
    }

    else{
        prepararFormulario()
    }
}

function atualizarBanda(){
    if(confirm('Confirma a atualização da banda ?')){

        const banda = obterBandaFormulario()

    if(banda){

    fetch('https://129.146.68.51/aluno18-ppiadsead/bandas',{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(banda)
    }).then((resposta)=>{
        if(resposta.status === 200){
            return resposta.json()
        }
        else{
            return {
                status: false,
                mensagem : 'Não foi possivel enviar a banda para o backend '
            }
        }
    }).then((respostaBackEnd)=>{
        if(respostaBackEnd.status){
            mostrarMensagem(respostaBackEnd.mensagem, 'success')
            prepararFormulario()
            obterBanda()
        }
        else{
            mostrarMensagem(respostaBackEnd.mensagem, 'danger')
        }
    }).catch((erro)=>{
            mostrarMensagem(erro.mensagem, 'danger')
    })
}
else{
    divMenssagem = document.getElementById('menssagem').innerHTML  = `<div>
    Por favor informe corretamente os dados da banda !
</div>`
}

}
else{
    prepararFormulario()
}
}