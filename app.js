// Importer le module Express
const express = require('express');

// Créer une instance d'Express
const app = express();

// Définir une route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express!');
});

// Nouvelle route pour la page "À propos"
app.get('/about', (req, res) => {
    res.send('Ceci est la page À propos de mon application.');
});

// Écouter le port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
