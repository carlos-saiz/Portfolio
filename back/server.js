const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB (usaremos MongoDB Atlas)
mongoose.connect('URL_DE_TU_BASE_DE_DATOS', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir rutas aquí

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});

app.use('/api', routes);