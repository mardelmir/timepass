const express = require('express')
const app = express()

const horaMidd = require('./middlewares/horaMiddleware')
const validarMidd = require('./middlewares/validarHora')

const indexRouter = require('./routes/index')
const endrouteRouter = require('./routes/endroute')

app.use(horaMidd)

app.use('/', indexRouter)
app.use('/endroute', validarMidd, endrouteRouter)

app.use((req, res) => {
    res.status(404).send(`<h1>Página no encontrada</h1><button type="button" onclick="location.href='/'">Volver</button>`)
})

app.listen(3000, ()=> {
    console.log('Timepass está escuchando en el puerto 3000')
})