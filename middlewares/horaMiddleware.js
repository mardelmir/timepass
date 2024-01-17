const horaMiddleware = (req, res, next) => {
    const now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()

    hour < 10 ? hour = `0${hour}` : hour
    min < 10 ? min = `0${min}` : min

    req.dateType = `${hour}:${min}`
    next()
}

module.exports = horaMiddleware