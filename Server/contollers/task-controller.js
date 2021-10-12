const express = require("express");
const taskLogic = require("../logic/task-logic");
const router = express.Router();


router.post("/", async (req, res, next) => {

    const taskBody = req.body;
    try {
        let tasks = await taskLogic.addTask(taskBody);
        res.json(tasks);
    } catch (error) {
        return next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    const statusId = req.body.statusId
    const taskId = req.params.id;

    console.log(taskId, statusId);
    try {
        const tasks = await taskLogic.moveTask(taskId, statusId);
        res.json(tasks);
    } catch (error) {
        return next(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const tasks = await taskLogic.getAllTasks();
        res.json(tasks);
    } catch (error) {
        return next(error);
    }
});

router.delete("/:id" , async (req, res, next) => {
    const issueId = req.params.id;

    try {
        const issueToDelete = await taskLogic.deleteIssue(issueId);
        res.json(issueToDelete);
    } catch (error) {
        return next(error);
    }
});

router.get("/:id" , async (req, res, next) => {
    const issueId = req.params.id;

    try {
        const issue = await taskLogic.getIssue(issueId);
        res.json(issue);
    } catch (error) {
        return next(error);
    }
})
module.exports = router;
