/*
    path: /api/data
*/

const { Router } = require('express');

const { getClientes } = require('../controllers/clientes');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/clientes', validarJWT, getClientes);




module.exports = router;