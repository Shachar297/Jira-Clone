const connection = require("./connection-wrapper");

async function addTask(task) {
    let sql = `
    insert into tasks
    (summary , status_id)
    values(?,?)`;
    let parameters = [task.summary, task.statusId];


    try {
        const taskManager = await connection.executeWithParameters(sql, parameters);
        // let status = calculateStatus(task);
        // await setTaskStatus(taskManager.insertId, status);
        return taskManager;
    } catch (error) {
        throw new Error(error)
    }

}

async function moveTask(taskId, statusId) {
    let sql = `
    UPDATE tasks set status_id = ? where id = ?
    `;
    let parameters = [statusId, taskId];
    try {
        const taskManager = await connection.executeWithParameters(sql, parameters);
        return taskManager
    } catch (error) {
        throw new Error(error);
    }
}

function calculateStatus(task) {
    let status = "";
    switch (task.statusId) {
        case '1':
            status = "to_do"
            break;
        case '2':
            status = "in_progress";

            break;

        case '3':
            status = "done";
            break;

        default:
            status = "";
    }
    return status;
}

async function getAllTasks() {
    let sql = `
    SELECT
    t.id, t.summary, t.status_id as statusId , 
    s.status from tasks t 
    JOIN statuses s 
    ON s.id = t.status_id
    `;

    try {

        const tasks = await connection.execute(sql);
        return tasks;
    } catch (error) {
        throw new Error(error);

    }
}

async function deleteIssue(issueId) {
    let sql = `
    DELETE FROM tasks WHERE id = ?`;
    let parameters = [issueId];

    try {
        const issueToDelete = await connection.executeWithParameters(sql, parameters);
        return issueToDelete;
    } catch (error) {
        throw new Error(error);
    }
}

async function getIssue(issueId) {
    let sql = `
    SELECT
    t.id, t.summary, t.status_id , 
    s.status from tasks t 
    JOIN statuses s on s.id = t.status_id 
    WHERE t.id = ?
    `;
    let parameters = [issueId];

    try {
        const issue = await connection.executeWithParameters(sql, parameters);
        return issue;
    } catch (error) {
        throw new Error(error);
    }
}
module.exports = {
    addTask,
    getAllTasks,
    deleteIssue,
    moveTask,
    getIssue
}