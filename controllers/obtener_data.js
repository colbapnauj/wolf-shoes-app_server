const { response } = require("express");
const Cliente = require("../models/cliente");
const Talla = require("../models/talla");
const Color = require("../models/color");
const Zapato = require("../models/zapato");
const Producto = require("../models/producto");

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



const getTallas = async (req, res = response) => {

    // TODO Ordenar por nro_talla de forma ascendente
    const tallas = await Talla.find()
    .sort('nro_talla');


  res.json({
    ok: true,
    tallas
  });
}


const getColores = async (req, res = response) => {

  const colors = await Color.find();

  res.json({
    ok: true,
    colors
  });
}



const getZapatos = async (req, res = response) => {

  const zapatos = await Zapato.find();

  res.json({
    ok: true,
    zapatos
  });
}



const getProductos = async (req, res = response) => {

  const _productos = await Producto.find();

  const productos = [];
  for (let i = 0; i < _productos.length; i++) {
    const modelo = await Zapato.findOne({ _id: _productos[i].id_modelo });
    const talla = await Talla.findOne({ _id: _productos[i].id_talla });
    const color = await Color.findOne({ _id: _productos[i].id_color });
    const cantidad = _productos[i].cantidad;
    const precio = _productos[i].precio;
    
    productos.push({
      modelo,
      color,
      talla,
      cantidad,
      precio
    }
  );
  }

  

  res.json({
    ok: true,
    productos
  });
}

module.exports = {
    
    getClientes, 
    
    getTallas, 
    
    getColores, 
    
    getZapatos, 
    
    getProductos
}
