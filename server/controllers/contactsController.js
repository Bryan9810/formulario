import express from "express"
import bodyParser from "body-parser"
import response from "../config/serverMessage"
import contactsModel from "../models/contactsModel"

const router = express.Router()
router.use(bodyParser.json())

router.post("/insert", (req, res) => {
    if (!req.body)
        return response.server(res, 500, 0, "No encontramos el formulario, intenta nuevamente")

    let body = req.body

    if(!body.name_contact || !body.lastname || !body.email || !body.organization || !body.message  )
        return response.server(res, 400, 0, "Todos los campos son obligatorios, por favor digítalos.")

    contactsModel.addRegister(body, (err, data) => {
        err ? response.server(res, 500, 0, `Ocurrio un error al insertar la informacion: ${err}`) : response.server(res, 201, 1, data)
    })
})

export default router