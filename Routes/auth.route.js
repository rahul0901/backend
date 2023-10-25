import { Router } from "express";
import Login from './../Controllers/Auth.controller.js'

const authRoutes = Router()

authRoutes.use('/login', Login )

export default authRoutes;