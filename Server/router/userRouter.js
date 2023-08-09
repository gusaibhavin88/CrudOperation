import express from "express";
import { getUSers } from "../controller/userController.js";

const router = express.Router();

router.get("/users", getUSers);
router.post("/user", getUSers);
router.get("/user/:id", getUSers);
router.put("/user", getUSers);
router.delete("/user/:id", getUSers);

export default router;
