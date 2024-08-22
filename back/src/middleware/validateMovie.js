module.exports = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster} = req.body

    if(![title, year, director, duration, genre, rate, poster].every(Boolean))return res.status(400).json({message:"faltan datos"})

    if (isNaN(year) || year<0 || year.toString().length<4) return res.status(400).json({message:"el formato del año incorrecto"})

    if(rate < 1 || rate > 10) return res.status(400).json({message:"La calificacion debe ser entre 1 y 10"})
    next()
}