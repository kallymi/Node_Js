// password-generator.js
const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function Password() {
    const passwordGenerate = generatePassword.generate({
        length: 8, 
        numbers: true, 
        symbols: true, 
        uppercase: true, 
        lowercase: true, 
    });

    return passwordGenerate;
}

// Console.log le mot de passe généré
console.log('Mot de passe généré :', Password());
