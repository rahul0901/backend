import { Router } from "express";
import { Login, Register } from './../Controllers/Auth.controller.js';

const authRoutes = Router();
authRoutes.post('/login', Login)
authRoutes.post('/register', Register)

export default authRoutes;