const mongoose = require('mongoose')

const Esquema = mongoose.Schema
const EsquemaPersonaje = new Esquema({
    nombre: String,
    descripcion: String,
    franquicia: String,
    aspecto: Number,
});

module.exports = mongoose.model('Personaje', EsquemaPersonaje);