const users = [
    {
        id: 1,
        name: "Jorge",
    },
    {
        id: 2,
        name: "Belu",
    },
    {
        id: 3,
        name: "Alejo",
    },
];

let id = 4;

module.exports = {
    getUsers : async () => {
        
        //Consultar a una base de datos(BDD)
        //Realizar una solicitud a un servicio externo
        //Leeran la informacion de un archivo
        /* Cualquiera de las 3 opciones son operaciones asincronas 
        Recordar q todas las operaciones de tipo async retornan una promesa */

        
        return users;
    },
    
    createUser: async(name) => {
        const newUser = {
            id,
            name,
        };
        id++;
        users.push(newUser);
    },
};