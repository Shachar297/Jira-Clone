const statusDao = require('../dao/status-dao');

async function getAllStasuses() {
    const statuses = await statusDao.getAllStasuses();
    return statuses
}

module.exports = {
    getAllStasuses
}