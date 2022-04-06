const { response } = require("express");
const Usuario = require("../models/usuario");

// Controlador
const crearUsuario = async (req, res = response) => {
  const { email } = req.body;

  try {

    const existeEmail = await Usuario.findOne({ email });
    if ( existeEmail ) {
        return res.status(400).json({
            ok: false,
            // msg: 'El correo ya esta registrado'
            msg: 'Credenciales no válidas'
        })
    }

    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
      ok: true,
      usuario
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

module.exports = {
  crearUsuario,
};
