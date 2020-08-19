/*const path  = require('path')*/
var express = require('express')
var app = express()

/*const  publicDirectory = path.join(__dirname, '../public/')*/
var mailDestino
var nombre
app.post('/',function(req,res){
    formulario = res.body
    mailDestino = formulario.mail;
    nombre = formulario.nombre;
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'diplouade2020@gmail.com',
    pass: 'U4D32020!!'
  }
});

var descripcion = 'Estimad@' + nombre + '/n' + 'Contestamos a su duda'

var mailOptions = {
  from: 'diplouade2020@gmail.com',
  to: mailDestino,
  subject: 'Info DiploUade',
  text: descripcion
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});