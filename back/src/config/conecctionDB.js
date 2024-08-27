const mongoose = require ("mongoose")
require("dotenv").config();

const conDB = async () => {

    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ckrb41q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Proyecto&authSource=admin`);
}

module.exports = conDB;