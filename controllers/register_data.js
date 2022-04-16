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

const getClientes = async (req, res = response) => {

  const desde = Number(req.query.desde) || 0;
  

  const clientes = await Cliente.find();
    // .find({ _id: {$ne: req.uid} })
    // .sort('-fecha')
    // .skip(desde)
    // .limit(20);

  res.json({
    ok: true,
    clientes
  });
}

const crearTalla = async (req, res = response) => {
  const { cod_talla } = req.body;

  try {
    const existeCodTalla = await Talla.findOne({ cod_talla });
    if (existeCodTalla) {
      return res.status(400).json({
        ok: false,
        msg: "Código de talla ya registrado",
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

const getTallas = async (req, res = response) => {

  const tallas = await Talla.find()
    .sort('talla');

  res.json({
    ok: true,
    tallas
  });
}

const crearColor = async (req, res = response) => {
  const { cod_color, name_color } = req.body;
  

  try {
    const existeCodTalla = await Color.findOne({ cod_color });
    const existeColor = await Color.findOne({ name_color });

    if (existeCodTalla || existeColor) {
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

const getColores = async (req, res = response) => {

  const colors = await Color.find();

  res.json({
    ok: true,
    colors
  });
}

const crearZapato = async (req, res = response) => {
  const { cod_zapato } = req.body;
  

  try {
    const existeCodZapato = await Zapato.findOne({ cod_zapato });

    if (existeCodZapato) {
      return res.status(400).json({
        ok: false,
        msg: "Código de zapato ya registrado",
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

const getZapatos = async (req, res = response) => {

  const zapatos = await Zapato.find();

  res.json({
    ok: true,
    zapatos
  });
}

const crearProducto = async (req, res = response) => {
  const { cod_producto } = req.body;
  

  try {
    const existeCodProduct = await Producto.findOne({ cod_producto });

    if (existeCodProduct) {
      return res.status(400).json({
        ok: false,
        msg: "Código de producto ya registrado",
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

const getProductos = async (req, res = response) => {

  const producto = await Producto.find();

  res.json({
    ok: true,
    producto
  });
}

module.exports = {
    crearCliente, 
    getClientes, 
    crearTalla, 
    getTallas, 
    crearColor, 
    getColores, 
    crearZapato, 
    getZapatos, 
    crearProducto, 
    getProductos
}
