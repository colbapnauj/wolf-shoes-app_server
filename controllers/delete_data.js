const { response } = require("express");
const Talla = require("../models/talla");
const Color = require("../models/color");
const Zapato = require("../models/zapato");
const Producto = require("../models/producto");


const deleteTalla = async (req, res = response) => {

  const { cod_talla } = req.body;

  try {
    const existeCodTalla = await Talla.findOne({ cod_talla });
    if (existeCodTalla) {
      await Talla.findOneAndDelete({ cod_talla });
      res.json({
        ok: true,
        msg: 'Talla eliminada'
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "Código de talla no registrado",
      });
    }    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
}

const deleteColor = async (req, res = response) => {

    const { _id } = req.body;
  
  
    try {
      const existeCodColor = await Color.findOne({ _id });
      console.log(existeCodColor);
      if (existeCodColor) {
        await Color.findOneAndDelete({ _id });
        res.json({
          ok: true,
          msg: 'Color eliminado'
        });
      } else {
        return res.status(400).json({
          ok: false,
          msg: "Código de Color no registrado",
        });
      }    
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Error inesperado",
      });
    }
  }

  const deleteZapato = async (req, res = response) => {

    const { _id } = req.body;
    console.log(_id);
  
    try {
      const existeCodZapato = await Zapato.findOne({ _id });
      const existeModeloEnAlmacen = await Producto.findOne({ cod_modelo: _id });
        if (!existeModeloEnAlmacen){
            if (existeCodZapato) {
                await Zapato.findOneAndDelete({ _id });
                res.json({
                ok: true,
                msg: 'Zapato eliminado'
                });
            } else {
                return res.status(400).json({
                ok: false,
                msg: "Código de zapato no registrado",
                });
            }
        } else {
            return res.status(400).json({
                ok: false,
                msg: "El zapato no se puede eliminar porque esta en almacen",
            });
        }      
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Error inesperado",
      });
    }
  }


  // TODO: Revisar esta función
  const deleteProducto = async (req, res = response) => {

    const { cod_producto } = req.body;
  
    try {
      const existeCodProducto = await Producto.findOne({ cod_producto });
      // TODO En Detalle proforma
      const existeModeloEnAlmacen = await Detalle.findOne({ cod_producto });
        if (!existeModeloEnAlmacen){
            if (existeCodZapato) {
                await Zapato.findOneAndDelete({ cod_producto });
                res.json({
                ok: true,
                msg: 'Zapato eliminado'
                });
            } else {
                return res.status(400).json({
                ok: false,
                msg: "Código de zapato no registrado",
                });
            }
        } else {
            return res.status(400).json({
                ok: false,
                msg: "El zapato no se puede eliminar porque esta en almacen",
            });
        }      
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Error inesperado",
      });
    }
  }


module.exports = {
    deleteTalla, deleteColor, deleteZapato
}
