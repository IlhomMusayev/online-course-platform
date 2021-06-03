require('dotenv').config();
const { env } = process;

module.exports = {
    PG_DB: env.PGDB
}