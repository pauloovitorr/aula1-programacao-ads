import Banda from "../Modelo/Banda.js"


export default class BandaCtrl{
    // classe responsavel por controlar os métodos GET, POST, PUT e DELETE

    gravar(requisicao,resposta){
        resposta.type('application/json')

        if(requisicao.method === 'POST' && requisicao.is("application/json")){
            const dados =           requisicao.body
            const nome_banda =      dados.nome_banda
            const email =           dados.email
            const telefone =        dados.telefone
            const num_integrantes = dados.num_integrantes
            const cpf =             dados.cpf
            const cargo =           dados.cargo
            const cor =             dados.cor


            if(nome_banda && email && telefone && num_integrantes && cpf && cargo && cor){

                const banda = new Banda(nome_banda, email,telefone,num_integrantes,cpf,cargo,cor)

                banda.gravar().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: 'Banda cadastrado com sucesso !'
                    })
                }).catch((err)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Erro ao cadastrar banda: "+ err.messagem
                    })
                })
                
            }
            else{
                resposta.json({
                    status: false,
                    mensagem: 'Informe todos os dados da banda conforme a documentação'
                })
            }
        }

        else{
            resposta.json({
                status: false,
                mensagem: 'Requisição inválida! Informe uma banda no formato JSON'
            })
        }
    }


    atualizar(requisicao,resposta){
        resposta.type('application/json')

        

        if(requisicao.method === 'PUT' && requisicao.is("application/json")){

            const dados =           requisicao.body
            const nome_banda =      dados.nome_banda
            const email =           dados.email
            const telefone =        dados.telefone
            const num_integrantes = dados.num_integrantes
            const cpf =             dados.cpf
            const cargo =           dados.cargo
            const cor =             dados.cor

            
            if(nome_banda && email && telefone && num_integrantes && cpf && cargo && cor){

                const banda = new Banda(nome_banda, email,telefone,num_integrantes,cpf,cargo,cor)

                banda.atualizar().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: 'Banda atualizada com sucesso !'
                    })
                }).catch((err)=>{
                    resposta.json({
                        status: false,
                        mensagem: 'Erro ao atualizar Banda: ' + err.message
                    })
                })
             }
            else{
                resposta.json({
                    status: false,
                    mensagem: 'Informe todos os dados da banda conforme a documentação'
                })
            }


        }
        else{
            resposta.json({
                status: false,
                mensagem: 'Requisição inválida! Informe uma banda no formato JSON'
            })
        }

    }
    excluir(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === 'DELETE' && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            if(cpf){
                const banda = new Banda(
                    '', 
                    '', 
                    '', 
                    '', 
                    cpf,
                    '', 
                    '', 
                );
                banda.excluir().then(()=>{
                    resposta.json({
                        status:true,
                        mensagem: "banda excluído com sucesso."
                    })
                }).catch((erro)=>{
                    resposta.json({
                        status:false,
                        mensagem: "Erro ao excluir o banda:" + erro.message
                    })
                })
            }
            else{
                resposta.json({
                    status:false,
                    mensagem: "Informe o CPF do responsavel banda para excluir. (no formato JSON)"
                });
            }
        }
        else{
            resposta.json({
                status: false,
                mensagem: "Requisição inválida! Informe um banda no formato JSON para ser excluído."
            })
        }
    }


    consultar(requisicao,resposta){
        resposta.type('application/json')

        if(requisicao.method === 'GET'){

            let termo = requisicao.query.termo
            if(!termo) termo = ''

            const banda = new Banda()

            banda.consultar(termo).then((listaBanda)=>{
                resposta.json(listaBanda)
            })
            .catch((err)=>{
                resposta.json({
                    status: false,
                    mensagem: 'Erro ao consultar bandas: ' + err
                })
            })

        }
        
        else{
            resposta.json({
                status: false,
                mensagem: 'Requisição inválida! Informe uma banda no formato JSON'
            })
        }
    }
}