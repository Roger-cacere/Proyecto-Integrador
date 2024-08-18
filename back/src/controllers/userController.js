const usersService = require("../services/usersService");

module.exports = {
    getAllUsers : async (req, res) => {
        try {
            const users = await usersService.getUsers();
            res.status(200).json(users);
        }catch (error){
            res.status(500).json({
                error: "Error interno del servidor",
            });
        }
    },

    createUser: async(req, res) => {
        const {name} = req.body; //Propiedad body

        try{  
        await usersService.createUser(name);
        res.status(201).json({
            massage: "Usuario creado correctamente"
        }); 
    } catch (error){
        res.status(500).json({
            error: "Error al crear el usuario"
        })
    }
  },
};
