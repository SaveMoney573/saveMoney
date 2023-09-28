const express = require("express");
const passport = require("passport");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });
const userController = require("../controllers/userController");

// **************Endpoints**************

// **************Endpoints for creating token**************
router.post("/register", userController.register);
router.post("/login", userController.login);

// **************Endpoints which will send Bearer token in their headers**************
router.get(
  "/update",
  passport.authenticate("jwt", { session: false }),
  userController.update
);

module.exports = router;