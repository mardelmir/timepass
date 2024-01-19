const express = require('express')
const endrouteRouter = express.Router()

// Corrección clase:

// const validarHora = require('../middlewares/validarHora)
//endrouteRouter.get('/', validarHora, (req, res) => { ... } porque sólo queremos la validación en este endpoint


endrouteRouter.get('/', (req, res) => {
    res.send(`
        <h1>Ruta Final</h1>
            <p>¡Bienvenido a la ruta final!</p>
            <button type="button" onclick="location.href='/'">Inicio</button>`)
})

module.exports = endrouteRouter