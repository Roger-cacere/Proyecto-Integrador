const validateUser = (req,res,next) => {
    const {name} = req.body;

    if(!name){
        //Tenemos distintas opciones para avisar q hay un error de validacion
        /* next("Nombre invalido o no previsto");  Esto es una posibilidad */
        //Esta es otra forma pero no recomendable
        return res.status(400).json({
            error: "Falta el dato del nombre",
        });

    } else {
        next();
    }
};

module.exports = validateUser;

/* function movieMiddleware (req, res, next) {
    if (!title || !year || !director) {
        throw new Error ("Missing required fields");
    }
    next()

} */