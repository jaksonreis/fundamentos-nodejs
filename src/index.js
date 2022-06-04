const express = require('express'); 

const app = express();

app.use(express.json());

/*
   Se reclamar se a porta ja está em uso , utilize o comando "pkill node"
*/

/*
    Get - Post - Put - Patch - Delete
*/

/*
    Tipos de Parâmetros
        Route params => Indent. um recurso para editar/deletar/buscar
        Query Params => Pagination / Filtros 
        Body Params => Os objetos inserção/ alteração (JSON)
        
        *Header

*/



app.get("/courses", (req, res) => {
    const query = req.query;
    console.log(query)

    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (req, res) => {
    const body = req.body;
    console.log(body)

    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log(id)

    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])

})

app.patch("/courses/:id", (req, res) => {

    return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (req, res) => {

    return res.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(3333);
