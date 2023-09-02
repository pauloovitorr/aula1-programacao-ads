import BandaDAO from "./Persistencia/BandaDAO.js"

export default class Banda{
    #nome_banda
    #email
    #telefone
    #num_integrantes
    #cpf
    #cargo
    #cor

    constructor(nome_banda,email,telefone,num_integrantes, cpf,cargo, cor){

        this.#nome_banda = nome_banda
        this.#email = email
        this.telefone = telefone
        this.#num_integrantes = num_integrantes
        this.#cpf = cpf
        this.#cargo = cargo
        this.#cor = cor
    }

    get nome_banda(){
        return this.#nome_banda
    }
    set nome_banda(novo_nome){
        this.#nome_banda = novo_nome
    }

    get email(){
        return this.#email
    }
    set email(novo_email){
        this.#email = novo_email
    }

    get telefone(){
        return this.#telefone
    }
    set telefone(novo_telefone){
        this.#telefone = novo_telefone
    }

    get num_integrantes(){
        return this.#num_integrantes
    }
    set num_integrantes(novo_num_integrantes){
        this.#num_integrantes = novo_num_integrantes
    }

    get cpf(){
        return this.#cpf
    }
    set cpf(novo_cpf){
        this.#cpf = novo_cpf
    }

    get cargo(){
        return this.#cargo
    }
    set cargo(novo_cargo){
        this.#cargo = novo_cargo
    }

    get cor(){
        return this.#cor
    }
    set cor(novo_cor){
        this.#cor = novo_cor
    }

    async gravar(){
        const bandaDAO = new BandaDAO()
        await bandaDAO.gravar(this)
    }

    async atualizar(){
        const bandaDAO = new BandaDAO()
        await bandaDAO.atualiza(this)
    }

    async excluir(){
        const bandaDAO = new BandaDAO()
        await bandaDAO.excluir(this)
    }

    async consultar(termo){
        const bandaDAO = new BandaDAO()
      return  await bandaDAO.consultar(termo)
    }
}