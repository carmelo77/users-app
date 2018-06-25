const express = require('express');
const route = express.Router(); 

const User = require('../models/user');

route.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
});

route.post('/users/create', (req, res) => {
    delete req.body._id; // Punto 1. (al final de este archivo.)
    User.create(req.body, (err, user) => { //Punto 2. (al final de este archivo.)
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

route.put('/users/:id', (req, res) => {
    delete req.body._id; // Punto 3. (Al final de este archivo.)
    User.update({_id: req.params.id}, req.body, (err, user) => { // Punto 4. (al final de este archivo.)
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

route.delete('/users/:id', (req, res) => {
    User.deleteOne({_id: req.params.id}, (err, user) => {
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

module.exports = route;


// 1 = Esto es para eliminar del user enviado el _id, ya q en el modelo, 
//generamos un aleatorio con Math. Lo eliminamos para que mongo, cree el suyo automaticamente.

// 2 = Los parametros de la funcion anonima (err y user). Son para controlar si se ejecuta o no, el guardado
// de datos, puede ser err, el user es opcional, el nombre varía según el módulo que estemos trabajando o, bien 
//podemos poner data. Y, puede haber un parametro llamado status. con el cual podemos comprobar si el estado es 
//200, 500 u algun otro.

// 3 = Esto es para eliminar del editUser enviado el _id, ya q en el modelo,
//generamos un aleatorio con Math. Lo eliminamos para que mongo, cree el suyo automaticamente.

// 4 = con _id: Es el el param a buscar en la bd de mongo, 
//req.params.id es el id enviado como parametro en la ruta. Buscamos el q sea igual a ese. luego el req.body
//Que es todo los nuevos datos de edicion a guardar.