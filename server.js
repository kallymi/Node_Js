// server.js
const http = require('http');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  // Configurer les en-têtes de réponse
   res.writeHead(200, {'Content-Type': 'text/html'});

  // Répondre avec le contenu HTML
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Écouter le port 3000
const port = 3000;
server.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
