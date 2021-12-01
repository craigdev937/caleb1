import express from "express";
import { HomeIndex } from "../controllers/todoCon.js";

export const todoRt = express.Router();
    todoRt.get("/", HomeIndex);



