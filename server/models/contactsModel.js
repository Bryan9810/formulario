"use strict"

import Database from "../database/conection"

const database = new Database
const contactsModel = {}

contactsModel.addRegister = (body, callback) => {
    let id_contacts = body.id_contacts
    let name_contact = body.name_contact
    let lastname = body.lastname
    let email = body.email
    let area = body.area
    let experience = body.experience
    let linkedin = body.linkedin
    let twitter = body.twitter
    let link_hdv = body.link_hdv
    let phone = body.phone
    let date_register = body.date_register
    let portals_id_portals = body.portals_id_portals
   
    database.query("CALL spr_add_register (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [id_contacts, name_contact, lastname, email, area, experience, linkedin, twitter, link_hdv, phone, date_register, portals_id_portals]).then(() => {
        callback(null, "Gracias por tu interes, ¡pronto nos contactaremos contigo!")
    }).catch(err => {
        callback(err, null)
    })
}

export default contactsModel