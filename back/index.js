/* const express = require("express"); */
const app = require("./src/server.js");
const dbCon = require("./src/config/dbConnection.js")

dbCon()
.then(() =>{
    app.listen(3000, () => {
        console.log("Servidor escucha el puerto 3000");
    })
})
.catch((error) => {
    console.log(error);
});


