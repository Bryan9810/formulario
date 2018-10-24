"use strict"

const response = {}

response.server = (res, status, success, message) => res.status(status).send({success, message})

export default response