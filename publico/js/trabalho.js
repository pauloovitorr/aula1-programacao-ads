

function verifica_nome(){
    let nome = document.querySelector('#name') 
    let valor = nome.value
    let erro_nome = document.querySelector('#erro_nome')
    let regex = /^[a-zA-Z-0-9 ]{3,15}$/                         // expressão torna obrigatorio pelo menos 3 caracteres

    if(regex.test(valor)){

        if(nome.classList.contains('border-danger')){           
            nome.classList.remove('border-danger')
        }

        erro_nome.textContent = ''
        
        return
    }
    else 
        nome.classList.add('border-danger')                    // como msg de erro coloquei a borda em vermelho e um texto destacando que está invalido
        erro_nome.textContent = 'Nome inválido (minimo 3 letras)'
}


function verifica_email(){
    let email = document.querySelector('#email')
    let valor = email.value
    let erro_email = document.querySelector('#erro_email')
    let regex = /^[a-z0-9.]+\@[a-z]+\.[a-z]+(\.[a-z0-9])?/     // expressão torna obrigatorio o uso do @ e o . sendo opcional outro . no final
                                                                // para exemplo terminados em .com.br, e tudo minusculo

    if(regex.test(valor)){
        if(email.classList.contains('border-danger')){
            email.classList.remove('border-danger')
        }

        erro_email.textContent = ''
        return
    }
    else
        email.classList.add('border-danger')
        erro_email.textContent = 'Email inválido(observe o uso "@" e ".")'
}

function valida_telefone() {
    let tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
       tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
       tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
       tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
       tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;

    let valor_tel = document.querySelector('#tell')

    if(tel.length < 14){

        valor_tel.classList.add('border-danger')
        
     }
     else valor_tel.classList.remove('border-danger')
}


 function valida_num(){
    let num = document.querySelector('#number')
    let valor_num = parseInt(num.value)
    let erro_num = document.querySelector('#erro_num')
    let regex = /^[1-9]{1,2}$/

    if(regex.test(valor_num)){
        if(num.classList.contains('border-danger')){
            num.classList.remove('border-danger')
        }

        erro_num.textContent = ''
        return
    }
    else
        num.classList.add('border-danger')
        erro_num.textContent = 'Número inválido (min 1 e max 9)'
    
 }

 function mCpf() {
    var cpf = event.target.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    event.target.value = cpf;
 }
 function verifica_text(){
    let text_area = document.querySelector('#texto_area')
    let valor_text = text_area.value
    let regex = /^\w[a-zA-Z0-9,. ]{10,}/
    let erro_texto = document.querySelector('#erro_texto')
    

    if(regex.test(valor_text)){
        if(text_area.classList.contains('border-danger')){
            text_area.classList.remove('border-danger')
        }

        erro_texto.textContent =''
        return
    }
    else text_area.classList.add('border-danger') 
         erro_texto.textContent = 'Use no minimo 10 caracteres, sugestão conte a historia da banda, premios etc...'
        


 }


function verifica_erros(){
    
    let erros = document.querySelectorAll('.border-danger')

    erros.forEach((elemento)=>{
       elemento.value = ''
    })
}