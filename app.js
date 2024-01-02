// Importer le module Express
const express = require('express');

// Créer une instance d'Express
const app = express();

// Définir une route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express!');
});

// Écouter le port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
