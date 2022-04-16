/*
    path: /api/register
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { crearCliente, crearTalla, crearColor, crearZapato, crearProducto } = require('../controllers/register_data');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

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
    validarCampos, validarJWT
], crearCliente);

router.post('/talla', [
    check('nro_talla', 'La talla es obligatoria').not().isEmpty(),
    validarCampos, validarJWT
], crearTalla);

router.post('/color', [
    check('name_color', 'El color es obligatorio').not().isEmpty(),
    validarCampos, validarJWT
], crearColor);

router.post('/zapato', [
    check('nombre_modelo', 'El nombre del modelo del zapato es obligatorio').not().isEmpty(),
    validarCampos, validarJWT
], crearZapato);

router.post('/producto', [
    check('id_modelo', 'El id de modelo del zapato es obligatorio').not().isEmpty(),
    check('id_color', 'El id de color del zapato es obligatorio').not().isEmpty(),
    check('id_talla', 'La talla del zapato es obligatoria').not().isEmpty(),
    /// Cantidad creo que no debería registrar aquí, porque se debería de hacer ingresos y salidas de los productos
    // TODO validar que la cantidad sea un numero
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    validarCampos, validarJWT
], crearProducto);


module.exports = router;