
exports.newPost = (req, res) => {
    res.json('Nuevo Post Creado')
}

exports.listPosts = (req, res) => {
    res.json('Lista de Posts')
}

exports.post = (req, res) => {
    let id = req.params.id;
    res.json(`Post ${id}`)
}