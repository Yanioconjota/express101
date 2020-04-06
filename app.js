const express = require('express'),
    app = express(),
    port = 3000,
    rutasProductos = require('./routes/productos.js'),
    rutasMain = require('./routes/main');


app.use('/productos', rutasProductos);
app.use('/', rutasMain);
// app.use('/marcas', rutasMarcas);

app.listen(port, () => console.log('SITE RUNNING ON PORT: ' + port));

