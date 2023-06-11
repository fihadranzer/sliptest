

const mongoose = require('mongoose');

const DB = "mongodb+srv://fiha:hola1234@cluster0.y5e6gca.mongodb.net/mernslip?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));