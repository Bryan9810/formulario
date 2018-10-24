"use strict"

import Database from "../database/connection"

const database = new Database
const contactsModel = {}
s
contactsModel.addRegister = (body, callback) => {
    let name_contact = body.name_contact
    let lastname = body.lastname
    let email = body.email
    let organization = body.organization
    let message = body.message
    
   
    database.query("CALL spr_insert_contacts (?, ?, ?, ?)", [name_contact, lastname, email, organization, message]).then(() => {
        callback(null, "Gracias por tu interes, ¡pronto nos contactaremos contigo!")
    }).catch(err => {
        callback(err, null)
    })
}

export default contactsModel