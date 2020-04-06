const express = require('express'),
      router = express.Router(),
      productosController = require('../controllers/productosController');

//los dos puntos ":" nos indican que la url recibe un parámetro
//El signo de interrogación "?" al final del parámetro,
//nos indica que dicho parámetro es opcional
router.get('/:idProducto?', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', );

module.exports = router;