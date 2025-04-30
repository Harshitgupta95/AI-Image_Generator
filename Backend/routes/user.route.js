import {registerUser, loginUser, userCredit} from "../controllers/user.controller.js"
import express from "express"
import { userAuth } from "../middlewares/auth.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/credits',userAuth, userCredit)
export default router;