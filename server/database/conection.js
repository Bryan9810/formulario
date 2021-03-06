"use strict"

import mysql from "mysql"
import { config } from "../config"

class Database {
    constructor() {
        this.connection = mysql.createConnection(config.database)
    }

    query(sql, args){
        return new Promise((resolve, reject) => {
            this.connection.query(sql,args, (err, rows) => {
                if (err)
                    return reject(err)
                resolve(rows)
            })
        })
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err)
                resolve()
            })
        })
    }
}

export default Database
