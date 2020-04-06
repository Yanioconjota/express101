const express = require('express'),
      router = express.Router(),
      arr = [1, 2, 3, 4, 5],
      obj = {name: 'Janio'};
      series = [
      {nombre : 'breaking bad'},
      {nombre : 'lost'},
      {nombre : 'game of thrones'}
      ];
let finalContent = 'Las series en lista son: ' +`<br>`;
for (let show of series) {
  finalContent += show.nombre + ' ' + `<br>`;
}

router.get('/', (req, res) => {
  res.send('Bienvenidos al sitio');
});

router.get('/array', (req, res) => {
  res.send(arr);
});

router.get('/objeto', (req, res) => {
  res.send(obj);
});

router.get('/contacto', (req, res) => {
  res.send('Déjanos tu contacto');
});

router.get('/serie/:serieId?', (req, res) => {
  let serieId = req.params.serieId;
  if (serieId <= series.length) {
    res.send('La serie recomendada es: ' + series[serieId-1].nombre)
  } else {
    res.send(finalContent)
    
  }
});

module.exports = router;