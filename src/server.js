
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const publicDirectory = path.join(__dirname, '../public/');

app.use(express.static(publicDirectory));
app.use(bodyParser.json());

app.post('/sendMail',function(req,res){
    var mailDestino = req.body.email;
    var nombre = req.body.nombre;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'diplouade2020@gmail.com',
            pass: 'U4D32020!!'
        }
    });

    var mailOptions = {
        from: 'diplouade2020@gmail.com',
        to: mailDestino,
        // Subject of the message
        subject: 'SendMail Test', 

        // plaintext body
        text: 'Hello to '+ nombre +'!',

        // HTML body
        html:'<p><b>Hello </b> '+ nombre +'</p>'+
            '<p>Este es un Modelo de SendMail<br/></p>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    var msg = "Correo enviado correctamente a: " + correo;
    res.send(msg);
});

app.listen(3000, function(err){
    if(err) throw err;
    console.log('Aplicacion corriendo en puerto ' + 3000);
});

