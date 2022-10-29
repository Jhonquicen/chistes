// encargado de conectar con la base de datos
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chistes", { // aca se cambia es el nombre de la base de datos
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MonogDB conectado"))
    .catch(err => console.log("Algo salió mal con mongo", err));