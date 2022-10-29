const Chiste = require("../models/jokes.model");

//Regresa lista de objetos/documentos chiste
module.exports.muestraChistes = (req, res) => {
    Chiste.find()
        .then(todosChistes => res.json({chistes: todosChistes}))//cuando regrese la recivo en una variable que se llamara todoChistes
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};

//Me regresa solo un documento de chiste en base al ID que mandemos en la URL
module.exports.muestraUnChiste = (req, res) => {
    Chiste.findOne({_id: req.params.id}) //findOne significa que encuentra uno
        .then(unChiste => res.json({chiste: unChiste}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};

//Me crea un nuevo chiste en base a lo que reciba en body
module.exports.creaChiste = (req, res) => {
    Chiste.create(req.body)
        .then(nuevoChiste => res.json({chiste: nuevoChiste})) // {chiste: nuevoChiste} para que me cree con el nombre de chiste: antes de la lista con las llaves{}
        .catch(err => res.json({message: "Algo salió mal", error: err}))
} 

//Me actualiza el chiste en base a lo que reciba en body y lo que reciba en id URL
module.exports.actualizaChiste = (req, res) => {
    Chiste.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})//el id lo usamos para borrar, mostrar y actualizar 
        .then(chisteActualizado => res.json({chiste: chisteActualizado})) //{chiste: chisteActualizado} con las {} aparece el nombre de chiste:
        .catch(err => res.json({message: "Algo salió mal", error: err}))
}

//Borramos un chiste en base al ID que tenemos en la URL
module.exports.borrarChiste = (req, res) => {
    Chiste.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
}

