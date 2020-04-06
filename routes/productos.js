const express = require('express'),
      router = express.Router();

//los dos puntos ":" nos indican que la url recibe un parámetro
//El signo de interrogación "?" al final del parámetro,
//nos indica que dicho parámetro es opcional
router.get('/:idProducto?', (req, res) => {
  if (req.params.idProducto === undefined) {
    res.send('Bienvenios al listado de productos');
  } else {
    res.send('Bienvenios al detalle del producto: ' + req.params.idProducto);
  }
});

router.get('/:idProducto/comentarios/:idComentario?', (req, res) => {
  if (req.params.idComentario === undefined) {
    res.send('Bienvenios al detalle del producto: ' + req.params.idProducto);
  } else {
    res.send('Bienvenios al detalle del producto: ' + req.params.idProducto + ' y estás enfocado en el comentario: ' + req.params.idComentario);
  }
});

module.exports = router;