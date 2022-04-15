const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");

// Controlador
const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {

    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        // msg: 'El correo ya esta registrado'
        msg: 'Credenciales no válidas'
      })
    }

    const usuario = new Usuario(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    // Generar JWT
    const token = await generarJWT(usuario.id)

    res.json({
      ok: true,
      usuario,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};


const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // Verificar el email
    const usuarioDB = await Usuario.findOne({email});
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        // msg: 'Credenciales no válidas'
        msg: 'Email no encontrado'
      });
    }

    // Validar el password
    const validPassword = bcrypt.compareSync(password, usuarioDB.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'La contraseña no es válida'
      });
    }

    // Generar JWT
    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      usuarioDB,
      token
    });
      

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }

}

const renewToken = async (req, res = response) => {
  const uid= req.uid;

  // Generar JWT
  const token = await generarJWT(uid);

  // Obtener el usuario por el UID
  const usuarioDB = await Usuario.findById(uid);

  res.json({
    ok: true,
    usuarioDB,
    token
  });
}


module.exports = {
  crearUsuario, login, renewToken
};
