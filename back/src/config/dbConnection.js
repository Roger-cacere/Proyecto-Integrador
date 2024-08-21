require ("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async ()=>{

    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ckrb41q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Proyecto)`);

};
module.exports = dbCon;{}
