const fs = require('fs');

// Lire le contenu du fichier "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }
  console.log('Contenu de welcome.txt :\n', data);
});
