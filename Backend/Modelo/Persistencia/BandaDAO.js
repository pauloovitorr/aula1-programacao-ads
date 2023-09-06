
import Banda from '../Banda.js'
import conectar from './Conexao.js'

export default class BandaDAO{

    async gravar(banda){
        if(banda instanceof Banda){
            const conexao = await conectar()
            const sql = `INSERT INTO banda (nome_banda,email,telefone,num_integrantes, cpf,cargo, cor) VALUE (?,?,?,?,?,?,?)`
            const parametro = [banda.nome_banda, banda.email, banda.telefone, banda.num_integrantes,banda.cpf, banda.cargo, banda.cor]

            await conexao.execute(sql, parametro)
            global.poolConexoes.releaseConnection(conexao)
        } 
    }

    async atualiza(banda){
        if(banda instanceof Banda){
            const conexao = await conectar()
            const sql = 'UPDATE banda SET nome_banda = ?, email = ?, telefone = ?, num_integrantes = ?, cargo = ?, cor = ? WHERE cpf = ? '
            
            const parametro = [banda.nome_banda, banda.email, banda.telefone, banda.num_integrantes, banda.cargo, banda.cor,banda.cpf]

            await conexao.execute(sql, parametro)
            global.poolConexoes.releaseConnection(conexao)
        }
    }

async excluir(banda){
    if(banda instanceof Banda){
        const conexao = await conectar()
        const sql = 'DELETE FROM banda WHERE cpf = ?'
        const parametro = [banda.cpf]

        await conexao.execute(sql, parametro)
        global.poolConexoes.releaseConnection(conexao)
    }
}

async consultar(termo){
    const conexao = await conectar()
    if(!termo) termo = ''
       const listaBanda = []
       const sql = 'SELECT * FROM banda WHERE nome_banda LIKE ?'
       const parametro = ['%' + termo + '%']
       const [rows] = await conexao.query(sql, parametro)

    for( const linha of rows){
        const banda = new Banda(linha.nome_banda, linha.email, linha.telefone, linha.num_integrantes,linha.cpf, linha.cargo, linha.cor)

        listaBanda.push(banda)
    }

    return listaBanda
}

}