// email-sender.js
const nodemailer = require('nodemailer');

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
    service: 'hotmail', //hotmail, gmail ...
    auth: {
        user: 'votre_nom@hotmail.com', // Remplacez par votre adresse e-mail Gmail
        pass: 'mot_de_passe',   // Remplacez par votre mot de passe Gmail ou utilisez une clé d'application
    },
});

// Définition des options du message
const mailOptions = {
    from: 'votre_nom@hotmail.com', // L'expéditeur doit être votre adresse e-mail Gmail
    to: 'nom_destinateur@gmail.com', // Remplacez par l'adresse e-mail du destinataire
    subject: 'Test d envoi d e-mail avec Node.js',
    text: 'Bonjour, ceci est un test d envoi d e-mail avec Node.js!',
};

// Envoi du message
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error('Erreur lors de l envoi de l e-mail :', error);
    }
    console.log('E-mail envoyé avec succès :', info.response);
});
