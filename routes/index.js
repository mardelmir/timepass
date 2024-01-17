const express = require('express')
const indexRouter = express.Router()

indexRouter.get('/', (req, res) => {
    const message = req.query.wrongTime || ''
    res.send(`
        <h1>¡Bienvenido!</h1>
            <p>Hora actual: <b>${req.dateType}</b></p>
            <p>${message}</p>
            <button type="button" onclick="location.href='/endroute'">Entrar</button>`)
})

module.exports = indexRouter