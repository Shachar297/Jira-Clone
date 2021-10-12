const connection = require('./connection-wrapper');

async function getAllStasuses() {
    let sql = `SELECT * from statuses`;

    try {
        const statuses = await connection.execute(sql);
        return statuses;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    getAllStasuses
}