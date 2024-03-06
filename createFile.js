const fs = require('fs');

// Contenu à écrire dans le fichier
const content = 'Hello Node';

// Créer le fichier "welcome.txt" avec le contenu
fs.writeFile('welcome.txt', content, (err) => {
  if (err) throw err;
  console.log('Le fichier "welcome.txt" a été créé avec succès!');
});

