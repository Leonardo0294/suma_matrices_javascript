const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/sumar-matrices', (req, res) => {
    const { filas, columnas, matriz1, matriz2 } = req.body;
    // Validación de entrada
    if (!filas || !columnas || !matriz1 || !matriz2 || matriz1.length !== filas * columnas || matriz2.length !== filas * columnas) {
        return res.status(400).json({ error: 'Datos de entrada incorrectos' });
    }

 // Sumar las matrices
 const resultado = [];
 for (let i = 0; i < filas; i++) {
     resultado.push([]);
     for (let j = 0; j < columnas; j++) {
         resultado[i].push(matriz1[i][j] + matriz2[i][j]);
     }
 }

 res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
