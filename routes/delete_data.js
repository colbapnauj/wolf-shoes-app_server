/*
    path: /api/delete
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { deleteTalla, deleteColor, deleteZapato } = require('../controllers/delete_data');



const router = Router();

router.delete('/talla', [
    check('_id', 'El codigo de talla es obligatorio').not().isEmpty(),
    validarCampos, validarJWT
], deleteTalla);

router.delete('/color', [
    check('_id', 'El código de color es obligatorio').not().isEmpty(),
    validarCampos, validarJWT
], deleteColor);

router.delete('/zapato', [
    check('_id', 'El codigo de zapato es obligatorio').not().isEmpty(),
    validarCampos, validarJWT
], deleteZapato);
    




module.exports = router;