export const config = {
    port: process.env.PORT || 2014,
    database: {
        host: process.env.HOST || "35.202.128.79",
		user: process.env.USER_DB || "francisco",
		password: process.env.PASSWORD_DB || "4lun1d34s*1",
		database: process.env.DB_NAME || "page_contact"
    }
}