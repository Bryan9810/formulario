"use strict"

import app from	"./app"
import { config } from "./config"

async function start() {
	app.listen(config.port, () => {})
}

start()