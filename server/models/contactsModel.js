"use strict"

import Database from "../database/conection"

const database = new Database
const contactsModel = {}

contactsModel.addRegister = (body, callback) => {
    let id_contacts = body.id_contacts
    let name_contact = body.name_contact
    let lastname = body.lastname
    let email = body.email
    let organization = body.organization
    let message = body.message
    let portals_id_portals = body.portals_id_portals
   
    database.query("CALL spr_add_register (?, ?, ?, ?, ?, ?, ?)", [id_contacts, name_contact, lastname, email, organization, message, portals_id_portals]).then(() => {
        callback(null, "Gracias por tu interes, ¡pronto nos contactaremos contigo!")
    }).catch(err => {
        callback(err, null)
    })
}

export default contactsModel