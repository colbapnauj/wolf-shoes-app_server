const { response } = require("express");
const Cliente = require("../models/cliente");

// Controlador
const crearCliente = async (req, res = response) => {
  const { dni } = req.body;

  try {
    const existeEmail = await Cliente.findOne({ dni });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El DNI ya esta registrado",
      });
    }

    const cliente = new Cliente(req.body);

    await cliente.save();

    res.json({
      ok: true,
      cliente,
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
    crearCliente
}
