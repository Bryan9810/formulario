"use strict"

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import contactsController from "./controllers/contactsController"

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: 1024102420, type: "aplication/json" }))

app.use("/contact", contactsController)

export default app
