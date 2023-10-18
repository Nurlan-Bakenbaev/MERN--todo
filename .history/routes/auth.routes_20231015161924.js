import { Router } from "express";
const router = Router();
import User from '../models/'
router.post('/registration',async(req,res)=>{
    try {
        const {email,password}= req.body
        const isUsed = await User
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
