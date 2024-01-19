const express = require('express')
const endrouteRouter = express.Router()

endrouteRouter.get('/', (req, res) => {
    res.send(`
        <h1>Ruta Final</h1>
            <p>¡Bienvenido a la ruta final!</p>
            <button type="button" onclick="location.href='/'">Inicio</button>`)
})

module.exports = endrouteRouter