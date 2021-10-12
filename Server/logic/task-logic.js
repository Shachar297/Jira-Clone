const taskDao = require("../dao/task-dao");

async function addTask(body) {
    const task = await taskDao.addTask(body);
    return task;
}

async function getAllTasks() {
    const tasks = await taskDao.getAllTasks();
    return tasks;
}

async function deleteIssue(issueId) {
    const issueToDelete = await taskDao.deleteIssue(issueId);
    return issueToDelete;
}

async function moveTask(issueId, statusId) {
    issueId = parseInt(issueId);
    statusId = parseInt(statusId);
    const issue = await taskDao.moveTask(issueId, statusId);
    return issue
}

async function getIssue(issueId) {
    const issue = await taskDao.getIssue(issueId);
    return issue;
}
module.exports = {
    addTask,
    getAllTasks,
    deleteIssue,
    moveTask,
    getIssue
}