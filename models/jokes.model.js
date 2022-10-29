const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    
}, { timestamps: true, versionKey: false});
//Timestamps:true -> crea los campos de createdAt y updatedAt
//versionKey:false -> elimina el atributo _v

const Broma = mongoose.model("broma", JokeSchema);

module.exports = Broma;