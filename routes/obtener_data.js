/*
    path: /api/data
*/

const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getClientes, getTallas, getColores, getZapatos, getProductos } = require('../controllers/register_data');



const router = Router();

router.get('/clientes', validarJWT, getClientes);

router.get('/tallas', validarJWT, getTallas);

router.get('/colores', validarJWT, getColores);

router.get('/zapatos', validarJWT, getZapatos);

router.get('/productos', validarJWT, getProductos);




module.exports = router;