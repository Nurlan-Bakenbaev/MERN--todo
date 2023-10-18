import { Router } from "express";
const router = Router();

router.post('/registration',async(req,res)=>{
    try {
        const {email,password}= req.body
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
