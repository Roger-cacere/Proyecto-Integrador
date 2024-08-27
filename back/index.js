const app = require("./src/app")
const conDB = require("./src/config/conecctionDB")
require("dotenv").config();

const{ PORT } = process.env;

conDB()
.then((res)=>{
    app.listen(PORT, ()=> {
        console.log(`server is listening on port ${PORT}`)
    });
})
.catch((err)=> {
    console.error("Error al conectar la base de datos " + err.message)
});

