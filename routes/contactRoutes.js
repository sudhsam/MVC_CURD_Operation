const express = require("express");
const router = express.Router();

//importing controller
const { getContact } = require("../controllers/contactController.js");
const { createContact } = require("../controllers/contactController.js");
const { getContactId } = require("../controllers/contactController.js");
const { updateContact } = require("../controllers/contactController.js");
const { deleteContact } = require("../controllers/contactController.js");

const validateToken = require("../middleware/validateTokenHandler.js");

//all routes
router.use(validateToken);
router.get("/", getContact);
router.post("/", createContact);
router.get("/:id", getContactId), router.put("/:id", updateContact);
router.delete("/:id", updateContact);

module.exports = router;
