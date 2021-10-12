const express = require("express");
const statusLogic = require("../logic/status-logic");
const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        const stasuses = await statusLogic.getAllStasuses();
        res.json(stasuses)
    } catch (error) {
        return next(error);
    }
});

module.exports = router;