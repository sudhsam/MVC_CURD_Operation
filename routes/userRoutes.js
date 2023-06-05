const express = require("express");
const router = express.Router();

//importing controller
const { registerUser } = require("../controllers/userController.js");
const { loginUser } = require("../controllers/userController.js");
const { currentUser } = require("../controllers/userController.js");

const validateToken= require("../middleware/validateTokenHandler.js")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
