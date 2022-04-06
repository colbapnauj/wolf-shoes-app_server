/*
    path: /api/login
*/


const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Email no válido').isEmail(),
    check('password', 'El password debe contener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos
],  
    crearUsuario);


module.exports = router;