const validarHora = (req, res, next) => {
    if (req.dateType >= '12:00' && req.dateType <= '23:59') {
        next()
    } else {
        res.locals.wrongTime = 'Todavía no es la hora, espera hasta las 12:00 para entrar.';
        return res.redirect('/?wrongTime=' + encodeURIComponent(res.locals.wrongTime));
    }
}

module.exports = validarHora