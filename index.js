import express from 'express';
import autenticar from './seguranca/autenticacao.js';
import session, { Cookie } from 'express-session';
import rotaLogin from './rotas/rotaLogin.js';
import Banda from './Backend/Modelo/Banda.js'

const host = '0.0.0.0';

const porta = 3218;

const app = express();

// memoriza usuários
app.use(session({
    secret: 'Ch4V6seCr3T4',
    resave: true,
    saveUninitialized: false,
    Cookie: {
        maxAge: 1000 * 60 * 30
    }
}))


//corpo da requisição
app.use(express.urlencoded({extended: false}));

//arquivos staticos
app.use(express.static('./publico'));

//teste
app.use('/bandas', (req,res)=>{
    const banda = new Banda()
    banda.consultar('').then((listaBandas)=>{
        res.json(listaBandas)
    })
})

app.use('/login', rotaLogin);
app.use(autenticar, express.static('./protegido'));




// subindo servidor
app.listen(porta, host, () =>{
    console.log('Servidor escutando em', host, porta);
})