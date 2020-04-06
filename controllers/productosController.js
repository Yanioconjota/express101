const express = require('express');

const productosController = {
  listado: () => {},
  crear: () => {},
  detalle: (req, res) => {
    if (req.params.idProducto === undefined) {
      res.send('Bienvenios al listado de productos');
    } else {
      res.send('Bienvenios al detalle del producto: ' + req.params.idProducto);
    }
  },
  detalleComentarios: (req, res) => {
    if (req.params.idComentario === undefined) {
      res.send('Bienvenios al detalle del producto: ' + req.params.idProducto);
    } else {
      res.send('Bienvenios al detalle del producto: ' + req.params.idProducto + ' y estás enfocado en el comentario: ' + req.params.idComentario);
    }
  }
}

module.exports = productosController;