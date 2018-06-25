const mongoose = require('mongoose')
    schema = mongoose.Schema;

    let userSchema = new schema({
        firstname: {
            type: String, //Pueden ser string, number, Boolean, etc.
            required: true //Campo obligatorio, o equivalente en SQL: Not null.
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true // Campo único. que no puede repetirse.
        },
        editable: {
            type: Boolean,
            required: true
        },
    });

    module.exports = mongoose.model('User', userSchema); //Aquí se exporta el modelo como User.
