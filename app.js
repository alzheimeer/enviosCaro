// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Importa modelos y rutas
const Menu = require('./models/menuModel');
const Item = require('./models/itemModel');
const Order = require('./models/orderModel');
const menuRoutes = require('./router/menuRoutes');
const itemRoutes = require('./router/itemRoutes');
const orderRoutes = require('./router/orderRoutes');

app.use(bodyParser.json());


// Función para verificar la conexión a la base de datos
function checkDatabaseConnection() {
  mongoose.connection.once('open', () => {
    console.log('Conexión a la base de datos establecida');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Error de conexión a la base de datos:', error);
  });
}

// Conecta a la base de datos
mongoose.connect('mongodb+srv://CaritoLe24:Carol2023@cluster0.uhdapby.mongodb.net/delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Verifica la conexión a la base de datos
checkDatabaseConnection();


// Configura las rutas
app.use('/delivery/menu', menuRoutes);
app.use('/delivery/item', itemRoutes);
app.use('/delivery/order', orderRoutes);

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
