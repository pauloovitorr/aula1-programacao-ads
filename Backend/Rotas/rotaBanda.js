import { Router } from "express";
import BandaCtrl from "../Controle/BandaCtrl.js";


const rotaBanda = Router()

const bandaCtrl = new BandaCtrl()

rotaBanda.get('/:termo', bandaCtrl.consultar)
    .get('/', bandaCtrl.consultar)
    .post('/', bandaCtrl.gravar)
    .put('/', bandaCtrl.atualizar)
    .delete('/', bandaCtrl.excluir)




export default rotaBanda
