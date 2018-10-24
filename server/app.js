"use strict"

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: 1024102420, type: "aplication/json" }))

export default app
