const express = require("express");
const router = express.Router();
module.exports = router;

router.get("/add-meals-form", (req, res, next) => {
    res.render("add-meals-form");
    }
);