const { response } = require("express");
const Cliente = require("../models/cliente");
const Talla = require("../models/talla");
const Color = require("../models/color");
const Zapato = require("../models/zapato");
const Producto = require("../models/producto");

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



const crearTalla = async (req, res = response) => {
  const { nro_talla } = req.body;

  try {
    const existeTalla = await Talla.findOne({ nro_talla });
    if (existeTalla) {
      return res.status(400).json({
        ok: false,
        msg: "Talla ya registrada",
      });
    }

    const talla = new Talla(req.body);

    await talla.save();

    res.json({
      ok: true,
      talla,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};



const crearColor = async (req, res = response) => {
  const { name_color } = req.body;
  

  try {
    const existeColor = await Color.findOne({ name_color });

    if (existeColor) {
      return res.status(400).json({
        ok: false,
        msg: "Código o nombre de color ya registrado",
      });
    }

    const color = new Color(req.body);

    await color.save();

    res.json({
      ok: true,
      color,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};



const crearZapato = async (req, res = response) => {
  const { nombre_modelo } = req.body;
  

  try {
    const existeNombreZapato = await Zapato.findOne({ nombre_modelo });

    if (existeNombreZapato) {
      return res.status(400).json({
        ok: false,
        msg: "Nombre de modelo ya registrado",
      });
    }

    const zapato = new Zapato(req.body);

    await zapato.save();

    res.json({
      ok: true,
      zapato,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const crearProducto = async (req, res = response) => {
  const { id_modelo } = req.body;
  

  try {
    const existeIdModel = await Zapato.findOne({ _id: id_modelo });

    if (!existeIdModel) {
      return res.status(400).json({
        ok: false,
        msg: "Modelo no registrado",
      });
    }

    const producto = new Producto(req.body);

    await producto.save();

    res.json({
      ok: true,
      producto,
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
    crearCliente, 
    crearTalla, 
    crearColor, 
    crearZapato, 
    crearProducto, 
}
