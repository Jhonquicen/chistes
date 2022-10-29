const ChisteController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", ChisteController.muestraChistes);
    app.get("/api/jokes/:id", ChisteController.muestraUnChiste);
    app.post("/api/jokes/new", ChisteController.creaChiste);
    app.put("/api/jokes/update/:id", ChisteController.actualizaChiste);
    app.delete("/api/jokes/delete/:id", ChisteController.borrarChiste);
};
