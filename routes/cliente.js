/*
    path: /api/register
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { crearCliente } = require('../controllers/cliente');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/cliente', [
    // dni debe tener una longitud de 8
    check('dni', 'Nro de dni incorrecto').isLength({ min: 8, max: 8 }),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidoPaterno', 'El apellido paterno es obligatorio').not().isEmpty(),
    check('apellidoMaterno', 'El apellido materno es obligatorio').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('telefono', 'Nro de telefono incorrecto').isLength({ min: 9, max: 9 }),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    validarCampos
], crearCliente);

module.exports = router;